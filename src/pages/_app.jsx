import "../styles/global.sass"

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}