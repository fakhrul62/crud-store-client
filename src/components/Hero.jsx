import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, EffectFade } from "swiper/modules";

const Hero = () => {
    return (
        <div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay
              loop={true}
            >
              <SwiperSlide>
                <div className="flex justify-center md:justify-end">
                  <img
                    className=" rounded-lg h-[400px] object-contain"
                    src="https://i.ibb.co.com/QpTR0Ny/pngwing-com-1.png"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex  justify-center md:justify-end">
                  <img
                    className="h-[400px] object-contain rounded-lg "
                    src="https://i.ibb.co.com/tsbTNQW/pngwing-com-2.png"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex  justify-center md:justify-end">
                  <img
                    className="h-[400px] object-contain rounded-lg "
                    src="https://i.ibb.co.com/YW12LjF/pngwing-com.png"
                  />
                </div>
              </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Hero;