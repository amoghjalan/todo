import styles from "../styles/Home.module.css";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_TODO = gql`
  mutation Mutation($addTitle: String!) {
    addItem(title: $addTitle) {
      id
      title
      description
      severity
      isCompleted
      dueDate
    }
  }
`;

const AddItem = ({}) => {
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);
  const [text, settext] = useState("");

  const handleClick = e => {
    e.preventDefault();
    addTodo({ variables: { addTitle: text } });
    e.target.value = "";
    window.location.reload();
  };
  return (
    <div>
      <input
        type="text"
        className={styles.inputItem}
        onChange={e => settext(e.target.value)}
      />
      <button className={styles.addButton} onClick={e => handleClick(e)}>
        Add
      </button>
    </div>
  );
};

export default AddItem;
