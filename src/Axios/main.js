import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:5000/order/'
});

export default axiosInstance;