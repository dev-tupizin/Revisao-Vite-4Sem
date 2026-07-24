import { useState } from 'react'
import styles from "./Home.module.css"
import times from "../../data/times.json"
import Header from "../../components/Header/Header"
import Card from '../../components/Card/Card'

export default function Home() {
    const [cards, setCards] = useState();
    const [carregando, setCarregando] = useState(false);

    return carregando ? (
        <main className={styles.loading}>
            <img src="/loading.gif" alt="Carregando..." />
        </main>
    ) : (
        <>
            <Header quantidadeTimes={cards.lenght} />

            <section>
                <h2>Conteúdos revisados</h2>
                <ul>
                    <li>Componentes</li>
                    <li>Props</li>
                    <li>Hooks</li>
                </ul>
                </section>

                 <main className={styles.container}>
                         {cards.map((card) => (
                             <Card
                                 key={card.id}
                                 imagem={card.imagem}
                                 nome={card.nome}
                                 descricao={card.descricao}
                                 campeao={card.campeao}
                             />

                     ))}
                </main>
        </>
    );
}
