
const SlideComponent = ({slide,titleText}) => {
  return (
    <>
      <img src={slide} alt="" />{" "}
      <h2 className="text-2xl uppercase text-center -mt-10 text-white">{titleText}</h2>
    </>
  );
};

export default SlideComponent;
