import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "./../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "./../../../hooks/useMenu";
import FoodCards from "./../FoodCards/FoodCards";
import { useParams } from "react-router-dom";

const OrderFood = () => {
  const categories = ["salad", "soup", "dessert", "pizza"];
  const { category } = useParams();
  const initialIndexOfIitem = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndexOfIitem);
  const [menuData] = useMenu();
  const salad = menuData.filter((item) => item.category === "salad");
  const soup = menuData.filter((item) => item.category === "soup");
  const desserts = menuData.filter((item) => item.category === "dessert");
  const pizzas = menuData.filter((item) => item.category === "pizza");
  return (
    <div className="mb-10">
      <Cover
        coverImg={orderImg}
        titleText="Our shop"
        secondaryText="Would you like to try a dish?"
      />
      <div className="mt-14 md:w-4/5 mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="w-1/2 mx-auto mb-10">
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Desserts</Tab>
            <Tab>Pizza</Tab>
          </TabList>

          <TabPanel>
            <FoodCards items={salad} />
          </TabPanel>
          <TabPanel>
            <FoodCards items={soup} />
          </TabPanel>
          <TabPanel>
            <FoodCards items={desserts} />
          </TabPanel>
          <TabPanel>
            <FoodCards items={pizzas} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
