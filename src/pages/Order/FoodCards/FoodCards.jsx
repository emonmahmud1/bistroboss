// import React from "react";
// import MenuCard from "../../Shared/MenuCard/MenuCard";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// // import required modules
// import { Pagination } from "swiper/modules";

// const FoodCards = ({ items }) => {
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };
//   return (

//     <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
//       <SwiperSlide>
//         <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
//           {items?.map((item) => (
//             <MenuCard key={item._id} item={item} />
//           ))}
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default FoodCards;
import React from "react";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const FoodCards = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      slidesPerView={1}         // Show 1 grid (set of items) per view
      slidesPerGroup={1}        // Move 1 grid (set of items) per group
      pagination={pagination}   // Use the custom pagination
      modules={[Pagination]}    // Include the Pagination module
      
    >
      {/* Create SwiperSlide components with grids inside them */}
      {items && items.length > 0 &&
        Array.from({ length: Math.ceil(items.length / 6) }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 border">
              {items
                .slice(index * 6, index * 6 + 6)   // Get 6 items for each slide
                .map((item) => (
                  <MenuCard key={item._id} item={item} />
                ))}
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default FoodCards;
