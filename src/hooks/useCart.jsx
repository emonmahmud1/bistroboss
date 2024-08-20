import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from './../contextProvider/AuthProvider';

const useCart = () => {
    const {user}=useContext(AuthContext)
  const axiosInstance = useAxiosSecure();
  const { data: cart=[],refetch } = useQuery({
    queryKey: ["cart",user?.email],
    queryFn: async () => {
      const result = await axiosInstance.get(`/carts?email=${user.email}`);
      return result.data;
    },
  });
  return [cart,refetch];
};

export default useCart;
