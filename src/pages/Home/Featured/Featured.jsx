import Title from "./../../Shared/Title/Title";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured bg-fixed text-white pt-9">
      <Title title="check it out"></Title>
      <div className="md:flex gap-5 items-center pt-8 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="text-white">
          <p>Aug 16, 2024</p>
          <p className="text-2xl uppercase">where can i get some?</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4" >order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
