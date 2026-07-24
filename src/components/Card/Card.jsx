import styles from "./Card.module.css"

export default function Card({imagem, nome, descricao, campeao}) {
  return (
      <article className={styles.card}>
          <img src={imagem || "/public/img/sem_foto.png"} alt={nome} />
          <h2>{nome}</h2>
          <p className={styles.descricao}>{descricao}</p>
          <p>
              <span>Campeão:</span> {'🏆'.repeat(campeao)}
          </p>
      </article>
  );
}
