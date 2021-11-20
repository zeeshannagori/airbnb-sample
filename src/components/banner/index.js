import bg1 from "../../images/bg/olympian.jpg";
import styles from "./index.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div
        style={{ backgroundImage: `url("${bg1}")` }}
        className={styles.banner__bg}
      >
        <div className={styles.banner__txt}>
          <h1>
            Olympian & <br />
            Paralympian <br />
            Online <br />
            Experiences
          </h1>
          <a href="#">Explore now</a>
        </div>
      </div>
    </section>
  );
}
