import axiosInstance from '../../../utils/AxiosInstance'

export default function auth(credentials) {
  return axiosInstance
  .post('/auth', credentials)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.error(error);
  })
}