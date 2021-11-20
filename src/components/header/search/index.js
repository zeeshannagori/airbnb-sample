import { useEffect, useState } from "react";
import searchIcon from "../../../images/icons/search.svg";
import styles from "./index.module.css";

export default function SearchBar({ pageScroll }) {
  const [showFullBtn, setShowFullBtn] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (text !== "") setShowFullBtn(true);
    else setShowFullBtn(false);
  }, [text]);

  const submitFunction = (e) => {
    e.preventDefault();
    if (window.pageYOffset !== 0) window.scrollTo(0, 0);
  };

  return (
    <form onSubmit={submitFunction} className={styles.searchBar}>
      {pageScroll ? (
        <span onClick={() => window.scrollTo(0, 0)}>Start your search</span>
      ) : (
        <div className={styles.searchBar__content}>
          <div className={styles.searchBar__option}>
            <span>Location</span>
            <input
              type="text"
              placeholder="Where are you going?"
              onChange={(e) => setText(e.target.value)}
              value={text}
              autoFocus
            />
          </div>
          <div className={styles.searchBar__option}>
            <span>Check in</span>
            <span>Add dates</span>
          </div>
          <div className={styles.searchBar__option}>
            <span>Check out</span>
            <span>Add dates</span>
          </div>
          <div className={styles.searchBar__option}>
            <span>Guests</span>
            <span>Add guests</span>
          </div>
        </div>
      )}
      <button type="submit">
        <img src={searchIcon} alt="Search" />
        {!pageScroll && showFullBtn && <span>Search</span>}
      </button>
    </form>
  );
}
