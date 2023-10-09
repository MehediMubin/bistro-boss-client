import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading="From 11:00am to 10:00pm"
                heading="order online"
            />
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: { slidesPerView: 3, spaceBetween: 30 },
                    1024: { slidesPerView: 4, spaceBetween: -150 },
                }}
                modules={[Pagination]}
                className="mySwiper mb-20 font-['Cinzel']"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-3xl uppercase tracking-wider font-thin absolute bottom-7 md:bottom-10 left-7 md:left-20">
                        Salads
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-white text-3xl uppercase tracking-wider font-thin absolute bottom-7 md:bottom-10 left-7 md:left-20">
                        Pizza
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-3xl uppercase tracking-wider font-thin absolute bottom-7 md:bottom-10 left-7 md:left-20">
                        Soup
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-3xl uppercase tracking-wider font-thin absolute bottom-7 md:bottom-10 left-7 md:left-20">
                        Dessert
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-3xl uppercase tracking-wider font-thin absolute bottom-7 md:bottom-10 left-7 md:left-20">
                        Salads
                    </h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
