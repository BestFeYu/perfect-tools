import React from "react";

const Button = (props: any) => {
    return <button className="my-button">{props.children}</button>
}

export default Button;