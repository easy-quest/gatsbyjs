import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Привет люди</h1>
    <p>Добро пожаловать на ваш новый сайт GATSBY.</p>
    <p>Теперь построить что-то великое.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Перейти к странице 2</Link> <br />
      <Link to="/using-typescript/">Перейти к "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
