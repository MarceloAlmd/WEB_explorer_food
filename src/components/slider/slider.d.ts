import { ReactNode } from "react";
import { SwiperProps } from "swiper/react";

export interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}
