import styles from "./page.module.scss";
import Image from 'next/image';
import CardPlant from "@/app/ui/CardPlant";
import ListPlants from "@/app/ui/ListPlants";

export default function Home() {
  return (
    <>
      <section id="section1" className={`${styles.section1} ${styles.mainSection}`}>
          <div className={styles.bg}>
              <div className={styles.contentBox}>
                  <div className={styles.content}>
                      <h1 className={styles.h1}>Крупнейшая коллекция природных артефактов</h1>
                      <p className={styles.textContent}>Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.</p>
                      <div className={styles.btn}>
                          <p>Исследовать</p>
                          <Image
                              src="/arrow.png"
                              width={65}
                              height={20}
                              alt="arrow"/>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="section2" className={`${styles.section2} ${styles.mainSection}`}>
        <div className="">
            {/*<CardPlant/>*/}
            <ListPlants/>
        </div>
      </section>
      <section>
        ggtg
      </section>
    </>
  );
}
 