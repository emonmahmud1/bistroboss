import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "./../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "./../../../hooks/useMenu";
import MenuCard from "../../Shared/MenuCard/MenuCard";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menuData] = useMenu();
  const salad = menuData.filter((item) => item.category === "salad");
  const soup = menuData.filter((item) => item.category === "soup");
  const desserts = menuData.filter((item) => item.category === "dessert");
  const pizzas = menuData.filter((item) => item.category === "pizza");
  // console.log(salad);
  return (
    <div className="mb-10">
      <Cover
        coverImg={orderImg}
        titleText="Our shop"
        secondaryText="Would you like to try a dish?"
      />
      <div className="mt-14 ">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='w-1/2 mx-auto mb-10'>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Desserts</Tab>
            <Tab>Pizza</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {salad?.map((item) => (
                <MenuCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {soup?.map((item) => (
                <MenuCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {desserts?.map((item) => (
                <MenuCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {pizzas?.map((item) => (
                <MenuCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
      
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
