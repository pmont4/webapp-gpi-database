function PlantFilterItem({ list, toFind }) {
    const plant = list.find((p) => p.id_plant === toFind); 

    return (
        <>
            <li key={plant.id_plant}><a className="dropdown-item" 
                                        style={{cursor: 'pointer'}}>
                                    {plant.plant_account_name !== plant.plant_name ? plant.plant_account_name + ' - ' + plant.plant_name : plant.plant_account_name}</a></li>
        </>
    );
}

export {PlantFilterItem}