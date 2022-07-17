import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import HomeLayout from "../components/home/Home";
export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Head>
          <title>ToDo App</title>
          <meta
            name="description"
            content="Application to keep a track of work, built using NextJS, GraphQL, Sequalize & PostgreSQL"
          />
        </Head>
        <HomeLayout />
      </div>
    </ApolloProvider>
  );
}
