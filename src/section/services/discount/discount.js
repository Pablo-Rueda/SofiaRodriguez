import React from 'react'
import discountStyle from "./discount.module.scss"


import DiscountCard from "./discountCard"

import {Link} from "gatsby";
import Button from "../../../components/button/button"

const Discounts = () => {
    return ( 
        <div className={discountStyle.section}>
            
            <div className={discountStyle.content}>
                <h1 style={{color:"#904D9F",}}> Descuento</h1>
                <p> Si sabes que podrías requerir múltiples sesiones de terapia, ofrecemos descuentos a partir de cuatro sesiones
                en un mes. Esto se aplica tanto para la terapia presencial (en consulta), como para la terapia online:
                </p>
                <div className={discountStyle.cardsFlex}>
                    <div>
                        <DiscountCard>
                            <h1>Online</h1>
                            <p> 4 Sesiones: 140 €</p>
                            <p> 24 Sesiones: 800 €</p>
                        </DiscountCard>
                    </div>
                    <div>
                        <DiscountCard>
                            <h1>Consulta</h1>
                            <p> 4 Sesiones: 200 €</p>
                            <p> 24 Sesiones: 1100 €</p> 
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