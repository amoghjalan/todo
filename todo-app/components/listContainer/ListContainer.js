import ListItem from "../listItem/ListItem";
import styles from "./ListContainer.module.css";

const ListContainer = ({ userTasks, userID }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {userTasks.map(task => (
          <ListItem key={task.id} item={task} />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
