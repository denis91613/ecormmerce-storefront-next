import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";

SwiperCore.use([Navigation]);

const CategorySlider = () => {
  var data = [
    {
      id: 1,
      title: "T-Shirt",
      img: "category-thumb-1.jpg",
      items: 1,
    },
    {
      id: 2,
      title: "Bags",
      img: "category-thumb-2.jpg",
      items: 2,
    },
    {
      id: 3,
      title: "Sandan",
      img: "category-thumb-3.jpg",
      items: 3,
    },
    {
      id: 4,
      title: "Scarf Cap",
      img: "category-thumb-4.jpg",
      items: 4,
    },
    {
      id: 5,
      title: "Shoes",
      img: "category-thumb-5.jpg",
      items: 5,
    },
    {
      id: 6,
      title: "Pillowcase",
      img: "category-thumb-6.jpg",
      items: 6,
    },
    {
      id: 7,
      title: "Jumpsuits",
      img: "category-thumb-7.jpg",
      items: 7,
    },
    {
      id: 8,
      title: "Hats",
      img: "category-thumb-8.jpg",
      items: 8,
    },
    {
      id: 9,
      title: "Shoes9",
      img: "category-thumb-5.jpg",
      items: 9,
    },
    {
      id: 10,
      title: "Pillowcase10",
      img: "category-thumb-6.jpg",
      items: 10,
    },
    {
      id: 11,
      title: "Jumpsuits11",
      img: "category-thumb-7.jpg",
      items: 11,
    },
    {
      id: 12,
      title: "Hats12",
      img: "category-thumb-8.jpg",
      items: 12,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        // }}
        //loop={false}
        navigation={{
          prevEl: ".custom_prev_ct1",
          nextEl: ".custom_next_ct1",
        }}
        className="custom-class"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="card-1">
              <figure className=" img-hover-scale overflow-hidden">
                <Link href="/products/shop-grid-right">
                  <a>
                    <img src={`assets/imgs/shop/${item.img}`} alt="" />
                  </a>
                </Link>
              </figure>
              <h5>
                <Link href="/products/shop-grid-right">
                  <a>{item.title}</a>
                </Link>
              </h5>
              <a>{item.items}</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
        id="carausel-6-columns-arrows"
      >
        <span className="slider-btn slider-prev slick-arrow custom_prev_ct1">
          <i className="fi-rs-angle-left"></i>
        </span>
        <span className="slider-btn slider-next slick-arrow custom_next_ct1">
          <i className="fi-rs-angle-right"></i>
        </span>
      </div>
    </>
  );
};

export default CategorySlider;
