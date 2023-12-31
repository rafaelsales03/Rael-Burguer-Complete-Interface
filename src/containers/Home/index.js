import React from 'react'

import Homelogo from '../../assets/home-image.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImg src={Homelogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
