import React from "react";
import Navbar from "./components/Navbar";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Omc23Cruds from "./pages/omc23Cruds";
import TablaReact from "./components/tablaReact";
//redux
import { Omc23Provider } from "./context/omc23/ContextOmc23";
import { Provider } from "react-redux";
import store from './redux'
import './styles/omc23/styles.css'
import './styles/modalsStyle.css'
function App() {
  return (
    <div className="" >
      <Provider store={store}>
        <Omc23Provider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<h1 className="m-4">Pagina inicial</h1>}/>
          <Route path="/userList" element={<Omc23Cruds/>}/>
          <Route path="/tablaReact" element={<TablaReact/>}/>
        </Routes>
      </BrowserRouter>
      </Omc23Provider>
      </Provider>
    </div>
  );
}

export default App;
