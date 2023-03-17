import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import css from './App.module.css'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchName: ''
  }

  handleFormSubmit = (searchName) => {
    this.setState({ searchName }); 
  }

  render() {


    return (
      <div>
        <Searchbar
          onSubmit={this.handleFormSubmit}
        />
        <ImageGallery searchName={ this.state.searchName } />
        <ToastContainer autoClose={3000} />
        
      </div>
    );
  };

}

export default App;
