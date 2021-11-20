import companyIcon from "../../../images/icons/airbnb.svg";
import companyLogo from "../../../images/icons/airbnb-logo.svg";
import styles from "./index.module.css";

export default function Logo({ pageScroll }) {
  return (
    <a href="/" className={styles.logoContainer}>
      <picture>
        <source media="(min-width: 992px)" srcSet={companyLogo} />
        <img
          src={companyIcon}
          alt="Airbnb"
          className={
            pageScroll
              ? styles.logoContainer__logo
              : `${styles.logoContainer__logo} ${styles.logoContainer__logo_invert}`
          }
        />
      </picture>
    </a>
  );
}
