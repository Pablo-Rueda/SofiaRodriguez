import React from 'react';

import contactStyle from "./contact.module.scss"
import  ContactForm from "./contactForm";

const Contact = () => {
    return (
        <div>
            <div className={contactStyle.contactImage}> <h1> Contacta </h1> </div>
            <div className={contactStyle.container}>
                <h1 style={{color:"#904D9F",}}> Contacta </h1>
                <div className={contactStyle.contact}>

                    <ContactForm />
                    <div> 
                        <p className={contactStyle.icon}> 
                            <i className="material-icons" >home</i> 
                            <span>Toledo y Madrid</span>
                        </p>
                        
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
                        </p>
                    </div>
                </div>
            </div>
        </div>
        

     );
}
 
export default Contact;