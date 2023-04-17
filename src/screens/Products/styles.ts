import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 3rem;
`;

export const ProductsContainer = styled.div`
  background: #00ff006b;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0000006b;
  margin-bottom: 1rem;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background: #222315;
  }

  img {
    max-width: 6rem;
    max-height: 6rem;
  }
`;
