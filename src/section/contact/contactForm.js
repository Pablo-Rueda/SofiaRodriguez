import React from 'react'
import contactStyle from "./contact.module.scss"

import Btn from "./../../components/button/button"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    description:""
};
const onSubmit =  values => {
    console.log("form data", values)
    initialValues.name = "";
    initialValues.email = "";
    initialValues.description = "";
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
                    type="text" id="description" name="description" row="20"
                    className={contactStyle.field} />

                <Btn btnColor="#FB68A2" hoverText="#FFFFFF" > Enviar</Btn>
            </Form>
        </Formik>
     );
}
 
export default ContactForm;


