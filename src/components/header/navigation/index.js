import globeIcon from "../../../images/icons/globe.svg";
import menuIcon from "../../../images/icons/menu.svg";
import userIcon from "../../../images/icons/user.svg";
import styles from "./index.module.css";

export default function Navigation({ pageScroll }) {
  return (
    <nav className={styles.navigation}>
      <a
        href="/"
        className={
          pageScroll
            ? `${styles.navigation__link} ${styles.navigation__link_invert}`
            : styles.navigation__link
        }
      >
        Become a host
      </a>
      <button
        type="button"
        className={
          pageScroll
            ? `${styles.navigation__globeBtn} ${styles.navigation__globeBtn_invert}`
            : styles.navigation__globeBtn
        }
      >
        <img src={globeIcon} alt="Globe Icon" />
      </button>
      <button type="button" className={styles.navigation__menuBtn}>
        <img src={menuIcon} alt="Menu Icon" />
        <img src={userIcon} alt="User Icon" />
      </button>
    </nav>
  );
}
