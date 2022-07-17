import React from "react";
import styles from "./AddUserModal.module.css";
import { CREATE_USER } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const AddUserModal = ({ setisModalOpen }) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: () => window.location.reload()
  });
  const handleAdd = async () => {
    await createUser({
      variables: {
        username,
        email
      }
    });

    setisModalOpen(false);
    window.location.reload();
  };
  return (
    <div className={styles.centered}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h5 className={styles.heading}>Add User</h5>
        </div>
        <div className={styles.modalContent}>
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Enter Username"
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
            <button className={styles.addBtn} onClick={handleAdd}>
              Add User
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

export default AddUserModal;
