import axios from 'axios';

export async function login({email, password}){
    try {
        const result = await axios.post('http://localhost:3001/api/v1/auth/login', { email: email, password: password });
        return result.data;
    } catch (error) {
        console.log(error)
    }
}

export async function signUp({ name, email, user_name, password }){
    try {
        //verify
        const info = {
            name,
            email,
            user_name,
            password,
        }
        const result = await axios.post('http://localhost:3001/api/v1/users', info);
        return result.data;
    } catch (error) {
        console.log('error',error)
    }
}