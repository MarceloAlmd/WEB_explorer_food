import styled, { keyframes } from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";
import { SwiperSlide, Swiper } from "swiper/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 6.5rem auto 4.813rem;

  grid-template-areas: "header" "content" "footer";
`;

export const Content = styled.main`
  grid-area: content;

  max-width: 66.5rem;
  width: 100%;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-in-out;
  padding: 0 2rem 5rem;
`;

export const SwiperContainer = styled(Swiper)`
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.secondary};
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.secondary};
  }

  .swiper-pagination,
  .swiper-pagination-clickable,
  .swiper-pagination-bullets,
  .swiper-pagination-horizontal {
    position: relative;
    bottom: 25px;
  }

  @media (max-width: ${BREAK_POINTS.ST}) {
    max-width: 300px;
    .swiper-pagination,
    .swiper-pagination-clickable,
    .swiper-pagination-bullets,
    .swiper-pagination-horizontal {
      position: relative;
      top: -15px;
    }
  }
`;

export const SwiperContent = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
