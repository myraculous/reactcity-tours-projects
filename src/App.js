import React, {Component} from 'react';

import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
import Detail from './components/Details/Detail';
class App extends Component {
  render(){
    return (
      <React.Fragment>
      <Navbar />
      <Detail />
      <TourList />
    </React.Fragment>
    );
  }
}

export default App;