import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.dishes};

  max-width: 18.75rem;
  width: 100%;

  border: 1px solid #000;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  > header {
    display: flex;

    align-self: flex-end;
  }

  cursor: pointer;
`;

export const DishImg = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  margin: 1rem auto;
`;

export const Favorite = styled.button`
  background: none;
  border: none;

  display: flex;

  align-self: flex-end;

  margin-right: 0.5rem;
  margin-top: 0.5rem;

  > svg {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 1rem;

  > h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  > span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;
  }

  > h3 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.price};
  }
`;

export const Counter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem 0;

  z-index: 1000;

  gap: 1rem;
  > button:nth-child(1),
  button:nth-child(2) {
    background: none;
    border: none;

    svg {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.5rem;
    }
  }
`;

export const ShowDetailsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const EditDish = styled.button`
  background: none;
  border: none;

  display: flex;
  align-self: flex-end;

  margin-right: 0.5rem;
  margin-top: 0.5rem;

  > svg {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
  }
`;
