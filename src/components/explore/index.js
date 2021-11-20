import Card from "../card";
import bg1 from "../../images/bg/mumbai.jpg";
import bg2 from "../../images/bg/alibaug.webp";
import bg3 from "../../images/bg/calangute.webp";
import bg4 from "../../images/bg/karjat.webp";
import bg5 from "../../images/bg/lonavla.webp";
import styles from "./index.module.css";

const nearby = [
  { name: "Mumbai", time: "15-minute", bg: bg1 },
  { name: "Lonavla", time: "1.5-hour", bg: bg5 },
  { name: "Alibaug", time: "3.5-hour", bg: bg2 },
  { name: "Calangute", time: "7.5-hour", bg: bg3 },
  { name: "Karjat", time: "45-minute", bg: bg5 },
  { name: "Anjuna", time: "7-hour", bg: bg4 }
];

export default function Explore() {
  return (
    <section className={styles.explore}>
      <h2>Explore nearby</h2>
      <div className={styles.explore__grids}>
        {nearby.map((place, index) => (
          <Card key={index} bg={place.bg} name={place.name} time={place.time} />
        ))}
      </div>
    </section>
  );
}
