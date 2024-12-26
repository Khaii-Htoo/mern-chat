import axios from 'axios';
export const domain = 'http://localhost:5000';

export const checkUser = async (email) => {
    const res = await axios.post(`${domain}/api/checkUser`, {email});
    console.log(res.data);
}