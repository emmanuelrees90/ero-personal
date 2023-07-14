import { Box, Container, Heading, chakra, Link, Button } from '@chakra-ui/react'
import Image from 'next/image'
import Section from '../components/section'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'
import HeartIcon from '../components/icons/hearticon'
import styled from '@emotion/styled'
const IconBox = styled.style`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  border-bottom: 2px solid black;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="5px"
        bg="red"
        p={3}
        align="center"
        mb={6}
        color="white"
      >
        Hello, I am a full-stack developer based in Canada!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading variant="page-title">Emmanuel R. Oppong</Heading>
          <p>Full Stack Developer (Angular / React / Vue / Node.js )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/emmanuel.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading variant="section-title">Work</Heading>
        <Paragraph>
          Emmanuel is a proficient full-stack software consultant who focuses
          particularly on front-end technologies. He brings to the table a
          passion for designing and developing intriguing digital solutions.
          With a distinct flair for product development, Emmanuel skilfully
          navigates all stages of a product&#39;s life cycle, from the nascent
          stages of planning and design to coding innovative solutions for
          practical challenges. Outside of the digital realm, Emmanuel enjoys
          engaging in friendly soccer matches, a hobby he cherishes greatly.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading variant="section-title">Bio</Heading>
        <BioSection>
          <BioYear>1990</BioYear>
          Born in Toronto, Canada.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Successfully earned his Bachelor of Engineering degree, with a
          specialization in Electrical Engineering, from Toronto Metropolitan
          University, formerly known as Ryerson University.
        </BioSection>
        <BioSection>
          <BioYear>2016 to present</BioYear>
          Working as a Software Consultant
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <IconBox>
          <Heading>I</Heading>
          <HeartIcon fill="red" />
        </IconBox>

        <Paragraph>Art, Music, Playing Soccer, Coding</Paragraph>
      </Section>
      <Section delay={0.3}>
        <Link href="https://github.com/asvpxkuti" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoGithub />}
          >
            @asvpxkuti
          </Button>
        </Link>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:eroppong@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Say Hello
          </Button>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
