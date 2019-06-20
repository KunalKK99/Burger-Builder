import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-kk99.firebaseio.com/'
});

export default instance;