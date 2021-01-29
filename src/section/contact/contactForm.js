import React from 'react'
import contactStyle from "./contact.module.scss"

import Btn from "./../../components/button/button"

import { Formik, Form, Field, ErrorMessage } from 'formik'; // simplify forms
import * as Yup from 'yup'; // simplify information
import emailjs from 'emailjs-com'; // manage email information

const initialValues = { //form information
    name: "",
    email: "",
    description:""
};
const onSubmit =  (values,onSubmitProps) => {
    console.log("form data", values)
    console.log("submit props", onSubmitProps)

        // send the message via email with emailjs:
    let serviceID = process.env.GATSBY_SERVICE_ID
    let templateID = process.env.GATSBY_TEMPLATE_ID;
    let userID = process.env.GATSBY_USER_ID;
    emailjs.send(serviceID,templateID,values,userID) ;

    onSubmitProps.resetForm(); // clean form
}

const validationSchema = Yup.object({
    name: Yup.string().required("Requerido"),
    email: Yup.string().email("Email inválido").required("Requerido"),
    description: Yup.string().required("Requerido"),
})

const ContactForm = () => {

    return ( 
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            {formik => { 
                return(
                    <Form className={contactStyle.form}>
                    <Field className={contactStyle.field} placeholder="Nombre" 
                        type="text" id="name" name="name" 
                            /*
                            Reduce with formik the form schema:
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name} /> 
                            Unused in Field formik component:
                            {...formik.getFieldProps("name")} />
                            */
                            />

                    <ErrorMessage name="name" style={{color:"red"}}
                            /*
                            {formik.errors.name && formik.touched.name ? 
                                <div className={contactStyle.error}> {formik.errors.name}</div>: 
                                null}
                            */
                    />
                        
                    <Field className={contactStyle.field} placeholder="E-mail" 
                            type="email" id="email" name="email" />
                    <ErrorMessage name="email" className={contactStyle.error} />
                        
                    <Field as="textarea" placeholder="Motivo de consulta"  
                        type="text" id="description" name="description" row="40"
                        className={contactStyle.field} />
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <Btn btnColor="#FB68A2" hoverText="#FFFFFF" > Enviar</Btn>
                    </div>
                    
                </Form>
            )}}
        </Formik>
     );
}
 
export default ContactForm;


