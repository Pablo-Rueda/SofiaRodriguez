import React from 'react'
import Layout from "../components/layout/layout"
import {Link} from "gatsby"
const NotFound = () => {
    return ( 
        <Layout>
        <div style={{display:"flex", flexDirection:"column",margin:"100px auto",width:"80%", marginTop:"100px"}}>
            <h1 > No se encontró la página que busca.</h1>
            <h3> En su lugar, prueba a ir al  <Link to="/">menú principal.</Link>
            </h3>
        </div>

        </Layout>
     );
}
 
export default NotFound;