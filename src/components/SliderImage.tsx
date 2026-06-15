"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    style: { width: "500px", margin: "0 auto" },
  };
  return (
    <Slider {...settings}>
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt="Image 1"
          width={500}
          height={300}
        />
      </div>
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt="Image 2"
          width={500}
          height={300}
        />
      </div>
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt="Image 3"
          width={500}
          height={300}
        />
      </div>
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt="Image 4"
          width={500}
          height={300}
        />
      </div>
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt="Image 5"
          width={500}
          height={300}
        />
      </div>
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt="Image 6"
          width={500}
          height={300}
        />
      </div>
    </Slider>
  );
}
