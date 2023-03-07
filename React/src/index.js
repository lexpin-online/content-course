//React
import React from 'react';

//Router / Biblioteca de rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterDOM from 'react-dom/client';

//Estilos
import './styles/index.css';

//Componentes
import Menu from './components/Menu';

//Vistas
import Home from './views/Home';
import MiRuta from './views/MiRuta';
import UseStateVista from './hooks/UseStateHook';
import UseEffectVista from './views/UseEffectHook';
import UseRefVista from './views/UseRefHook';
import APINoKeyFetch from './views/APINoKeyFetch';
import APIWithKeyFetch from './views/APIWithKeyFetch';


const root = RouterDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mi-ruta" element={<MiRuta/>}/>
      <Route path="/use-state" element={<UseStateVista/>}/>
      <Route path="/use-effect" element={<UseEffectVista/>}/>
      <Route path="/use-ref" element={<UseRefVista/>}/>
      <Route path="/api-fetch" element={<APINoKeyFetch/>}/>
      <Route path="/api-key-fetch" element={<APIWithKeyFetch/>}/>
    </Routes>
  </BrowserRouter>
);