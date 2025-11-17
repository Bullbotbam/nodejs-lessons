const express = require('express');
const Pumpkin = require('../models/Pumpkin');
const router = express.Router();

// Create a new pumpkin
router.post('/pumpkins', async (req, res) => {
  try {
    const { name, weight, color, price } = req.body;
    const pumpkin = new Pumpkin({ name, weight, color, price });
    await pumpkin.save();
    res.status(201).send(pumpkin);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Get all pumpkins
router.get('/pumpkins', async (req, res) => {
  try {
    const pumpkins = await Pumpkin.find();
    res.status(200).send(pumpkins);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Get a single pumpkin by ID
router.get('/pumpkins/:id', async (req, res) => {
  try {
    const pumpkin = await Pumpkin.findById(req.params.id);
    if (!pumpkin) return res.status(404).send({ message: 'Pumpkin not found' });
    res.status(200).send(pumpkin);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Update a pumpkin by ID
router.patch('/pumpkins/:id', async (req, res) => {
  try {
    const { name, weight, color, price } = req.body;
    const pumpkin = await Pumpkin.findByIdAndUpdate(
      req.params.id,
      { name, weight, color, price },
      { new: true, runValidators: true }
    );
    if (!pumpkin) return res.status(404).send({ message: 'Pumpkin not found' });
    res.status(200).send(pumpkin);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Delete a pumpkin by ID
router.delete('/pumpkins/:id', async (req, res) => {
  try {
    const pumpkin = await Pumpkin.findByIdAndDelete(req.params.id);
    if (!pumpkin) return res.status(404).send({ message: 'Pumpkin not found' });
    res.status(200).send({ message: 'Pumpkin deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
