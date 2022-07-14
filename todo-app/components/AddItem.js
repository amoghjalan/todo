import styles from "../styles/Home.module.css";
import { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const AddItem = ({}) => {
  const [text, settext] = useState("");
  return (
    <div>
      <input
        type="text"
        className={styles.inputItem}
        onChange={e => settext(e.target.value)}
      />
      <button className={styles.addButton}>Add</button>
    </div>
  );
};

export default AddItem;
