import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import bannerData from "data/bannerData";
import styled from "styled-components";

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
            <SwiperBox image={element.img.src}></SwiperBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

const SwiperBox = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  @media screen and (max-width: 700px) {
    height: 78vh;
  }
`;
