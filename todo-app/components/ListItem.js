import React from "react";
import styles from "../styles/Home.module.css";
import { gql, useMutation } from "@apollo/client";

const UPDATE_TODO = gql`
  mutation Mutation($curId: Int!, $status: Boolean) {
    updateItem(id: $curId, isCompleted: $status)
  }
`;
const DELETE_TODO = gql`
  mutation Mutation($curId: Int!) {
    deleteItem(id: $curId)
  }
`;

const ListItem = ({ item }) => {
  const [updateTodo, { udata, uloading, uerror }] = useMutation(UPDATE_TODO);
  const [deleteTodo, { ddata, dloading, derror }] = useMutation(DELETE_TODO);

  const handleCheck = () => {
    updateTodo({ variables: { curId: item.id, status: !item.isCompleted } });
    window.location.reload();
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteTodo({ variables: { curId: item.id } });
    window.location.reload();
  };
  return (
    <div className={styles.Card}>
      <input
        type="checkbox"
        className={styles.checkbox}
        defaultChecked={item.isCompleted}
        onChange={handleCheck}
      />
      <h2 className={styles.itemTitle}>{item.title}</h2>
      <button className={styles.deleteButton} onClick={e => handleDelete(e)}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
