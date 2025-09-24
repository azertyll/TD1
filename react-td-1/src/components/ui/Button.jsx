export default function Button({text, action}) {

    return(
        <button className="Button" onClick={action}>{text}</button>
    )
}