import './Button.css';

const Button = ({text, type,  onClick,detail})=>{
    return (
       <button  type={type} className={`Button Button_${type} ${detail}`}
        onClick={onClick}>{text}</button>
    )
}

export default Button;

