import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        common: {
            'Authorization': 'AUTH_TOKEN_FROM_INSTANCE'
        }
    }
});


export default instance;