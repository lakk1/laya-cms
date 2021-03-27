import Slider from "react-slick";
import { Box, Image, Tag } from "@chakra-ui/react";

export default function ImageSlider({ media }) {
  var settings = {
    customPaging: (x) => {
      return (
        <Box>
          <Image
            className="thumbnail"
            // display={{ base: "none", md: "flex" }}
            width="160px"
            height="auto"
            objectFit="cover"
            src={media[x]["imageURL"]}
          />
          <Box
            className="list-dot"
            size={10}
            bg="#ccc"
            rounded
            // display={{ base: "inline-block", md: "none" }}
          ></Box>
        </Box>
      );
    },
    dots: true,
    infinite: true,
    speed: 1000,
    dotsClass: "laya-slick-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    mobileFirst: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <Slider {...settings}>
      {media.map((item, idx) => {
        return (
          <Box key={`slide-${idx}`}>
            <Image
              width={{ base: "100%", md: "540px" }}
              height="auto"
              maxW="100vw"
              maxH="100%"
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
