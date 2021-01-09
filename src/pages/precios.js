import React from "react";
import Layout from "../components/layout/layout";

import Main from "../section/services/main/Main";
import Prices from "../section/services/prices/Prices";
import Discount from "../section/services/discount/discount"; 

export default function Home() {
  return (
    <Layout>
      <Main />
      <Prices />
      <Discount />
    </Layout>
  )
}
