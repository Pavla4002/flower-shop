import styles from './index.module.scss'
import Image from "next/image";
import {Plant} from "@/app/ui/ListPlants";

function CardPlant(props) {
    const {plant} = props;
    return (
        <div className={styles.cardPlant}>
            <div className={styles.imagePlant}>
                <Image
                    src={plant.imagePlant}
                    width={223}
                    height={120}
                    alt="arrow"/>
            </div>
            <div className={styles.contentPlant}>
                <div className={styles.flexColumn}>
                    <span className={styles.titlePlant}>
                        {plant.plantName}
                    </span>
                    <span className={styles.textPlant}>
                        {plant.plantText}
                    </span>
                </div>


                <button className={styles.bntCardPlant}>
                    Подробнее
                </button>
            </div>
        </div>
    );
}

export default CardPlant;