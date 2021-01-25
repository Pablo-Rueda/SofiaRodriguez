import React from 'react';

import contactStyle from "./contact.module.scss"
import  ContactForm from "./contactForm";
import Grid from '@material-ui/core/Grid';

import Twitter from './twitter-brands.svg';
import LinkedIn from './linkedin-in-brands.svg';


const Contact = () => {
    return (
        <div>
            <div className={contactStyle.contactImage}> <h1> Contacta </h1> </div>
            <div style={{width:"85%", margin:"1rem auto"}}>
                <h1 style={{color:"#904D9F",}}> Contacta </h1>
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={8} style={{width:"90%", margin:"0 auto"}}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} sm={4} style={{textAlign: "justify"}}>
                    <div className={contactStyle.contact}>
                        <p className={contactStyle.icon}> 
                            <i className="material-icons" >home</i> 
                            <span>Toledo y Madrid</span>
                        </p>
                        {/*
                        <p className={contactStyle.icon}> 
                            <i className="material-icons" >phone_android</i> 
                            <span>123 45 67 89</span>
                        </p>
                        <p className={contactStyle.icon}> 
                            <i className="material-icons" >local_post_office</i> 
                            <span>jhony.doe@psychology.doe</span>
                        </p>
                        <p className={contactStyle.icon}> 
                            <i className="material-icons" >watch_later</i> 
                            <span>De 9:00h a 18:00h</span>
                        </p>*/}

                        <p className={contactStyle.icon}> 
                            <img className={contactStyle.icn} src={LinkedIn} alt="" />
                            <a href="https://www.linkedin.com/in/sof%C3%ADa-rodr%C3%ADguez-pantoja/" style={{paddingLeft:"8px"}}> Sofía Rodríguez</a> {/* icon provided by FontAweson with open Creative Commons license: https://fontawesome.com/icons/twitter?style=brands */}
                        </p>
                        <p className={contactStyle.icon}> 
                            <img className={contactStyle.icn} src={Twitter} alt="" />
                            <a href="https://twitter.com/Sofia_psico">@Sofia_psico</a> {/* icon provided by FontAweson with open Creative Commons license: https://fontawesome.com/icons/twitter?style=brands */}
                        </p>
                    </div>
                    </Grid>
                </Grid>
            </div>
        </div>
        

     );
}
 
export default Contact;