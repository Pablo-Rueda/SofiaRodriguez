import React from 'react'
import footerStyles from "./footer.module.scss";

const footer = () => {
    return ( 
        <div className={footerStyles.container}>
            <p className={footerStyles.text}>© 2021 Sofía Rodríguez - by Pablo Rueda</p>
        </div>
     );
}
 
export default footer;