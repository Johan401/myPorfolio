'use client';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../css/certifications.css"
import { PiCertificate } from "react-icons/pi";
import AWSUdemy from "../public/certificates/AWSUdemy.jpg"
import AWSComingSoon from "../public/certificates/AWSComingSoon.png"
import ReactUdemy from "../public/certificates/ReactUdemy.jpg"
import SoftSkills from "../public/certificates/SoftSkills.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Certifications = () => {

  return (
    <div id='certifications' className='certificationContainer'>
        <h1>Certifications <PiCertificate /></h1>
        <Swiper
            className='swiperContainer'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
        <SwiperSlide>
            <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={AWSUdemy}></Image>
        </SwiperSlide>
        <SwiperSlide>
            <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={ReactUdemy}></Image>
        </SwiperSlide>
        <SwiperSlide>
            <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={SoftSkills}></Image>
        </SwiperSlide>
        <SwiperSlide>
            <div
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
                <h3 style={{ fontWeight: "bold", zIndex: 2, color: '#000', textAlign: 'center' }}>Coming Soon</h3>
            </div>
            <Image style={{ filter: 'blur(3px)', width: "100%",  objectFit: "contain", }} src={AWSComingSoon}></Image>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Certifications