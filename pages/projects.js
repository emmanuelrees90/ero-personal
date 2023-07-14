import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/portfolioThumbnail.jpg'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading fontSize={20} mb={4}>
        Some Things I&#39;ve Built
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Restaurant Landing Page"
            thumbnail={thumbPortfolio}
            gitHubUrl="https://github.com/asvpxkuti/ero-restaurant"
            href="https://www.ero-restaurant.com/"
          />
          <GridItem
            title="Chat GPT-3 Landing Page"
            thumbnail={thumbPortfolio}
            gitHubUrl="https://github.com/asvpxkuti/ero-restaurant"
            href="#"
          />
          <GridItem
            title="Junk Go Demo App"
            thumbnail={thumbPortfolio}
            gitHubUrl="https://github.com/asvpxkuti/junkgo"
            href="#"
          />
          <GridItem
            title="Social App Demo"
            thumbnail={thumbPortfolio}
            gitHubUrl="https://github.com/asvpxkuti/socialapp"
            href="#"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
