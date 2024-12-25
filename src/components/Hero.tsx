import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    title: "Transform Your Body",
    subtitle: "Transform Your Life",
    text: "Join Elite Fitness and experience state-of-the-art facilities."
  },
  {
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",
    title: "Expert Training",
    subtitle: "Personal Attention",
    text: "Get personalized workout plans from certified trainers."
  },
  {
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
    title: "Premium Equipment",
    subtitle: "Modern Facilities",
    text: "Access to top-of-the-line fitness equipment and amenities."
  }
];

export function Hero() {
  return (
    <div id="home" className="relative h-screen ">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt={slide.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center h-full">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                    {slide.title}<br />
                    <span className="text-red-600">{slide.subtitle}</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl animate-slide-up">
                    {slide.text}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center transform hover:scale-105 transition-all">
                      Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-medium transform hover:scale-105 transition-all">
                      View Classes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev !text-white !w-12 !h-12 !bg-black/50 rounded-full hidden md:flex">
          <ChevronLeft className="h-8 w-8" />
        </div>
        <div className="swiper-button-next !text-white !w-12 !h-12 !bg-black/50 rounded-full hidden md:flex">
          <ChevronRight className="h-8 w-8" />
        </div>
      </Swiper>
    </div>
  );
}