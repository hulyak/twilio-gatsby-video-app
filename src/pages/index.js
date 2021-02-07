import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/loginForm"

const IndexPage = () => {
  const [token, setToken] = useState(false)
  return (
    <Layout>
      <SEO title="Home" />
      {!token ? <LoginForm storeToken={setToken} /> : <p>Has Token</p>}
    </Layout>
  )
}
export default IndexPage
