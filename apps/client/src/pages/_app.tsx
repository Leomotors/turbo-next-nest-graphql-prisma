import type { AppProps } from "next/app";
import Head from "next/head";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@org/codegen";

import "$styles/global.scss";

const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Turbo Next Nest GraphQL Prisma</title>
        <meta
          content="My Personal Stack for small production app"
          name="description"
        />
      </Head>

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
