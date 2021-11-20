import styles from "./index.module.css";

export default function Card({ bg, name, time }) {
  return (
    <div className={styles.card}>
      <img src={bg} alt={name} />
      <div className={styles.card__txtContainer}>
        <span>{name}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}
