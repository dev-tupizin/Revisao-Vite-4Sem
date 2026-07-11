import { useState, useEffect } from 'react';

import styles from './MeiaBoca.module.css';

export default function MeiaBoca() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const carregarTimes = async () => {
            try {
                const resposta = await fetch('https://url_da_minha_API/selecoes');
                const times = await resposta.json();
                setCards(times);
            } catch (erro) {
                console.error(erro);
            }
        };
        carregarTimes();
    }, []);

    return (
        <>
            <header>
                <h1 className={styles.titulo}>Seleções da Copa do Mundo 2026</h1>
                <p>{cards.length} itens</p>
            </header>

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
                    <article key={card.id} className={styles.card}>
                        <img src={card.imagem} alt={card.nome} />
                        <h2>{card.nome}</h2>
                        <p className={styles.descricao}>{card.descricao}</p>
                        <p>
                            <span>Campeão:</span> {'🏆'.repeat(card.campeao)}
                        </p>
                    </article>
                ))}
            </main>
        </>
    );
}
