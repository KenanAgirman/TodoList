export function TodoRow({todos,supprime}) {
    return (
        <div>
            <h3 style={{color: "royalblue"}}>Voci les tâches</h3>
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li className="list-group-item" key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>{todo}</span>
                            <button style={{color: "navy",
                                            backgroundColor: "red",
                            }} onClick={() => supprime(index)}>Supprimer</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
