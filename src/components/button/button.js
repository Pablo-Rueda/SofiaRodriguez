import React,{useState} from 'react';
import buttonStyles from "./button.module.scss";


const Button = (props) => {

    const btnEmpty = {
        background: props.hoverText,
        color: props.btnColor,
        border:"2px solid " + props.hoverText,
        fontWeight: "Medium"
      };
    const btnFull = {
        background: props.btnColor,
        color: props.hoverText,
        border:"2px solid " + props.btnColor,
      };
    
    let btnStyleNotHover = {};
    let btnStyleHover = {};
    
    if(props.direct){
      btnStyleNotHover = btnEmpty;
      btnStyleHover = btnFull;
    }else{
      btnStyleNotHover = btnFull;
      btnStyleHover = btnEmpty;
    }

    const [style, setStyle] = useState(btnStyleNotHover);

    return ( 
      <button className={buttonStyles.btn} style={style} 
      onMouseEnter={()=>setStyle(btnStyleHover)} 
      onMouseLeave={()=>setStyle(btnStyleNotHover)}>
          {props.children}
      </button>
    );
}
 
export default Button;
