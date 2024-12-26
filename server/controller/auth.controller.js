import { db } from '../database/index.js';

export const checkUser = async (req, res) => {
    const {email} = req.body;
    const user = await db.user.findUnique({ where: { email } });
    if(user){
        return res.json('user found')
    }else{
        return res.json('user not found')
    }
}