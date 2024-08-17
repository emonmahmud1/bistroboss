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
      <div>
        <Title title="Today's offer" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {offered?.map((item) => (
            <MenueItem key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Button btnTitle="order your fevorite food" />
        </div>
      </div>
      {/* dessert */}
      <div className="mt-14 mb-14">
        <Cover
          coverImg={dessertImg}
          titleText="Dessert"
          secondaryText="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {desserts?.map((item) => (
            <MenueItem key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center ">
          <Button btnTitle="order your fevorite food" />
        </div>
      </div>
      {/* pizza */}
      <div className="mt-14 mb-14">
        <Cover
          coverImg={pizzaImg}
          titleText="pizza"
          secondaryText="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {pizza?.map((item) => (
            <MenueItem key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center ">
          <Button btnTitle="order your fevorite food" />
        </div>
      </div>

      {/* soups */}
      <div className="mt-14 mb-14">
        <Cover
          coverImg={soupImg}
          titleText="soups"
          secondaryText="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {soup?.map((item) => (
            <MenueItem key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center ">
          <Button btnTitle="order your fevorite food" />
        </div>
      </div>
      {/* salads */}
      <div className="mt-14 mb-14">
        <Cover
          coverImg={saladImg}
          titleText="salad"
          secondaryText="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {salad?.map((item) => (
            <MenueItem key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center ">
          <Button btnTitle="order your fevorite food" />
        </div>
      </div>


    </div>
  );
};

export default Menu;
