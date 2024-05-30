import {Bebas_Neue} from "next/font/google";
import styles from "@/components/Header/Header.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const font = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"]
})
export function Header() {
    return(
        <header className={styles.header}>
            <h1 className={font.className}>Delivery Interplanetário</h1>
            
            <nav>
                <ul className={styles.headerList}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div className={styles.buttonsContainer}>
                <Link href="/" className={styles.buttonRegister}>Cadastre-se</Link>
                <Link href="/Login" className={styles.buttonEdit}>Login</Link>
            </div>
            <button className={styles.menuHamburguer}>
                <GiHamburgerMenu />
            </button>
        </header>
    )
}