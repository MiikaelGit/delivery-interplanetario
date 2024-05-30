import {Dosis} from "next/font/google";
import styles from "@/components/Register/Register.module.css"
const font = Dosis({
    weight: ['800' , '200', '500', "600"],
    subsets: ["latin"]
})
export function Register(){
    return(
        <main className={styles.main}>
            <div className={styles.mainWrapper}>
                <div>
                    <h2 className={font.className}>Cadastre-se</h2>
                    <p className={font.className}>Importe e exporte qualquer  produto de Marte e para Marte com apenas um clique!</p>
                </div>
                <form className={styles.mainContainer}>
                    <div>
                        <label className={font.className}>Nome</label>
                        <input required placeholder="Seu nome" type="text"></input> 
                    </div>
                    <div>
                        <label className={font.className}>E-mail</label>
                        <input required placeholder="Seu e-mail" type="email"></input> 
                    </div>
                    <div>
                        <label className={font.className}>Número de telefone</label>
                        <input required placeholder="+55 (00) 1 2345-6789" type="tel"></input> 
                    </div>
                    <div>
                        <label className={font.className}>País</label>
                        <input required placeholder="Seu país" type="text"></input> 
                    </div>
                    <div>
                        <label className={font.className}>Cidade</label>
                        <input required placeholder="Sua cidade" type="text"></input> 
                    </div>
                    <input value="Cadastrar" type="submit" ></input>
                </form>
            </div>
            <div>
                <div className={styles.banner}></div>
            </div>
        </main>
        
    )
}