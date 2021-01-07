import React from 'react';
import mainStyle from "./main.module.scss"


const Main = () => {
    return ( 
        <div className={mainStyle.container}><div className={mainStyle.content}>
            <h1>Servicios</h1>
        </div></div>
     );
}
 
export default Main;