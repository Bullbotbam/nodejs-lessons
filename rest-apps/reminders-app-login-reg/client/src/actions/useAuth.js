import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuth = (link = "user/login") => {
    const nav = useNavigate();

    axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:8080/user/auth"
    })
        .then( res => {
            if ( !res.data.user ) {
                return nav("/" + link)
            } else {
                return console.log("User authenticated!")
            }
        })
        .catch(err => {
            console.log(err);
            nav("/" + link);
        })
}

export default  useAuth