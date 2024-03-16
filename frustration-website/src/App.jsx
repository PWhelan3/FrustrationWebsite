
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
// import { LandingPage } from './components/LandingPage/LandingPage';
// import { MouseAwareButton } from './components/MouseAwareButton/MouseAwareButton';
import { Button1 } from "./components/Button1/Button1";
import { Button2 } from "./components/Button2/Button2";
import { Button3 } from "./components/Button3/Button3";
// import { ScrollingBanner } from "./components/ScrollingBanner/ScrollingBanner";
// import { TextInput } from "./components/TextInput/TextInput";

function App() {
  return (
      <div className={styles.App}>
        <Navbar/>
        <Button1/>
        <Button2/>
        <Button3/>
      </div>
  )
}

export default App
