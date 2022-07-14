import { useState } from "react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";

import { gql, useQuery, useMutation } from "@apollo/client";
import styles from "../styles/Home.module.css";

const FETCH_ITEMS = gql`
  query fetchItems {
    Items {
      description
      dueDate
      id
      isCompleted
      severity
      title
    }
  }
`;

const ListContainer = () => {
  const { loading, error, data } = useQuery(FETCH_ITEMS);
  console.log(data);
  console.log(error);

  return (
    <div className={styles.ListContainer}>
      {loading && <p>Loading..</p>}
      {error && <p>Error 404</p>}
      {data && data.Items.map(item => <ListItem key={item.id} item={item} />)}
      <AddItem />
    </div>
  );
};

export default ListContainer;