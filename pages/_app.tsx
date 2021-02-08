import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "./homecomponents/header";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;
