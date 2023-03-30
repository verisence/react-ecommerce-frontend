import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  align-items: center;
  font-size: 1rem;
  a {
    font-size: 1.2rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 1rem;
      font-weight: 500;
      padding: 0.25rem;
    }
    svg {
      font-size: 1.35rem;
    }
  }
`;
