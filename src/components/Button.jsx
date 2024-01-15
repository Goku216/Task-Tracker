const Button = ({text, color, onAdd}) => {
    return <button className="btn" onClick={onAdd} style={
      {backgroundColor: color}
     }>{text}</button>
  }
  
  export default Button