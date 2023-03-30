import styled from "styled-components";

export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`;

export const CartStyle = styled.div`
  width: 40%;
  background: #f1f1f1;
  padding: 2rem 2rem;
  overflow-y: scroll;
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 1rem 0;
  img {
    height: 7rem;
    border-radius: 0.3rem;
  }
`;

export const CardInfo = styled.div`
  width: 55%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button {
    background: none;
    border: none;
  }
  svg {
    font-size: 1.5rem;
  }
`;

export const EmptyCart = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  p {
    font-size: 1.15rem;
    padding: 2rem;
  }

  svg {
    font-size: 5rem;
    color: var(--sec);
  }
`;
