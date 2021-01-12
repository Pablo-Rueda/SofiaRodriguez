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
                    La mejor forma de asistir a terapia es en consulta. La consulta conforma un espacio seguro donde poder 
                    hablar de los problemas de forma aislada.
                </p>
                <p style={{fontSize:"18px"}}> Precio: 60 €</p>
            </Card>
            <Card color="#FB68A2" imgId={"card2"}> 
                <h3> Terapia en domicilio</h3>
                <p>
                    En casos excepcionales, como la ansiedad al exterior, la terapia desde el propio domicilio puede ser 
                    un apoyo incial para avanzar. 
                </p>
                <p style={{fontSize:"18px"}}> Precio: 75 €</p>
            </Card>
            <Card color="#FB68A2" imgId={"card3"}> 
                <h3> Terapia online</h3>
                <p>
                    Cuando la distancia o el contexto no permiten la terapia física, la terapia online puede ofrecer una solución para 
                    comenzar.
                </p>
                <p style={{fontSize:"18px"}}> Precio: 40 €</p>
            </Card>
            </div>
        </div>
     );
}
 
export default Prices;