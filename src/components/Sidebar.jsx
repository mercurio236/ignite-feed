import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/32252053?v=4"
        />
        <strong>Arley Souto</strong>
        <span>Enginer Software</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
