import css from './ImageGalleryItem.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ id, largeImageURL, webformatURL, toggleModal }) {

    const elClick = (e) => {
        toggleModal(largeImageURL);
    }

    return (
        <>
            <li className={css.ImageGalleryItem} key={shortid.generate()} onClick={elClick}>
                <img className={css.ImageGalleryItem_image} src={webformatURL} alt={id} srcSet={largeImageURL} />
            </li>
        </>
    )
}

ImageGalleryItem.propTypes = {
    toggleModal: PropTypes.func,
    id: PropTypes.number,
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
}