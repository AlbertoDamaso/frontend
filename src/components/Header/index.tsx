import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { AuthContext } from "../../contexts/AuthContext";

export function Header(){

    // const { signOut } = useContext(AuthContext);

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/dashboard'>

                </Link>
           
                {/* <nav className={styles.menuNav}>
                    <Link href='/category'>
                        Categoria
                    </Link>

                    <Link href='/product'>
                        Cardapio
                    </Link>

                </nav> */}
            </div>
        </header>
    )
}