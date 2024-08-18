import Title from "./../../Shared/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="mb-10">
      <Title title="TESTIMONIALS" />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide className="text-center" key={review._id}>
              <div className=" flex justify-center mb-5">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              </div>
              <div>
                <p className=" w-11/12 mx-auto">{review.details}</p>
                <h2 className="text-[#CD9003] text-2xl md:text-3xl">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
