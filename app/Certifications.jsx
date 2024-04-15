'use client';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../css/certifications.css"
import { PiCertificate } from "react-icons/pi";
import AWSUdemy from "../public/certificates/AWSUdemy.jpg"
import AWSCertification from "../public/certificates/AWSCertification.png"
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
                <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={AWSCertification}></Image>
            </SwiperSlide>
            <SwiperSlide>
                <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={AWSUdemy}></Image>
            </SwiperSlide>
            <SwiperSlide>
                <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={ReactUdemy}></Image>
            </SwiperSlide>
            <SwiperSlide>
                <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={SoftSkills}></Image>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Certifications