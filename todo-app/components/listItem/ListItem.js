import styles from "./ListItem.module.css";
import { UPDATE_ITEM, DELETE_ITEM } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
const ListItem = ({ item, getUserTasks }) => {
  const [updateItem] = useMutation(UPDATE_ITEM, {
    onCompleted: () => window.location.reload()
  });
  const [deleteItem] = useMutation(DELETE_ITEM, {
    onCompleted: () => window.location.reload()
  });

  // const handleCheck = async () => {
  //   await updateItem({
  //     varaibles: {
  //       updateItemId: item.id,
  //       isCompleted: !item.isCompleted
  //     }
  //   });
  // };

  const handleDelete = async () => {
    await deleteItem({
      variables: {
        deleteItemId: item.id
      }
    });
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
      <div className={styles.buttons}>
        {/* <button className={styles.edit}>Edit</button> */}
        {/* <input
          type="checkbox"
          defaultChecked={item.isCompleted}
          onClick={handleCheck}
        /> */}
        <button className={styles.delete} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
