import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Tag } from "@chakra-ui/react";

export default function ImageSlider({ media }) {
  console.log({ media });
  var settings = {
    customPaging: (x) => {
      return (
        <Image
          width="100%"
          height="100%"
          objectFit="cover"
          src={media[x]["imageURL"]}
        />
      );
    },
    dots: true,
    infinite: true,
    speed: 0,
    dotsClass: "laya-slick-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {media.map((item, idx) => {
        return (
          <Box>
            <Image
              width="540px"
              height="720px"
              key={item.id}
              src={item.imageURL}
            />
          </Box>
        );
      })}

      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
  );
}
