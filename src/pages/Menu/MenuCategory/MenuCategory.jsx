import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Cover from "../../Shared/Cover/Cover";
import MenueItem from "../../Shared/MenueItem/MenueItem";

const MenuCategory = ({ title, items, img, titleSecondText }) => {
  return (
    <div className="mt-14 mb-14">
      {title && (
        <Cover
          coverImg={img}
          titleText={title}
          secondaryText={titleSecondText}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {items?.map((item) => (
          <MenueItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center ">
        <Link to={`/order/${title}`}>
          <Button btnTitle="order your fevorite food" />
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
