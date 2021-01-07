import React from "react";
import Layout from "../components/layout/layout"

import Main from "../section/services/main/Main"
import Prices from "../section/services/prices/Prices"

export default function Home() {
  return (
    <Layout>
      <Main />
      <Prices />
      <div>Servicios</div>
    </Layout>
  )
}
