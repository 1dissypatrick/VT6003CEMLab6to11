import React, {useState} from 'react';

const Goodbye = (props) => {
    const changeColor = () => { setTxtColor("red"); }
    const revertColor = () =>{ setTxtColor("blue"); }
 const [txtColor, setTxtColor] = useState("blue");
 return (
 <>
 <h1 onMouseEnter={changeColor} onMouseLeave={revertColor}
 style={{color:txtColor}}>Goodbye {props.name}</h1>;
 <h1>Goodbye {props.name}</h1>
 <h2>Current colour is: {txtColor}</h2>
 </>
)
} 
export default Goodbye;