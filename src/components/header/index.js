import { useEffect, useState } from "react";
import Logo from "./logo";
import Bookings from "./bookings";
import Navigation from "./navigation";
import { debounce } from "../../utils";
import searchIcon from "../../images/icons/search.svg";
import styles from "./index.module.css";

export default function Header() {
  const [pageScroll, setPageScroll] = useState(false);
  const [showMobile, setShowMobile] = useState(() =>
    window.innerWidth < 768 ? true : false
  );

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      if (window.innerWidth < 768) setShowMobile(true);
      else setShowMobile(false);
    }, 10);

    if (window) window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  useEffect(() => {
    const debouncedHandleScroll = debounce(function checkScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 0) setPageScroll(true);
      else setPageScroll(false);
    }, 10);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <header
      className={
        pageScroll ? `${styles.header} ${styles.header_invert}` : styles.header
      }
    >
      <div className={styles.headerContent}>
        {showMobile ? (
          <button
            type="submit"
            className={
              pageScroll
                ? `${styles.headerBtn} ${styles.headerBtn_shadow}`
                : styles.headerBtn
            }
          >
            <img src={searchIcon} alt="Search" />
            <span>Where are you going?</span>
          </button>
        ) : (
          <>
            <Logo pageScroll={pageScroll} />
            <Bookings pageScroll={pageScroll} />
            <Navigation pageScroll={pageScroll} />
          </>
        )}
      </div>
    </header>
  );
}
