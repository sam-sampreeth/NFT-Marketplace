import "../styles/globals.css"

// Internal Imports
import {NavBar, Footer} from "../Components/componentindex";

const myApp = ({ Component, pageProps}) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
  
)

export default myApp;
