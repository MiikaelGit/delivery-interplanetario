import Link from "next/link";
import {Dosis} from "next/font/google";
import styles from "@/components/Login/Login.module.css"

const font = Dosis({
    weight: ['800' , '200', '500', "600"],
    subsets: ["latin"]
})
export default function Login(){
    return(
        <main className={styles.main}>
            <h2 className={font.className}>Seus dados</h2>
            <div className={styles.mainContainer}>
                <div className={styles.avatarImage}></div>
                <div className={styles.informationsContainer}>
                    <div className={styles.mainLink}>
                        <Link href="/EditAdress">Editar Endereço</Link>
                    </div>
                    <p className={font.className}><span>Nome:</span><strong>Fulano Da Silva</strong></p>
                    <p className={font.className}><span>País:</span><strong>Brasil</strong></p>
                    <p className={font.className}><span>Cidade:</span><strong>São Paulo</strong></p>
                    <p className={font.className}><span>CEP:</span><strong>12345-000</strong></p>
                    <p className={font.className}><span>Factory:</span><strong>2845</strong></p>
                    <div className={styles.mainDescription}>
                        <span className={font.className}>Descriçao:</span>
                        <p className={font.className}>
                            <em>Suspendisse quis posuere metus, nec elementum lacus. Quisque auctor, ipsum eget tincidunt ultricies, lectus lorem tempus ligula, eget tincidunt urna dolor eu sapien. Curabitur egestas mi metus, vitae accumsan ante ullamcorper eget. Curabitur nec lorem eget nisl convallis ornare. Quisque sit amet rutrum urna. Phasellus lacinia porttitor sapien, molestie facilisis lorem. Fusce mollis eu nisl non dictum. Sed nec enim erat. Sed congue euismod auctor.</em>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}