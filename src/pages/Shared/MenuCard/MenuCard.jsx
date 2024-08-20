import { useContext } from "react";
import { AuthContext } from "../../../contextProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const MenuCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosSecure();
  const [, refetch] = useCart();
  const { name, recipe, image, category, price, _id } = item;
  const handleAddCart = (food) => {
    if (user) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
      };
      axiosInstance.post("/carts", cartItem).then((response) => {
        if (response.data.insertedId) {
          toast.success("added to cart");
        }
        refetch();
      });
    }
  };
  return (
    <div className="card relative card-compact bg-base-100 w-full shadow-sm hover:shadow-lg h-full">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <p className="absolute right-3 text-white bg-[#111827] p-1 m-2 rounded-md">
        ${price}
      </p>
      <div className="card-body bg-[#F3F3F3]">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-[#737373]">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddCart(item)}
            className="btn text-[#BB8506] btn-outline border-0 border-b-2 uppercase bg-[#E8E8E8]"
          >
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
