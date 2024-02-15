import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { TypeRootState } from "../../store/store";
import { TProduct } from "../../store/productSlice";
import { StyleDiv, StyleImg } from "./SliderStyle";

const SimpleSlider = () => {
  const [arrImages, setArrImages] = useState<string[]>([]);
  const data: TProduct[] = useSelector((state: TypeRootState) => state.products.data);

  useEffect(() => {
    const images = data.flatMap(item => item.images.map(itemImg => itemImg));
    setArrImages(images);
  }, [data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <Slider {...settings}>
          <StyleDiv>
            <StyleImg src={arrImages[45]} alt="image product"/>
          </StyleDiv>
          <StyleDiv>
            <StyleImg src={arrImages[32]} alt="image product"/>
          </StyleDiv>
          <StyleDiv>
            <StyleImg src={arrImages[50]} alt="image product"/>
          </StyleDiv>
          <StyleDiv>
            <StyleImg src={arrImages[90]} alt="image product"/>
          </StyleDiv>
          <StyleDiv>
            <StyleImg src={arrImages[120]} alt="image product"/>
          </StyleDiv>
          <StyleDiv>
            <StyleImg src={arrImages[172]} alt="image product"/>
          </StyleDiv>
    </Slider>
  );
}

export default SimpleSlider;