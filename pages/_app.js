import Layout from "../components/Layout";
import "../styles/globals.css";
import { PortfolioProvider } from "../context/context";
import { prefix } from "../config/config";

export default function MyApp({ Component, pageProps }) {
  return (
    <PortfolioProvider value={ { prefix }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioProvider>
  );
}