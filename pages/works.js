import {
  Box,
  Center,
  Container,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Link,
  keyframes,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useState } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
const hoverStyle = {
  background: 'blackAlpha.300',
  boxShadow: 'dark-lg',
  transition: 'all 0.3s ease'
}

const animation = keyframes`
  from {
    transform:translateX(0px);
  }
  to {
    transform:translateX(4px);
  }
`

const JobExperienceBox = ({ title, description, skills }) => {
  const [isHovered, setIsHovered] = useState(false)
  const pillBgColor = useColorModeValue('teal.400', 'rgba(45,212,191,.1)')
  const pillTextColor = useColorModeValue('rgb(255, 255, 255)', 'grassTeal')
  return (
    <Box
      p="5"
      borderRadius="5px"
      _hover={hoverStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Heading size="md" color={isHovered ? 'teal.400' : 'initial'}>
        {title}
      </Heading>
      <Text pb={1}>{description}</Text>
      <Wrap spacing="5px" pt={1}>
        {skills.map(skill => (
          <WrapItem key={skill}>
            <Center
              px={4}
              borderRadius="30px"
              h="28px"
              bg={pillBgColor}
              color={pillTextColor}
            >
              {skill}
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}

const Works = () => {
  const [isHovered, setIsHovered] = useState(false)
  const arrowAnimation = `${animation} infinite 0.5s`
  return (
    <Layout title="Projects">
      <Container>
        <Heading fontSize={20} mb={4}>
          Where I&apos;ve Worked at
        </Heading>

        <JobExperienceBox
          title="Senior Software Engineer - VeryOn"
          description="Partnered with product development teams to strategize and implement enhancements, solutions, and innovative features, all aimed at elevating safety standards and reliability within the aviation industry. Undertook comprehensive responsibility and ownership for the entire cycle of UI mockups and API integration, spanning from initial development and rigorous testing, through to production deployment, followed by ongoing improvements and troubleshooting."
          skills={['Angular', 'HTML', 'SCSS', 'TypeScript', 'RxJs', 'NgRx']}
        />

        <JobExperienceBox
          title="Senior Software Engineer - RBC Bank"
          description="Designed and implemented reusable and custom UI components leveraging the power of PrimeNG and RBC's component library, strategically enhancing code quality and streamlining the development process for increased efficiency.."
          skills={['Angular', 'HTML', 'SCSS', 'TypeScript', 'RxJs', 'NGXS']}
        />

        <JobExperienceBox
          title="Senior Software Engineer - CIBC Bank"
          description="Collaborated with the UI team to meticulously engineer and enhance significant features of CIBC's customer-centric application, thereby elevating the user experience"
          skills={['Vue.js', 'Vuex', 'SCSS', 'Javascript']}
        />
        <JobExperienceBox
          title="Full-Stack Software Engineer - TD Bank"
          description="Collaborated with fellow engineers to design a streamlined online
            credit card application system, with an aim to expedite and simplify
            the application processing experience."
          skills={['Angular', 'TypeScript', 'SCSS', 'Java', 'Spring MVC']}
        />

        <Box ml={4} my={10}>
          <Link
            href="/resume.pdf"
            fontWeight={600}
            textDecorationColor="grassTeal"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            isExternal
          >
            View Full Résumé
            <ArrowForwardIcon
              animation={isHovered ? arrowAnimation : 'none'}
              mx="2px"
            />
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}
export default Works
export { getServerSideProps } from '../components/chakra'
