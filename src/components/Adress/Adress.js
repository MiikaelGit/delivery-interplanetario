import {Dosis} from "next/font/google";
import style from '@/components/Adress/Adress.module.css'

const font = Dosis({
    weight: ['800' , '200', '500', "600"],
    subsets: ["latin"]
})
export function Adress() {
    return(
        <>
        <section className={style.section}>
            <h2 className={font.className}>
                Edite seus dados
            </h2>
            <form>
                <div>
                    <label className={font.className}>País</label>
                    <input required placeholder="Seu país" type="text"></input> 
                </div>
                <div>
                    <label className={font.className}>Cidade</label>
                    <input required placeholder="Sua cidade" type="text"></input> 
                </div>
                <div>
                    <label>Selecione o endereço da fábrica ou local de armazenamento interplanetário de sua preferência</label>
                    <select>
                        <option>Selecione uma opção</option>
                        <option>Factory 1593</option>
                        <option>Factory 7264</option>
                        <option>Factory 8329</option>
                        <option>Factory 6471</option>
                        <option>Factory 5928</option>
                        <option>Factory 3167</option>
                        <option>Factory 2845</option>
                        <option>Factory 9716</option>
                        <option>Factory 4682</option>
                        <option>Factory 5394</option>
                    </select>
                </div>
                <div>
                    <p className={style.section}>Outro? </p>
                    <label className={font.className}>Digite o lote da fabrica/armazém</label>
                    <input placeholder="0000" maxLength="4" minLength="4" type="text"></input> 
                </div>
                <input type="submit" value="Atualizar informações"></input>
            </form>
        </section>
        </>
    )
}