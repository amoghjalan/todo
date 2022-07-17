import ListItem from "../listItem/ListItem";
import styles from "./ListContainer.module.css";

const ListContainer = ({ userTasks, userID, getUserTasks }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {userTasks.map(task => (
          <ListItem key={task.id} item={task} getUserTasks={getUserTasks} />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
