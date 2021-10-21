import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import bannerData from "data/bannerData";
import styles from "styles/slider.module.scss";

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
      >
        {bannerData.map((element) => (
          <SwiperSlide key={element.id}>
            <div
              className={styles.swiper_box}
              style={{ backgroundImage: `url(${element.img.src})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
