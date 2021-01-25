import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from './cards';
import {Link} from "gatsby";
import Button from "../../../components/button/button"


const Hero = () => {
    return ( 
        <Container style={{paddingTop:"2.5rem"}}>
            <Grid container>
                <Grid item xs={12} sm={8} style={{textAlign: "justify"}}>
                    <h3 style={{color:"#FB68A2",}}> SOFÍA RODRÍGUEZ</h3>
                    <h1 style={{color:"#904D9F",}}>Conóceme</h1>
                    <p> Soy Sofía Rodríguez, psicóloga y psicoterapeuta. Me gradué en psicología en la Universidad Autónoma de Madrid. 
                    Posteriormente, realicé el Máster en Psicología General Sanitaria y el  Máster en Psicoterapia Humanista Experiencial 
                    y en Terapia Focalizada en la Emoción en la Universidad Pontificia de Comillas. </p>
                    
                    <p>Desde que me gradué he estado interesada en aquellas formaciones que tienen en cuenta la pluralidad de enfoques 
                    terapéuticos. Estas me han permitido obtener conocimientos versátiles en varias corrientes psicoterapéuticas y una 
                    amplia experiencia en centros terapéuticos, colegios, fundaciones y ONGs. Durante mi tiempo de trabajo he adquirido 
                    experiencia como psicóloga tanto en formato presencial como online.</p>
                    <Link to="/contacto"><Button btnColor="#FB68A2" hoverText="white"> Contacto</Button></Link>
                </Grid>
                <Grid item xs={12} sm={4} style={{display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:"1rem"}}>
                    <Card />
                </Grid>
            </Grid>
                
        </Container>
     );
}
 
export default Hero;