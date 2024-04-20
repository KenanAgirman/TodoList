export function SearchBar({value,onChange}){
    return <div>
        <input
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        className="form-control input-lg"
        />
    </div>
}