import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Привет со второй страницы</h1>
    <p>Добро пожаловать на страницу 2</p>
    <Link to="/">Вернуться к домашней странице</Link>
  </Layout>
)

export default SecondPage
