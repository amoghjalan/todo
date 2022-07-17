import styles from "./ListItem.module.css";
const ListItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
      <div className={styles.buttons}>
        <button className={styles.edit}>Edit</button>
        <button className={styles.delete}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;
