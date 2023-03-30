import "@/styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "@/components/nav";
import { StateContext } from "@/lib/context";

// console.log("llll", process.env.NEXT_PUBLIC_API);
const client = createClient({ url: "http://localhost:1337/graphql" });

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Nav></Nav>
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}
