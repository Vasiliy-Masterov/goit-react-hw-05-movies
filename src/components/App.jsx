import React, { Component } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import styles from './App.module.css';
//import { Searchbar } from './Searchbar';
//import { ImageGallery } from './ImageGallery';
//import { Loader } from './Loader';
// import { Modal } from './Modal';
//import { Button } from './Button';

const PIXABAY_KEY = '25809714-fb9ca043e2372697e049be88c';
//const PIXABAY_KEY = '25716133-5af1cc1f28b9664f0c877d305';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    imageGallery: [],
    searchQuery: '',
    pageLimit: 12,
    numberPage: 1,
    isLoading: false,
  };

  async componentDidUpdate() {
    const { searchQuery, pageLimit, numberPage, isLoading } = this.state;
    console.log(numberPage);
    console.log(isLoading);

    try {
      const respons = await axios.get(BASE_URL, {
        params: {
          key: PIXABAY_KEY,
          q: searchQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: pageLimit,
          page: numberPage,
        },
      });
      console.log(respons);
    } catch {
      Notiflix.Notify.failure("Sorry, it's error");
    } finally {
      if (isLoading === true) {
        this.setState({ isLoading: false });
      }
      console.log(isLoading);
    }
  }

  handleNextPage = () => {
    console.log(this.state.isLoading);
    this.setState(prev => ({
      isLoading: true,
      numberPage: prev.numberPage + 1,
    }));

    console.log(this.state.isLoading);
  };

  render() {
    // const { imageGallery, isLoading } = this.state;
    return (
      <div className={styles.App}>
        <span>Hello</span>
      </div>
    );
  }
}

//{isLoading && <Loader />}
//<Button loadNextPage={this.handleNextPage}/>

// handleNextPage=()=>{
//   this.setState(prev=>({numberPage:prev.numberPage+1}));
// };
