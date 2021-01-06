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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus itaque vitae natus soluta quos suscipit explicabo aperiam molestias aliquid, dignissimos inventore accusantium accusamus quisquam quibusdam voluptates fuga. Vel, architecto!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus itaque vitae natus soluta quos suscipit explicabo aperiam molestias aliquid, dignissimos inventore accusantium accusamus quisquam quibusdam voluptates fuga. Vel, architecto!</p>
            </div>
            
        </div>
     );
}
 
export default Therapy;