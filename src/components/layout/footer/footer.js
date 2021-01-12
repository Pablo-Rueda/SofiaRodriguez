import React from 'react'
import footerStyles from "./footer.module.scss";

const footer = () => {
    return ( 
        <div className={footerStyles.container}>
            <p className={footerStyles.text}>© 2021 Jhon Doe - by <a style={{color:"white"}} href="https://pablorueda.com/">Pablo Rueda</a>
            </p>
        </div>
     );
}
 
export default footer;