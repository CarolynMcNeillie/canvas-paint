import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <div className="window">
      <Header headerText="Paintbrush - (Untitled)" />
      <canvas id="canvas">Oh, you know</canvas>
    </div>
  </Layout>
)
