function PlantFilterItem({ list, value, setSearchValue }) {
    const plant = list.find((p) => p.id_plant === value); 

    return (
        <>
            <li key={plant.id_plant}><a className="dropdown-item" 
                                        style={{cursor: 'pointer'}}
                                        onClick={() => {
                                            setSearchValue(plant.plant_account_name)
                                        }}>
                                    {plant.plant_account_name !== plant.plant_name ? plant.plant_account_name + ' - ' + plant.plant_name : plant.plant_account_name}</a></li>
        </>
    );
}

export {PlantFilterItem}