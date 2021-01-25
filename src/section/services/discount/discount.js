import React from 'react'
import discountStyle from "./discount.module.scss"


import DiscountCard from "./discountCard"

import {Link} from "gatsby";
import Button from "../../../components/button/button"

const Discounts = () => {
    return ( 
        <div className={discountStyle.section}>
            
            <div className={discountStyle.content}>
                <h3 style={{color:"#FB68A2",}}> DESCUENTOS</h3>
                <h1 style={{color:"#904D9F",}}> ¿Qué descuentos hay?</h1>
                <p> Si estás interesado, tenemos descuentos a partir de cuatro sesiones de terapia al mes. Esto se aplica tanto para la terapia 
                en consulta como para la terapia online. Los descuentos que puedes encontrar a continuación son del 10% Y 20% (para cuatro  y 
                doce sesiones respectivamente). Para más información, si lo deseas puedes contactarme a través de la página web.</p>
                <div className={discountStyle.cardsFlex}>
                    <div>
                        <DiscountCard>
                            <h1>Online</h1>
                            <p> 4 Sesiones: <span style={{textDecoration:"line-through"}}>160€</span>  144€</p> 
                            <p> 12 Sesiones: <span style={{textDecoration:"line-through"}}>480€</span>  384€</p> 
                        </DiscountCard>
                    </div>
                    <div>
                        <DiscountCard>
                            <h1>Consulta</h1>
                            <p> 4 Sesiones: <span style={{textDecoration:"line-through"}}>240€</span>  216€</p>
                            <p> 12 Sesiones: <span style={{textDecoration:"line-through"}}>720€</span>  576€</p>
                        </DiscountCard>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",margin:20}}> <Link to="/contacto"><Button btnColor="#FB68A2" hoverText="white"> Contacto </Button></Link></div>
            </div>

            <div className={discountStyle.image}>
                <div className={discountStyle.imgContent}> </div>
            </div>
            
        </div>
     );
}
 
export default Discounts;