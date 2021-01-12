import React from 'react';
import mainStyle from "./main.module.scss"

import {Link} from "gatsby";

import Button from "../../../components/button/button"

const Main = () => {
    return ( 
        <div className={mainStyle.container}><div className={mainStyle.content}>
            <h1>Jhon Doe</h1>
            <h2>Psicóloga Humanista</h2>
            <div className={mainStyle.buttons}>
                <Link className={mainStyle.button} to="/precios"><Button btnColor="#BD71CF" hoverText="white"> Precios</Button></Link>
                <Link className={mainStyle.button} to="/contacto"><Button btnColor="#FB68A2" hoverText="white"> Contacto </Button></Link>
            </div>
        </div></div>
     );
}
 
export default Main;