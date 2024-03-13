
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
// import { LandingPage } from './components/LandingPage/LandingPage';
// import { MouseAwareButton } from './components/MouseAwareButton/MouseAwareButton';
import { Button } from "./components/Button/Button";
// import { ScrollingBanner } from "./components/ScrollingBanner/ScrollingBanner";
// import { TextInput } from "./components/TextInput/TextInput";

function App() {
  return (
      <div className={styles.App}>
        <Navbar/>
        <Button/>
      </div>
  )
}

export default App
