import React from 'react'
import footerStyles from "./footer.module.scss";

const footer = () => {
    return ( 
        <div className={footerStyles.container}>
            <p className={footerStyles.text}>© 2021 Sofía Rodríguez - by <a className={footerStyles.link} href="https://pablorueda.com/">Pablo Rueda</a>
            </p>
        </div>
     );
}
 
export default footer;