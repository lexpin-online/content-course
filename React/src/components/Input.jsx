const estilosDeInput = {
    color: "blue",
    fontWeight:900,
    fontFamily:"roboto",
    borderRadius:"7px",
    paddingLeft:"6px",
    margin:"2px",
}

function Input(props) {
    return (
        <input style={estilosDeInput} type={props.type} placeholder={props.placeholder} required/>
    );
}

export default Input;
