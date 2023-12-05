import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import PageContent from './pages/PageContent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="blogs" element={<PageContent contentPath="Buying_New.md"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//import the rehype class names to allow for styling of created nodes

export default App;
