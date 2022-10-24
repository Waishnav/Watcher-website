import React, { useEffect, useState } from "react";
import up_arrow from "../.././assets/up-arrow.svg";
import git_img from "../.././assets/github.svg";
import styles from "./Header.module.css";
import Eye from "../Eye/Eye";

function Header() {
  const [stars, setStars] = useState(100);
  useEffect(() => {
    async function getStars() {
      const res = await fetch("https://api.github.com/repos/waishnav/watcher");
      const jsonRes = await res.json();
      setStars(jsonRes.stargazers_count);
    }
    getStars();
  }, [stars]);

  return (
    <div className={styles.Container}>
      <div className={styles.Container_1}>
        <Eye className={styles.logo} />
        <p>
          Watcher
          <span className={styles.borderBottom}></span>
          <img src={up_arrow} alt='' />
        </p>
      </div>

      <a href='https://github.com/Waishnav/Watcher'>
        <div className={styles.Container_2}>
          <img src={git_img} alt='' />
          <div className={styles.StarUs}>STAR US</div>
          <div className={styles.vertical}></div>
          <div className={styles.Likes}>{stars}</div>
        </div>
      </a>
    </div>
  );
}

export default Header;
