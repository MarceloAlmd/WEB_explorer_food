import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 6.5rem;

  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 0 1rem;
`;

export const Logo = styled.img`
  width: 12.313rem;
  height: 1.875rem;
`;

export const SignOut = styled.button`
  background: none;
  border: none;

  width: 2rem;
  height: 2rem;
`;
