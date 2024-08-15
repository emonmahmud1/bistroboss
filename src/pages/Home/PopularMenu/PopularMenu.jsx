import { useEffect, useState } from "react";
import Title from "./../../Shared/Title/Title";
import MenueItem from "../../Shared/MenueItem/MenueItem";
const PopularMenu = () => {
    const [menuData,setMenuData] = useState([])
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems =data.filter(item => item.category ==='popular')
        setMenuData(popularItems)});
  }, []);
  
  return (
    <section className="mb-5">
      <Title title="popular menu"></Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuData?.map(item => <MenueItem key={item._id}  item={item}/>)}
      </div>
    </section>
  );
};

export default PopularMenu;
