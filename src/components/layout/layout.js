import React from 'react'

// Components:
import Header from "./header/header"
import Footer from "./footer/footer"
// Style:
import "./reset.scss"; // reset all
import layoutStyles from "./layout.module.scss";

const layout = (props) => {
    return ( 
        <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
                {props.children}
            </div>
        <Footer />
        </div>
     );
}
 
export default layout;