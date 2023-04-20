
import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Chat from "./pages/ChatPage"

function App() {
  return (
    <div >
     <h2>Hello</h2>
      <BrowserRouter>
      {/* <Navigation/> */}
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/Login' element={< Login/>}/>
        <Route path='/SignUp' element={< SignUp/>}/>
        <Route path='/Chat' element={< Chat/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
