import styled, { keyframes } from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 6.5rem auto 4.813rem;

  grid-template-areas: "header" "content" "footer";

  .emptyCart {
    width: 100%;

    height: 580px;
    max-width: 33.125rem;
  }
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  max-width: 950px;
  width: 100%;
  margin: 1rem auto;
`;

export const MyRequests = styled.aside`
  width: 100%;
  max-width: 27.75rem;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${BREAK_POINTS.ST}) {
    &[data-show-myRequest="false"] {
      display: none;
    }
  }

  animation: ${slideIn} 0.4s ease-in-out forwards;
  opacity: 0;
`;
export const Header = styled.h2`
  margin: 2.125rem 0;
  font-size: 2rem;
  font-weight: 500;
`;

export const ContentMyRequest = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 100%;
  max-height: 30.25rem;
  overflow-y: auto;
`;

export const FooterMyRequest = styled.footer`
  display: flex;

  flex-direction: column;

  gap: 1rem;

  > h2 {
    margin-top: 2rem;

    font-size: 1.25rem;
    font-weight: 500;
  }

  > button {
    @media (min-width: ${BREAK_POINTS.ST}) {
      display: none;
    }
  }
`;

export const Payment = styled.aside`
  width: 100%;
  max-width: 33.125rem;
  height: 100%;

  padding: 1rem;

  @media (max-width: ${BREAK_POINTS.ST}) {
    display: none;

    &[data-show-payment="true"] {
      display: block;
    }
  }
`;

export const HeaderPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h2 {
    margin: 2.125rem 0;
    font-size: 2rem;
    font-weight: 500;
  }

  > a {
    @media (min-width: ${BREAK_POINTS.ST}) {
      display: none;
    }
  }
`;

export const PaymentContent = styled.div`
  height: 100%;
  max-height: 27.813rem;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.ingredient};

  > header {
    height: 5.063rem;
    width: 100%;

    display: flex;
  }
`;

export const PaymentMethod = styled.div`
  width: 100%;
  max-width: 25.125rem;
  margin: 0 auto;
  padding: 1rem;
  height: 22.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > img {
    transform: translate(0);
    transition: all 0.4s;
    animation: ${pulse} 1s;
  }

  .validityAndCVC {
    width: 100%;

    display: flex;
    gap: 1rem;
    margin: 2.313rem 0;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    overflow: hidden;

    > * {
      animation: ${slideIn} 0.4s ease-in-out forwards;
      opacity: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;
