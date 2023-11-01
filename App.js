import { BrowserRouter,Routes,Route}from "react-router-dom";
// import Seed from "./Seed";
import New from "./NewSeed";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<New/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
