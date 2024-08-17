import { useEffect, useState } from "react";
import Title from "./../../Shared/Title/Title";
import MenueItem from "../../Shared/MenueItem/MenueItem";
import useMenu from "../../../hooks/useMenu";
const PopularMenu = () => {
  // const [menuData, setMenuData] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenuData(popularItems);
  //     });
  // }, []);
  const [menuData]=useMenu();
  const popularData = menuData.filter((item) => item.category === "popular");

  return (
    <section className="mb-14">
      <Title title="popular menu"></Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {popularData?.map((item) => (
          <MenueItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-3">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
