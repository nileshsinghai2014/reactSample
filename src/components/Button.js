import React from 'react'

const Button = (props) => {

    return(
        <a class="btn-floating btn-large waves-effect waves-light red" style={{margin: "5px"}} onClick = {props.action}><i class="material-icons">{props.buttonTitle}</i></a>
    )
}

export default Button;