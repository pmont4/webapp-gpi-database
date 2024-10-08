import { useEffect, useState } from "react";
import { PlantFilterItem } from "./PlantFilterItem";
import { PlantFilterInput } from "./PlantFilterInput";

function PlantFilter() {
    const [info, setInfo] = useState([]);
    const [searchValue, setSearchValue] = useState('');

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

    if (searchValue) console.log(searchValue);

    return (
        <>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Seleccionar planta</button>
                <ul className="dropdown-menu">
                    {info.map((item) => (
                        <PlantFilterItem key={item.id_plant} list={info} value={item.id_plant} setSearchValue={setSearchValue} />
                    ))}
                </ul>
                <PlantFilterInput setSearchValue={setSearchValue} />
            </div>
        </>
    );
}

export {PlantFilter}