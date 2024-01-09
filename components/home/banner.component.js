
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../../assets/styles/banner.module.scss'

import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import Image from 'next/image'

const Banner = () => {
    const { t, i18n } = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return <div className={styles.banner}>
        <div className={styles.container_slide}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                navigation={true}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                {/* ... */}
            </Swiper>
        </div>
    </div>
}

export default Banner;