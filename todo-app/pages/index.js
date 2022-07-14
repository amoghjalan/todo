import Head from "next/head";
import styles from "../styles/Home.module.css";
import ListContainer from "../components/ListContainer";
import { ApolloProvider } from "@apollo/client";
import initializeApollo from "../apollo-client";
export default function Home() {
  const client = initializeApollo;
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>ToDo App</title>
          <meta
            name="description"
            content="Application to keep a track of work, built using NextJS, GraphQL, Sequalize & PostgreSQL"
          />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Keep work Sorted!</h1>
          <div className={styles.wrapper}>
            <ListContainer />
          </div>
        </main>
        <footer className={styles.footer}>
          <p>Amogh Jalan</p>
        </footer>
      </div>
    </ApolloProvider>
  );
}
