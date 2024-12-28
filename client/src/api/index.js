import axios from 'axios';
export const domain = 'http://localhost:5000';

export const checkUser = async (email) => {
    const {data} = await axios.post(`${domain}/api/checkUser`, {email});
    return data;
}

export const createUser = async (userData) => {
    const {data} = await axios.post(`${domain}/api/createUser`, userData);
    return data;
}