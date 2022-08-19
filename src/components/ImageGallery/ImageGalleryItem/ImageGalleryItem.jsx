import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  showLargeImage,
}) => {
  return (
    <li className={styles.ImageGalleryItem} key={id}>
      <img
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        srcset={largeImageURL}
        alt={tags}
        onClick={showLargeImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};
