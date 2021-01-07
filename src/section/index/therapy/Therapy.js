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
                        <h3 style={{textAlign:"center",paddingTop:15}}> Quizás necesitas ayuda sí...</h3>
                        <ul>
                            <li><p>padeces de problemas emocionales como tristeza crónica o ansiedad,</p></li>
                            <li><p>no logras relacionarte y socializar con quienes te rodean,</p></li>
                            <li><p>tienes problemas continuos con tus seres queridos, como pareja o familia.</p></li>
                        </ul>
                        <div style={{display:"flex", justifyContent: "center"}}>
                            <Link to="/servicios"><Button btnColor="#BD71CF" hoverText="white"> Servicios</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={therapyStyle.content}>
                <h3 style={{color:"#FB68A2",}}> TERAPIA HUMANISTA</h3>
                <h1 style={{color:"#904D9F",}}>¿Qué esperar?</h1>
                <p>Sabemos que, tarde o temprano, en nuestra vida va a existir sufrimiento. Cuando nos sentimos confusos, atascados en ese dolor, sin saber muy bien qué hacer o cómo actuar, ese puede ser el mejor momento para acudir a terapia.</p>
                <p>Otras personas desean empezar una terapia con el fin de conocerse mejor a sí mismos, de cultivar su interior y desarrollarse como individuo. Los psicólogos podemos acompañar a la persona en este viaje de autodescubrimiento y trabajo personal.</p>
                <p>Cada ser humano es único y complejo. Por ello, la terapia se adaptará de la mejor forma posible al paciente, teniendo en cuenta siempre sus necesidades.</p>
            </div>
            
        </div>
     );
}
 
export default Therapy;