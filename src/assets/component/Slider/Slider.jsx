import "./Slider.css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
function Slider({ slider, one }) {
  return (
    <div className="slider">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
         autoplay = {{
            delay: 2500,
            disableOnInteraction: false,
          }}
        {...(one && {
          breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

            1200: {
              slidesPerView: 5,
              spaceBetween: 7,
            },
          },
        })}
      >
        {Array &&
          slider.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.img} alt={item.alt} loading={item.lazy} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Slider;
