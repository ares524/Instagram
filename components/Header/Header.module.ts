import styled from '@emotion/styled'

export const Nav = styled.nav`
  padding: 0.5rem;
  font-size: 1.12rem;
`;

export const Links = styled.div`
  text-align: center;
  font-weight: bold;
  margin: auto;
  @media all and (max-width: 62rem) {
    display: none !important;
  }
`;

export const Discord = styled.a`
  text-align: right;
  margin: auto;
  @media all and (max-width: 62rem) {
    display: none !important;
  }
`;

export const Logo = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuC = styled.div`
  display: flex;
  justify-content: right;
  margin-top: auto;
  align-items: center;
  height: 100%;
  width: 100%;
  @media all and (min-width: 62rem) {
    display: none !important;
  }
`;