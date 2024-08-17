import { Parallax, Background } from "react-parallax";
const Cover = ({ coverImg, titleText, secondaryText }) => {
  return (
    <Parallax
      blur={{ min: -60, max: 60 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
      // bgImageStyle={{opacity:'.9'}}
    >
      <div className="hero md:h-[500px] h-[300px]">
        <div className=""></div>
        <div className="hero-content text-neutral-content text-center bg-slate-700 bg-opacity-60 md:w-1/2 md:h-2/5">
          <div className="">
            <h1 className="mb-5 md:text-5xl text-2xl font-bold">{titleText}</h1>
            <p className="mb-5">{secondaryText}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
