import React from 'react'
import therapyStyle from "./therapy.module.scss"
import {Link} from "gatsby";
import Button from "../../../components/button/button"

const Therapy = () => {
    return ( 
        <div className={therapyStyle.section}>
            <div className={therapyStyle.image}>
                <div className={therapyStyle.imgContent}> 
                    <div className={therapyStyle.content}> 
                        <h3 style={{textAlign:"center",paddingTop:15}}> Quizás necesitas ayuda si...</h3>
                        <ul>
                            <li><p>padeces de problemas emocionales como tristeza crónica o ansiedad,</p></li>
                            <li><p>no logras relacionarte y socializar con quienes te rodean,</p></li>
                            <li><p>tienes problemas continuos con tus seres queridos, como pareja o familia.</p></li>
                        </ul>
                        <div style={{display:"flex", justifyContent: "center", paddingBottom:"25px"}}>
                            <Link to="/precios"><Button btnColor="#BD71CF" hoverText="white"> Precios </Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={therapyStyle.content}>
                <h3 style={{color:"#FB68A2",}}> TERAPIA HUMANISTA</h3>
                <h1 style={{color:"#904D9F",}}>¿Qué esperar?</h1>
                <p>Las terapias humanistas centran su mirada en la persona: cada ser humano es único y complejo. Y es por ello que las terapias han de 
                adaptarse de la mejor forma posible al paciente, teniendo en cuenta siempre sus necesidades y su capacidad de elección. </p>
                <p>Concretamente, la Terapia Focalizada en la Emoción (TFE) se centra en la emoción como la respuesta fundamental en el ser 
                humano. Las emociones ayudan a que nos adaptemos al contexto. Pero en ocasiones, pueden sentirse distorsionadas, muy apagadas, 
                o por el contario, nos abruman. Esto nos puede llevar a estados donde nos sintamos confusos, atascados en el dolor, sin saber 
                muy bien qué hacer o cómo actuar. Ese puede ser el mejor momento para acudir a terapia. </p>
                <p>No obstante, otras personas desean empezar una terapia con el fin de conocerse mejor a sí mismos, cultivar su interior y 
                desarrollarse como individuos. Los psicólogos podemos acompañar a la persona en este viaje de autodescubrimiento y trabajo personal.</p>
            </div>
            
        </div>
     );
}
 
export default Therapy;