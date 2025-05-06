import { Layout, Space } from 'antd';
import React from 'react';
import './App.css';
import { BrowserRouter as Router,
 Routes, Route, Link
 } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Goodbye from './components/Goodbye';
import Hello from './components/Hello';

const { Header, Content, Footer } = Layout;
const App = () => {
 return (
 <Router>
 <Header>
 <nav>
 <Space>
 <Link to="/">Home</Link>
 <Link to="/dashboard">Dashboard</Link>
 <Link to="/about">About</Link>
 <Link to="/Goodbye">Goodbye</Link>
 <Link to="/Hello">Hello</Link>

 </Space>
 </nav>
 </Header>
 <Content>
 <Routes>
 <Route index element={ <Home />} />
 <Route path="/About" element={ <About />} />
 <Route path="/Dashboard" element={ <Dashboard /> } />
 <Route path="/Goodbye" element={ <Goodbye /> } />
 <Route path="/Hello" element={ <Hello /> } />

 </Routes>
 </Content>
 <Footer>
 <p>VT6003CEM Demo</p>
 </Footer>

 </Router>
 );
}
export default App;