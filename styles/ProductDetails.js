import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  img {
    border-radius: 5px;
    width: 40%;
  }
  @media screen and (max-width: 720px) {
    margin-top: 0.5rem;
    flex-direction: column-reverse;
    img {
      margin: 2rem 0;
      width: 100%;
    }
  }
`;

export const ProdInfo = styled.div`
  width: 40%;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--sec);
  }
  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--prim);
  color: white;
  font-weight: 500;
`;
