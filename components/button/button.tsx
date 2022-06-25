import React from "react";

interface IButton {
    className?: string
    type?: "text" | "contained" | "outlined"
    children?: React.ReactElement | React.ReactElement[] | string | string[] | number | number[];
    onClick?: () => void
}

const Button = React.forwardRef<HTMLButtonElement, IButton>((props, ref) => {
    return <button
        ref={ref}
        className={`perfect-button-${props.type}${props.className && ' ' + props.className}`}
        onClick={props.onClick}
    >
        {props.children}
    </button>;
})

Button.defaultProps = {
    type: "contained",
    className: "",
    onClick: () => {
    }
}

export default Button;
