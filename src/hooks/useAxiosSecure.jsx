import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
  });
const useAxiosSecure = () => {
return axiosInstance;
    
};

export default useAxiosSecure;