import styled from '@emotion/styled'

export const Hero = styled.main`
  width: 100%;
  text-align: center;
  height: 90vh;
  padding: 2.5%;
`

export const Break = styled.br`
  @media all and (max-width: 62rem) {
    display: none;
  }
`

export const Container = styled.div`
  padding-top: 17vh;
  @media all and (max-width: 62rem) {
    paddding-top: 0.5vh;
  }
`

export const Heading = styled.h1`
  font-size: 5rem;
  white-space: pre-wrap !important;
  @media all and (max-width: 62rem) {
    font-size: 3rem;
  }

  @media all and (max-width: 23.5rem) {
    font-size: 2.55rem;
  }
`
