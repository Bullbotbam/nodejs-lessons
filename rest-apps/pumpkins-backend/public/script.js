// Handle Add Pumpkin
document.getElementById('pumpkinForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const color = document.getElementById('color').value;
    const price = document.getElementById('price').value;

    try {
        
        const response = await fetch('http://localhost:3000/api/pumpkins', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, weight, color, price }),
        });
        if (response.ok) {
            // console.log(stringify(price))
            console.log(+price)
            const pumpkin = await response.json();
            document.getElementById('responseMessage').innerText = `Pumpkin added: ${pumpkin.name}`;
            document.getElementById('pumpkinForm').reset();
            loadPumpkins();
        } else {
            const error = await response.json();
            document.getElementById('responseMessage').innerText = `Error: ${error.message}`;
        }
    } catch (error) {
        document.getElementById('responseMessage').innerText = `Error: ${error.message}`;
    }
});

// Handle Update Pumpkin
document.getElementById('updateForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const weight = document.getElementById('updateWeight').value;
    const color = document.getElementById('updateColor').value;
    const price = document.getElementById('updatePrice').value;

    const updatedData = {};
    if (name) updatedData.name = name;
    if (weight) updatedData.weight = weight;
    if (color) updatedData.color = color;
    if (price) updatedData.price = price;

    try {
        const response = await fetch(`http://localhost:3000/api/pumpkins/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        });
        if (response.ok) {
            const pumpkin = await response.json();
            document.getElementById('responseMessage').innerText = `Pumpkin updated: ${pumpkin.name}`;
            document.getElementById('updateForm').reset();
            loadPumpkins();
        } else {
            const error = await response.json();
            document.getElementById('responseMessage').innerText = `Error: ${error.message}`;
        }
    } catch (error) {
        document.getElementById('responseMessage').innerText = `Error: ${error.message}`;
    }
});

// Handle Delete Pumpkin
document.getElementById('deleteForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = document.getElementById('deleteId').value;

    try {
        const response = await fetch(`http://localhost:3000/api/pumpkins/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.getElementById('responseMessage').innerText = 'Pumpkin deleted successfully';
            document.getElementById('deleteForm').reset();
            loadPumpkins();
        } else {
            const error = await response.json();
            document.getElementById('responseMessage').innerText = `Error: ${error.message}`;
        }
    } catch (error) {
        document.getElementById('responseMessage').innerText = `Error: ${error.message}`;
    }
});

// Load All Pumpkins
async function loadPumpkins() {
    try {
        const response = await fetch('http://localhost:3000/api/pumpkins');
        const pumpkins = await response.json();
        const pumpkinList = document.getElementById('pumpkinList');
        pumpkinList.innerHTML = ''; // Clear previous entries
        pumpkins.forEach(pumpkin => {
            const pumpkinItem = document.createElement('div');
            pumpkinItem.innerText = `ID: ${pumpkin._id}, Name: ${pumpkin.name}, Weight: ${pumpkin.weight} kg, Color: ${pumpkin.color}, Price: $${pumpkin.price}`;
            pumpkinList.appendChild(pumpkinItem);
        });
    } catch (error) {
        console.error('Error loading pumpkins:', error);
    }
}

// Load pumpkins when the page loads
window.onload = loadPumpkins;
