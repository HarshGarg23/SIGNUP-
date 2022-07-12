import axios from 'axios';
const URL = 'http://localhost:8000';

export const userauthenticate = async(data) => {
    try{
        return await axios.post(`${URL}/signup`, data);
    }catch(err){
        console.log(err.message);
    }
}
