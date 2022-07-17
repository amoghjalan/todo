import styles from "./AddItem.module.css";

const AddItem = ({ setisModalOpen }) => {
  return (
    <div className={styles.container}>
      <button className={styles.addButton} onClick={() => setisModalOpen(true)}>
        Add Task
      </button>
    </div>
  );
};

export default AddItem;
