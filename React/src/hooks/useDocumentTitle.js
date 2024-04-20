import {useEffect, useRef, useState} from "react";

export function useDocumentTitle(title){
    const titleref = useRef(document.title)

    useEffect(() => {
        return ()=>{
            document.title = titleref.current

        }
    }, []);

    useEffect(() => {
            document.title = title ? title : titleref.current
    }, [title]);

}