import "../styles/globals.css"

// Internal Imports
import {NavBar} from "../Components/componentindex";

const myApp = ({ Component, pageProps}) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
  
)

export default myApp;
