import React from "react";
import styles from "./AddItemModal.module.css";
import { CREATE_ITEM } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const AddItemModal = ({ getUserTasks, setisModalOpen, users, currUserID }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState(null);
  const [user, setUser] = React.useState(currUserID);
  const [severity, setSeverity] = React.useState(null);

  const [createItem] = useMutation(CREATE_ITEM, {
    onCompleted: () => getUserTasks()
  });

  const handleAdd = async () => {
    await createItem({
      variables: {
        userId: user,
        title: title,
        description: description,
        severity: severity,
        dueDate: date
      }
    });
    setisModalOpen(false);
  };
  return (
    <div className={styles.centered}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h5 className={styles.heading}>Add Item</h5>
        </div>
        <div className={styles.modalContent}>
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Enter Title"
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Enter Description"
            onChange={e => setDescription(e.target.value)}
          />
          <input
            className={styles.modalInput}
            type="date"
            placeholder="Enter Date"
            onChange={e => setDate(e.target.value)}
          />
          <select
            className={styles.modalInput}
            onChange={e => setUser(e.target.value)}
          >
            {users.findAllUsers.map(user => (
              <option
                key={user.id}
                value={user.id}
                default={user.id === currUserID}
              >
                {user.username}
              </option>
            ))}
          </select>
          <select
            className={styles.modalInput}
            onChange={e => setSeverity(e.target.value)}
          >
            <option value={null}>Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>
        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
            <button className={styles.addBtn} onClick={handleAdd}>
              Add Item
            </button>
            <button
              className={styles.cancelBtn}
              onClick={() => setisModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
