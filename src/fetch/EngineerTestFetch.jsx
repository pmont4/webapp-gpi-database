import { useEffect, useState } from "react";

function EngineerTestFetch() {
    const [info, setInfo] = useState(null);

    const fetchData = async () => {
        const url = 'http://localhost:8080/gpi/engineer/';
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
                <h1>Cargando</h1>
            </>
        );
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table>
                <thead>
                    <tr>
                        <th>ID ingeniero</th>
                        <th>Nombre Ingeniero</th>
                        <th>Contacto ingeniero</th>
                    </tr>
                </thead>
                <tbody>
                        {info.map((engineer) => (
                            <tr key={engineer.id_engineer}>
                                <td>{engineer.id_engineer}</td>
                                <td>{engineer.engineer_name}</td>
                                {engineer.engineer_contact ? <td>{engineer.engineer_contact}</td> :<td><p>No hay contacto registrado</p></td>}
                            </tr>
                        ))}

                </tbody>
            </table>
        </div>
    );
}

export {EngineerTestFetch}