import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ops</h1>
    <p>Erro: 404 | Pagina não encontrada</p>
  </Layout>
)

export default NotFoundPage
