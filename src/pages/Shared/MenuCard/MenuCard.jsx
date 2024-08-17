const MenuCard = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  console.log(item);
  return (
    <div className="card card-compact bg-base-100 w-full shadow-sm hover:shadow-lg h-full">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <div className="card-body bg-[#F3F3F3]">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-[#737373]">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-center">
          <button className="btn text-[#BB8506] btn-outline border-0 border-b-2 uppercase bg-[#E8E8E8]">
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
