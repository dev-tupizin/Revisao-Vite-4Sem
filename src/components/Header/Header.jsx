import styles from "./Header.module.css"

export default function Header({ quantidadeTimes }) {
    return (
        <header>
            <h1 className={styles.titulo}>Seleções da Copa do Mundo 2026</h1>
            <p>{quantidadeTimes} {quantidadeTimes === 1 ? "item" : "itens"}</p>
        </header>
    );
}
