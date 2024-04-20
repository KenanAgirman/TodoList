import { useState } from "react";

export function useIncrement(valeur = 0) {
    const [compteur, setCompteur] = useState(valeur);

    const incremente = () => {
        setCompteur(v => v + 1);
    };

    const decremenet = () => {
        setCompteur(v => v - 1);
    };

    return {
        count: compteur,
        incement: incremente,
        decremenet: decremenet
    };
}
