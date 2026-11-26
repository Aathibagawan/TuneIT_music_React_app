import React from 'react'
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import img1 from '../Assests/Ad1.png';
import img2 from '../Assests/Ad7.png';
import img3 from '../Assests/Ad10.png';
import img4 from '../Assests/Ad8.png';


const HomeHero = () => {
    return (
        <section className="w-full border-b h-[270px] overflow-hidden">
            <Swiper navigation={true} modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }}
                centeredSlides={true} loop={true} slidesPerView={1} className='w-full h-full'>

                <SwiperSlide>
                    <img src={img1} alt='' className='w-full h-full object-cover'>
                    </img>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img2} alt='' className='w-full h-full object-cover'></img>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img3} alt='' className='w-full h-full object-cover'></img>
                </SwiperSlide>

                  <SwiperSlide>
                    <img src={img4} alt='' className='w-full h-full object-cover'></img>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}

export default HomeHero
