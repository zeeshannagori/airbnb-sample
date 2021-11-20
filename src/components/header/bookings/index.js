import { useEffect, useState } from "react";
import SearchBar from "../search";
import styles from "./index.module.css";

export default function Bookings({ pageScroll }) {
  const [falseHeight, setFalseHeight] = useState(false);

  useEffect(() => {
    const interval = () => setTimeout(() => setFalseHeight(true), 50);

    if (pageScroll) interval();
    else setFalseHeight(false);

    return () => clearTimeout(interval);
  }, [pageScroll]);

  return (
    <div className={styles.bookingsContainer}>
      <div
        className={
          pageScroll
            ? `${styles.bookings} ${styles.bookings_hide}`
            : styles.bookings
        }
      >
        {!pageScroll && (
          <div className={styles.bookings__btnContainer}>
            <button
              className={`${styles.bookings__btn} ${styles.bookings__btn_selected}`}
            >
              Places to stay
            </button>
            <button className={styles.bookings__btn}>Experiences</button>
            <button className={styles.bookings__btn}>Online Experiences</button>
          </div>
        )}
        {pageScroll && !falseHeight && (
          <div className={styles.falseHeight}></div>
        )}
        <SearchBar pageScroll={pageScroll} />
      </div>
    </div>
  );
}
