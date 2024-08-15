import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SlideComponent from "./SlideComponent";
import Title from "./../../Shared/Title/Title";

const Category = () => {
  return (
    <>
      <Title title='order online'/>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mb-10 mt-10"
      >
        <SwiperSlide>
          <SlideComponent slide={slide1} titleText="salad" />
        </SwiperSlide>

        <SwiperSlide>
          <SlideComponent slide={slide2} titleText="pizza" />
        </SwiperSlide>

        <SwiperSlide>
          <SlideComponent slide={slide3} titleText="soups" />
        </SwiperSlide>

        <SwiperSlide>
          <SlideComponent slide={slide4} titleText="desserts" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent slide={slide5} titleText="salad" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
