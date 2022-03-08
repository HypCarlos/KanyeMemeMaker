import { BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import CustomText from "./components/customText/CustomText";

import Main from "./components/main/Main";
// import Screenshot from "./Screenshot";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/custom" component={CustomText}></Route>
        <Route path="/" component={Main} exact></Route>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
