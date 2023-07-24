import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <div className='lg:h-[800px] h-[200px]' >
            {/* <div className="form-control w-full max-w-xs z-20 absolute ">

                <input type="text" placeholder="search college" name='name' className="input bg-transparent input-bordered w-full max-w-xs" />

            </div> */}

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className=' brightness-[0.3] w-full h-[600px]' src="https://wallpapercave.com/dwp1x/wp2468650.jpg" alt="" />   <div className=' absolute text-white z-10 top-10 left-[5%] right-[5%] text-center'>
                    <p className=' text-white text-7xl text-center font-serif lg:mt-32'>Tech Institute of Innovation</p>
                    <p className='text-white text-3xl py-3  sm:text-center'>The beautiful thing about learning is that no one can take it away from you</p>


                </div>
                </SwiperSlide>
                <SwiperSlide><img className=' brightness-[0.3] w-full h-[600px]' src="https://wallpapercave.com/dwp1x/wp2468653.jpg" alt="" />   <div className=' absolute text-white z-10 top-10 left-[5%] right-[5%] text-center'>
                    <p className=' text-white text-7xl text-center font-serif lg:mt-32'>University of Knowledgeville</p>
                    <p className='text-white text-3xl py-3  sm:text-center'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>


                </div>
                </SwiperSlide>
                <SwiperSlide><img className=' brightness-[0.3] w-full h-[600px]' src="https://wallpapercave.com/dwp1x/wp2468647.jpg" alt="" />   <div className=' absolute text-white z-10 top-10 left-[5%] right-[5%] text-center'>
                    <p className=' text-white text-7xl text-center font-serif lg:mt-32'>Environmental Studies Institute</p>
                    <p className='text-white text-3xl py-3  sm:text-center'>he function of education is to teach one to think intensively and to think critically. </p>


                </div>
                </SwiperSlide>
                <SwiperSlide><img className=' brightness-[0.3] w-full h-[600px]' src="https://wallpapercave.com/dwp1x/wp2468660.jpg" alt="" />   <div className=' absolute text-white z-10 top-10 left-[5%] right-[5%] text-center'>
                    <p className=' text-white text-7xl text-center font-serif lg:mt-32'>Arts & Culture University</p>
                    <p className='text-white text-3xl py-3 sm:text-center'>The great aim of education is not knowledge but action</p>


                </div>
                </SwiperSlide>
            </Swiper>



        </div>
    );
};

export default Header;