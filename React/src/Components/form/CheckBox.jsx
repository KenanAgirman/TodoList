export function CheckBox({cheked,onChange,label,id}){
    return <div className="form-check">
        <input type="checkbox"
               id={id}
                 onChange={event => onChange(event.target.checked)}
               className="form-check-input"
               checked={cheked}
        />

        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}