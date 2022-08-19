import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import styles from './App.module.css';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Button } from './Button';

const PIXABAY_KEY = '25809714-fb9ca043e2372697e049be88c';

const BASE_URL = 'https://pixabay.com/api/';

//export class App extends Component {
export const App = () => {
  const [imageGallery, setImageGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [numberPage, setNumberPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [largeImgURL, setLargeImgURL] = useState('');
  const [tagsImg, setTagsImg] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const respons = await axios.get(BASE_URL, {
          params: {
            key: PIXABAY_KEY,
            q: searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: numberPage,
          },
        });
        console.log(respons.data.hits);
        setImageGallery([...imageGallery, ...respons.data.hits]);
      } catch {
        Notiflix.Notify.failure("Sorry, it's error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [numberPage, searchQuery]);

  const handleNextPage = () => {
    setNumberPage(numberPage + 1);
  };

  const hundleOnSubmit = event => {
    event.preventDefault();
    console.log(event.currentTarget);
    const value = event.currentTarget.elements.search.value;
    if (searchQuery !== value) {
      console.log('searchQuery!==value');
      setNumberPage(1);
      setImageGallery([]);
    }
    setSearchQuery(value);
  };

  const handleShowLargeImage = event => {
    console.log('handleShowLargeImage');
    console.log(event.currentTarget.srcset);
    console.log(event.currentTarget.alt);
    setLargeImgURL(event.currentTarget.srcset);
    setTagsImg(event.currentTarget.alt);
    setIsShow(true);
  };

  const handleCloseModal = () => {
    console.log('handleCloseModal');
    setIsShow(false);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={hundleOnSubmit} />
      <ImageGallery
        imageGallery={imageGallery}
        showLargeImage={handleShowLargeImage}
      />
      {isLoading && <Loader />}
      {imageGallery.length !== 0 && <Button loadNextPage={handleNextPage} />}
      {isShow && (
        <Modal
          source={largeImgURL}
          alt={tagsImg}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
};
