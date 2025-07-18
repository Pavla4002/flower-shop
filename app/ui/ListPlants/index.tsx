"use client"
import {useEffect, useState} from 'react';
import styles from './index.module.scss'
import axios from "axios";
import CardPlant from "@/app/ui/CardPlant";

export interface Plant {
    id: number,
    plantName: string,
    plantText: string,
    imagePlant: string
}

function ListPlants() {
    const [data, setData] = useState<Plant[]>();

    useEffect(() => {
        axios.get('/data.json')
            .then(res => setData(res.data))
            .catch(err => console.log('Произошла ошибка:', err));
        console.log(data)
    }, []);

    return (
        <div className={styles.listPlantsBox}>
            {
                data ? data.map(plant => <CardPlant key={plant.id} plant={plant}/>) : ''
            }
            {/*<CardPlant key={plant.id} plant={plant}/>*/}
        </div>
    );
}

export default ListPlants;