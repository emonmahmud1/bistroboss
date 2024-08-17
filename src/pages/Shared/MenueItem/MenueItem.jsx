
const MenueItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-4">
      <img
        className="w-28 h-24 rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]"
        src={image}
        alt=""
      />
      <div className="w-full">
        <div className="flex justify-between">
          <h3 className="text-xl uppercase">{name} -----------</h3>
          <h3 className="text-xl text-[#BB8506]">${price}</h3>
        </div>
        <p className="text-[#737373] mt-2 max-w-[400px]">{recipe}</p>
      </div>
    </div>
  );
};

export default MenueItem;
