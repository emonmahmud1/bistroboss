import { MdDeleteForever } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import Title from "./../../Shared/Title/Title";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Cart = () => {
  const [deleteId, setDeleteId] = useState(null);
  const [cart,refetch] = useCart();
  const axiosInstance = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleClose = () => {
    const modal = document.getElementById("my_modal_3");
    modal.close();
  };
  const handleDelete = (itemId) => {
    setDeleteId(itemId);
    const modal = document.getElementById("my_modal_3");
    modal.showModal();
  };

  const confirmDelete = () => {
    axiosInstance.delete(`/carts/${deleteId}`).then((res) => {
      console.log(res);
      handleClose();
      refetch();
      toast.success('deleted from carts');
    });
  };
  return (
    <div className="">
      <div>
        <Title title="wanna add more"></Title>
      </div>
      <div className="md:w-3/4 w-11/12 mx-auto bg-white p-4">
        <div className="uppercase flex gap-6">
          <p className="lg:text-3xl text-xl  font-bold">
            Total orders: {cart?.length}
          </p>
          <p className="lg:text-3xl text-xl font-bold">
            Total price: {totalPrice}
          </p>
          <button className="btn bg-[#D1A054] text-white lg:btn-md btn-sm">
            pay
          </button>
        </div>

        <div className="overflow-x-auto mt-3">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] rounded-tr-lg uppercase">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price </th>
                <th>Action </th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {cart?.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="Avatar " />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost text-xl text-red-500"
                    >
                      <MdDeleteForever />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* modal */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="my-4">
              <p className="text-xl">
                Are you Sure to Delete this item From Your Cart?
              </p>
            </div>
            <div className=" flex justify-evenly gap-4">
              <button
                onClick={handleClose}
                className="btn btn-ghost bg-[#D1A054]"
              >
                Cancle
              </button>
              <button onClick={confirmDelete} className="btn bg-red-500">
                Delete
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
