import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import PageContent from './components/PageContent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="buying" element={<PageContent contentPath="Buying_New.md"/>}/>
          <Route path="ready" element={<PageContent contentPath="Buying_New.md"/>}/>
          <Route path="care" element={<PageContent contentPath="Buying_New.md"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//import the rehype class names to allow for styling of created nodes

export default App;
