import './CampoTexto.css'
const CampoTexto = (props) => {
    return(
    <div className="campo-Texto">
        <label>{props.label}</label>
        <input placeholder={props.placeholder}></input>
    </div>
)
}

export default CampoTexto