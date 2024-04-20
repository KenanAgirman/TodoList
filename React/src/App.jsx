import {useState} from "react";
import {SearchBar} from "./Components/ToDo/SearchBar.jsx";
import {TodoRow} from "./Components/ToDo/TodoRow.jsx";
import {useTodo} from "./hooks/useTodo.js";

const Todos = [
    "Léna"
];



function App() {

        const [liste,setList] = useState('');
        const { list, ajout,supprime } = useTodo(Todos,liste);


        return <div className="container gap-2">
            <SearchBar
                value={liste}
                onChange={setList}
            />
            <TodoRow todos={Todos} supprime={supprime} />
            <button onClick={ajout}>Ajoutez</button>

        </div>

}

export default App;
