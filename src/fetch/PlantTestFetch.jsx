import { useEffect, useState } from "react";

function PlantTestFetch({id}) {
    // const [info, setInfo] = useState([]);

    // const fetchData = async () => {
    //     const url = 'http://localhost:8080/gpi/plant/';
    //     const response = await fetch(url);
    //     const result = await response.json();
    //     setInfo(result);
    // }
    
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // if (!info) {
    //     return (
    //         <>
    //             <h1>Cargando</h1>
    //         </>
    //     );
    // }

    // return (
    //     <>
    //         <div style={{ display: 'flex', justifyContent: 'center' }}>
    //             <table>
    //                 <thead>
    //                     <tr>
    //                         <th>ID de planta</th>
    //                         <th>Nombre de cuenta</th>
    //                         <th>Nombre de planta</th>
    //                         <th>Continente</th>
    //                         <th>Pais</th>
    //                         <th>Estado</th>
    //                         <th>Anio de construccion</th>
    //                         <th>Anio de inicio de operaciones</th>
    //                         <th>Direccion de la planta</th>
    //                         <th>Latitud de la planta</th>
    //                         <th>Longitud de la planta</th>
    //                         <th>Metros por encima del nivel del mar</th>
    //                         <th>Giro negocios</th>
    //                         <th>Actividad de la planta</th>
    //                         <th>Clasificacion de mercancia</th>
    //                         <th>Descripcion del sector</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {info.map((plant) =>(
    //                         <tr key={plant.id_plant}>
    //                         <td style={{textAlign: 'center'}}>{plant.id_plant}</td>
    //                         <td style={{textAlign: 'center'}}>{plant.plant_account_name}</td>
    //                         <td style={{textAlign: 'center'}}>{plant.plant_name}</td>
    //                         <td style={{textAlign: 'center'}}>{plant.plant_continent}</td>
    //                         <td style={{textAlign: 'center'}}>{plant.plant_country}</td>
    //                         <td style={{textAlign: 'center'}}>{plant.plant_country_state}</td>
    //                         {plant.plant_construction_year ? <td style={{textAlign: 'center'}}>{plant.plant_construction_year}</td> : <td style={{textAlign: 'center'}}>No se guardaron datos</td>}
    //                         {plant.plant_operation_startup_year ? <td style={{textAlign: 'center'}}>{plant.plant_operation_startup_year}</td> : <td style={{textAlign: 'center'}}>No se guardaron datos</td>}
    //                         {plant.plant_address ? <td style={{textAlign: 'center'}}>{plant.plant_address}</td> : <td style={{textAlign: 'center'}}>No se guardaron datos</td>}
    //                         {plant.plant_latitude ? <td style={{textAlign: 'center'}}>{plant.plant_latitude}</td> : <td style={{textAlign: 'center'}}>No se guardaron datos</td>}
    //                         {plant.plant_longitude ? <td style={{textAlign: 'center'}}>{plant.plant_longitude}</td> : <td style={{textAlign: 'center'}}>No se guardaron datos</td>}
    //                         {plant.plant_meters_above_sea_level ? <td style={{textAlign: 'center'}}>{plant.plant_meters_above_sea_level}</td> : <td style={{textAlign: 'center'}}>No se guardaron datos</td>}
    //                         <td style={{textAlign: 'center'}}>{plant.plant_business_turnover?.business_turnover_name}</td>
    //                         <td style={{textAlign: 'center'}}>{plant.plant_specific_business_turnover}</td>
    //                         {plant.plant_merchandise_classification? <td style={{textAlign: 'center'}}>{plant.plant_merchandise_classification.merchandise_classification_name}</td> : <td style={{textAlign: 'center'}}>No se guardaron datos</td>}
    //                         {plant.plant_area_description? <td style={{textAlign: 'center'}}>{plant.plant_area_description}</td> : <td style={{textAlign: 'center'}}>No se guardaron datos</td>}
    //                     </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //         </div>
    //     </>
    // );
    return(
        <>
        </>
    );
}

export {PlantTestFetch};