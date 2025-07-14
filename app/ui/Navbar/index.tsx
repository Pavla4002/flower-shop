import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import Link from "next/link";
function Navbar() {
    return (
        <div className={styles.navbarBox}>
            <div className={styles.navPart1}>
                <div className="">
                    <Image
                        src="/logo.png"
                        width={65}
                        height={20}
                        alt="Logo"
                    />
                </div>
                <ul className={styles.ulList}>
                    <li><a href="#section1">Каталог</a></li>
                    <li><a href="#section2">Галерея</a></li>
                    <li><a href="#section3">О лаборатории</a></li>
                    <li><a href="#section4">Контакты</a></li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </ul>
            </div>
            <div className="">
                {/*<Image*/}
                {/*    src=""*/}
                {/*    width={24}*/}
                {/*    height={24}*/}
                {/*    alt="Picture of the author"*/}
                {/*/>*/}
                {/*<Image*/}
                {/*    src=""*/}
                {/*    width={24}*/}
                {/*    height={24}*/}
                {/*    alt="Picture of the author"*/}
                {/*/>*/}
            </div>

        </div>
    );
}

export default Navbar;