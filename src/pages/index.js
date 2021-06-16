import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
      src="../images/cosmos4.jpeg"
      alt="cosmos"/>
    </Layout>

  )
}

export default IndexPage