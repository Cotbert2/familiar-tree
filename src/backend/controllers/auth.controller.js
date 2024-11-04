import User from '../models/user.model.js';
import { ENCRYPTATION_LAYERS } from './../config.js'

import bcrypt from 'bcryptjs';

export const register = async (req,res) => {
    const { username, email, password } = req.body;
    
    try{
        const cypherPassword =  await bcrypt.hash(password, ENCRYPTATION_LAYERS);
        const registeredUser = new User({ username, email, password : cypherPassword });
        const savedUser = await registeredUser.save();
        console.log(`User ${username} registered successfully`);
        res.json(savedUser);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.send('User registration failed');
    }
};

export const login = (req,res) => {
    console.log(req.body);
    res.send('Login');
};

