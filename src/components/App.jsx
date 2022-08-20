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
        if (respons.data.hits.length === 0) {
          Notiflix.Notify.warning('Nothing found');
          return;
        }
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
    const value = event.currentTarget.elements.search.value;
    if (value.trim() === '') {
      Notiflix.Notify.warning('Please, enter a search term');
      return;
    }
    if (searchQuery !== value) {
      setNumberPage(1);
      setImageGallery([]);
    }
    setSearchQuery(value);
  };

  const handleShowLargeImage = event => {
    setLargeImgURL(event.currentTarget.srcset);
    setTagsImg(event.currentTarget.alt);
    setIsShow(true);
  };

  const handleCloseModal = () => {
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
      {(imageGallery.length !== 0) & !isLoading ? (
        <Button loadNextPage={handleNextPage} />
      ) : null}
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
