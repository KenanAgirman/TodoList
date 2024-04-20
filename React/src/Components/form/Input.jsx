// eslint-disable-next-line react/prop-types
export function Input ({label,value,onChange}){
    return <div>

        <label >{label}</label>
        <input
            type="text"
            className="form-control"
            value={value}
            onChange={(e) =>onChange(e.target.value)}
        />
    </div>
}