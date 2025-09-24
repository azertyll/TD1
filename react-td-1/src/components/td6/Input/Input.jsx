import './Input.css'

export default function Input({ type, name, label, placeholder, subFields, changeAction }) {


    return (
        type === 'radio' ? (
            <div className="customInput-container">
                {subFields.map((field, index) => (
                    <div key={index}>
                        <input type="radio" id={field.id} name={name} 
                        value={field.value ? field.value : field.label} 
                         />
                        <label htmlFor={field.id}>{field.label}</label><br />
                    </div>
                ))}
            </div>
        ) : (
            <div className="customInput-container">
                <label htmlFor={name}>{label}</label>
                <input type={type} name={name} placeholder={placeholder ?? placeholder}
                onChange={(e) => {changeAction(e.target.value)}} />
            </div>
        )

    );
}