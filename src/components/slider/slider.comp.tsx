import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SliderProps } from "./slider";

import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
