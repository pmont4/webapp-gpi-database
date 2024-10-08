import { useEffect, useState } from "react";
import { PlantFilterItem } from "./PlantFilterItem";

function PlantFilter() {
    const [info, setInfo] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8080/gpi/plant/';
        const response = await fetch(url);
        const result = await response.json();
        setInfo(result);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    if (!info) {
        return (
            <>
            </>
        );
    }

    return (
        <>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Seleccionar planta</button>
                <ul className="dropdown-menu">
                    {info.map((p) => (
                        <PlantFilterItem key={p.id_plant} list={info} toFind={p.id_plant} />
                    ))}
                </ul>
                <input type="text" className="form-control" placeholder="Escriba o seleccione la planta" />
            </div>
        </>
    );
}

export {PlantFilter}