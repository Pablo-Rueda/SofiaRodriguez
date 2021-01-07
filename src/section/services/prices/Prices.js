import React from 'react'


import pricesStyle from "./prices.module.scss"
import Card from "./../../../components/card/card"


const Prices = () => {
    return ( 
        <div className={pricesStyle.content}>
            <div className={pricesStyle.grid}>
            <Card color="#FB68A2" imgId={"card1"}> 
                <h3> Terapia en consulta</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce maximus massa arcu, eget euismod dolor sollicitudin aliquam. 
                </p>
                <p style={{fontSize:"18px"}}> Precio: 60 €</p>
            </Card>
            <Card color="#FB68A2" imgId={"card2"}> 
                <h3> Terapia en domicilio.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce maximus massa arcu, eget euismod dolor sollicitudin aliquam. 
                </p>
                <p style={{fontSize:"18px"}}> Precio: 75 €</p>
            </Card>
            <Card color="#FB68A2" imgId={"card3"}> 
                <h3> Terapia online.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce maximus massa arcu, eget euismod dolor sollicitudin aliquam. 
                </p>
                <p style={{fontSize:"18px"}}> Precio: 40 €</p>
            </Card>
            </div>
        </div>
     );
}
 
export default Prices;