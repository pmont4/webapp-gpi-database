import { useEffect, useState } from "react";

function TestFetch() {
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
                                <td><span style={{color: 'red'}}>ID</span>: {engineer.id_engineer}</td>
                                <td><span style={{color: 'red'}}>Nombre</span>: {engineer.engineer_name}</td>
                                {engineer.engineer_contact ? <td><span style={{color: 'red'}}>Contacto</span>: {engineer.engineer_contact}</td> : <p>No hay contacto registrado</p>}
                            </tr>
                        ))}

                </tbody>
            </table>
        </div>
    );
}

export {TestFetch}