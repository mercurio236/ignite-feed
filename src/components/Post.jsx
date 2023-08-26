import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/mercurio236.png" />
          <div className={styles.authorInfo}>
            <strong>Arley Souto</strong>
            <span>Software Enginer</span>
          </div>
        </div>
        <time
          title="26 de outubro de 2023 as 14:06h"
          dateTime="2023-08-26 14:06:30"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare </a>
        </p>
        <p>
          {" "}
          <a href=""> #novoprojeto</a>{' '}
          <a href="">#nlw </a>{' '}
          <a href="">#rocketseat</a>{' '}
        </p>
      </div>
    </article>
  );
}