import React from "react";
import Cover from "../../Shared/Cover/Cover";
import imgMenu from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import MenueItem from "../../Shared/MenueItem/MenueItem";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import Title from "./../../Shared/Title/Title";
import Button from "./../../../components/Button/Button";
import MenuCategory from "./../MenuCategory/MenuCategory";

const Menu = () => {
  const [menuData] = useMenu();
  const desserts = menuData.filter((item) => item.category === "dessert");
  const soup = menuData.filter((item) => item.category === "soup");
  const salad = menuData.filter((item) => item.category === "salad");
  const pizza = menuData.filter((item) => item.category === "pizza");
  const offered = menuData.filter((item) => item.category === "offered");

  return (
    <div>
      <Cover
        coverImg={imgMenu}
        titleText="Our Menu"
        secondaryText="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
      />

      {/* todays offer */}
      <Title title="Today's offer" />
      <MenuCategory items={offered} />
      {/* dessert */}
      <MenuCategory
        title="dessert"
        titleSecondText="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
        img={dessertImg}
        items={desserts}
      />
      {/* pizza */}
      <MenuCategory
        title="pizza"
        titleSecondText="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
        img={pizzaImg}
        items={pizza}
      />

      {/* soups */}
      <MenuCategory
        title="soup"
        titleSecondText="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
        img={soupImg}
        items={soup}
      />
      {/* salads */}
      <MenuCategory
        title="salad"
        titleSecondText="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
        img={saladImg}
        items={salad}
      />
    </div>
  );
};

export default Menu;
