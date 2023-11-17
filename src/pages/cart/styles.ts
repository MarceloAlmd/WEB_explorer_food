import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 6.5rem auto 4.813rem;

  grid-template-areas: "header" "content" "footer";
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

export const MyRequests = styled.aside`
  width: 100%;
  max-width: 27.75rem;
  height: 100%;

  display: flex;
  flex-direction: column;
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

export const FooterMyRequest = styled.h2`
  margin-top: 2rem;

  font-size: 1.25rem;
  font-weight: 500;
`;

export const Payment = styled.aside`
  width: 100%;
  max-width: 33.125rem;
  height: 100%;
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

export const QrCode = styled.div`
  width: 100%;

  height: 22.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
