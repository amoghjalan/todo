import React from "react";
import styles from "../styles/Home.module.css";

const ListItem = ({ item }) => {
  return (
    <div className={styles.ListItem}>
      <input
        type="checkbox"
        className={styles.checkbox}
        defaultChecked={item.isCompleted}
      />
      <p className={styles.itemTitle}>{item.title}</p>
      <button className={styles.editButton}>Edit</button>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default ListItem;
