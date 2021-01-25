import React from "react";
import Layout from "./../components/layout/layout"

import Main from "../section/index/main/Main"
import Therapy from "../section/index/therapy/Therapy"
import Hero from "../section/index/hero/hero"

export default function Home() {
  return (
    <Layout>
      <Main />
      <Therapy />
      <Hero />
    </Layout>
  )
}
