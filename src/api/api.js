import axios from 'axios';
import { getCookie } from '../utils/cookiesHandler';

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const BASE = 'http://localhost:3001/api/v1/'; 

export async function login({email, password}){
    try {
        const result = await axios.post(`${BASE}auth/login`, { email: email, password: password });
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
        const result = await axios.post(`${BASE}users`, info);
        return result.data;
    } catch (error) {
        console.log('error',error)
    }
}


export function getUserInfo(){
    try {
        const result = axios.get(`${BASE}users/my-user`, { headers:{ 'authorization': `Bearer ${getCookie('token')}` } })
        return result;
    } catch (error) {
        console.log('error', error)
    }
}

export function getUserOrders(){
    try {
        const result = axios.get(`${BASE}orders/my-orders`, { headers:{ 'authorization': `Bearer ${getCookie('token')}` } })
        return result;
    } catch (error) {
        console.log('error', error)
    }
}


