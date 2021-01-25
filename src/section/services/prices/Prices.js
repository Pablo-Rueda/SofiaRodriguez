import React from 'react'


import pricesStyle from "./prices.module.scss"
import Card from "./../../../components/card/card"


const Prices = () => {
    return ( 
        <div className={pricesStyle.content}>
            <div className={pricesStyle.grid}>
            <Card color="#FB68A2" imgId={"card1"}> 
                <h3> Terapia en consulta</h3>
                <div className={pricesStyle.cardContanier}>
                    <div className={pricesStyle.cardContent}>
                        <p> La terapia presencial permite co-crear un espacio y un ambiente seguro para el paciente donde él y el 
                        terapeuta trabajarán para abordar las dificultades de la mejor forma posible.</p>
                    </div>
                    <p style={{fontSize:"18px"}}> Precio: 60 €</p>
                </div>
            </Card>
            <Card color="#FB68A2" imgId={"card3"}> 
                <h3> Terapia online</h3>
                <div className={pricesStyle.cardContanier}>
                    <div className={pricesStyle.cardContent}>
                        <p>Muchas veces, la distancia o el contexto no permiten la terapia presencial. La terapia online puede ser una excelente 
                        alternativa para aquellos que deseen adaptar su terapia a este formato. </p>
                    </div>
                    <p style={{fontSize:"18px"}}> Precio: 40 €</p>
                </div>
            </Card>
            <Card color="#FB68A2" imgId={"card2"}> 
                <h3> Colaboración</h3>
                <p>Si gestionas una clínica, fundación, etc. y estás interesado en que colabore en ella como psicóloga, puedes contactarme 
                para que podamos trabajar juntos. </p>
            </Card>
            </div>
        </div>
     );
}
 
export default Prices;