import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL; 

const axiosInstance = axios.create(
  {
    baseURL: baseURL,
  }
)

export default axiosInstance;