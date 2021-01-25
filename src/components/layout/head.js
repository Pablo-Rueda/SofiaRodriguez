import React from 'react'
import {Helmet} from "react-helmet"

const Head = () => {
    return ( 

    <Helmet>
        <meta charSet="utf-8" />
        <title>Psicóloga en Toledo - Sofía Rodríguez</title>
        <html lang={ 'es'} />
        <meta name="description" content={'Psicóloga clínica en Toledo, municipio de Argés. Terapia presencial y online.'} />
    </Helmet>

     );
}
 
export default Head;