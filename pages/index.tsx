import { Button } from "@chakra-ui/react"
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FadeInDown } from '../animations'
import {
  Hero,
  Container,
  Heading,
  Break
} from "./index.module";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        {/* TODO: Meta Tags */}
      </Head>
      <Hero>
        <FadeInDown>
          <Container>
            <Heading className="bold">
              Welcome To <Break /> Instagram Homepage
            </Heading>
          </Container>
        </FadeInDown>
      </Hero>
    </div>
  )
}

export default Home
