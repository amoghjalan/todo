import React from "react";
import styles from "../styles/Home.module.css";
import { gql, useMutation } from "@apollo/client";

const UPDATE_TODO = gql``;
const DELETE_TODO = gql``;

const ListItem = ({ item }) => {
  const [updateTodo, { udata, uloading, uerror }] = useMutation(UPDATE_TODO);
  const [deleteTodo, { ddata, dloading, derror }] = useMutation(DELETE_TODO);

  const handleCheck = () => {
    updateTodo({ variables: { curId: item.id, status: !item.isCompleted } });
  };
  // const handleEdit = () => {
  //   updateTodo({ variables: { curId: item.id, title:  } });
  // }
  const handleDelete = e => {
    e.preventDefault();
    deleteTodo({ variables: { curId: item.id } });
  };
  return (
    <div className={styles.ListItem}>
      <input
        type="checkbox"
        className={styles.checkbox}
        defaultChecked={item.isCompleted}
        onChange={handleCheck}
      />
      <p className={styles.itemTitle}>{item.title}</p>
      {/* <button className={styles.editButton}>Edit</button> */}
      <button className={styles.deleteButton} onClick={e => handleDelete(e)}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
