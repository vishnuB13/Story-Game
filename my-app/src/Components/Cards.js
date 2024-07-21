import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
  const images = [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
  ];

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, // Tablets and small desktops
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768, // Tablets and smaller devices
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };

  return (
      <>
        {/* Instead of spans, buttons with hyper links can be used to navigate to different sections */}
          <div className='d-inline w-100 ml-5 space-between'>
              <span className='text-[#c8374a] mr-3'>Choose Your NFT</span>
              <span className='text-[#7ecc42] text-strong mr-3'>&99</span>
              <span className='text-[#c8374a] text-strong'>$199</span>
          </div>

          {/* CAROUSEL COMPONENT created with react slick library */}

          <div className=' mt-10 ml-5 mr-5 bg-[#172f35] ' >
              <Slider {...settings}>
                  {images.map((img, index) => (
                      <div key={index} className='p-5 h-200 group  '>
                          <div className='bg-white w-50 h-200  rounded-md group-hover:border-[#7ecc42]  group-hover:border-2'>
                              <img src={img} alt={`Card ${index + 1}`} className='' />
                          </div>
                      </div>
                  ))}
              </Slider>
          </div>
      </>
  );
};

export default Cards;