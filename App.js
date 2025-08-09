import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Track from './pages/Track';
export default function App(){ return (<Router><nav><Link to='/'>Home</Link> <Link to='/track'>Track</Link></nav><Routes><Route path='/' element={<Home/>} /><Route path='/track' element={<Track/>} /></Routes></Router>); }
