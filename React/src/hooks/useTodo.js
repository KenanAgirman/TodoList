import { useState } from "react";

export function useTodo(tab,value) {
    const [todos, setTodo] = useState(tab);

    const addTodo = () => {

        if(value=='')
        {
            throw new Error("Nom")
        }else{
            console.log(value)
            setTodo(tab.push(value));
        }

    };

    const remove = (index)=>{

        setTodo(tab.splice(index, 1));
    }

    return {
        list: todos,
        ajout: addTodo,
        supprime:remove
    };
}
