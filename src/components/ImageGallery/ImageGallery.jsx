import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Audio } from 'react-loader-spinner';
import shortid from 'shortid';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


const ENDPOINT = `https://pixabay.com/api/?key=33283297-a16e2a82cec1eccc6e35e3730`;

export default function ImageGallery({ searchName, toggleModal, imgPick, addImages, currentPage, searchArr, totalHits }) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false
        } else {
            setError(null);
            setLoading(true);
            fetch(`${ENDPOINT}&q=${searchName}&page=${currentPage.toString()}&image_type=photo&orientation=horizontal&per_page=12`)
                .then((res) => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        return Promise.reject(new Error('Something went wrong'))
                    }
                })
                .then(res => {
                    addImages(res.hits.map(({ id, webformatURL, largeImageURL }) => {
                        return { id, webformatURL, largeImageURL }
                    }));
                    totalHits(res.totalHits);
                })
                    .catch(error => setError(error))
                    .finally(() => setLoading(false));
        }
    }, [searchName, currentPage]);

    return (
        <ul className={css.ImageGallery}>
            {error && <li><h3>There are no matches with your request</h3></li>}
            {loading && <li><Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                $wrapperStyle
                $wrapperClass
            />
            </li>}
            {searchArr && searchArr.map(item => (
                <ImageGalleryItem
                    key={shortid.generate()}
                    id={item.id}
                    webformatURL={item.webformatURL}
                    largeImageURL={item.largeImageURL}
                    toggleModal={toggleModal}
                    imgPick={imgPick}
                />
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    searchName: PropTypes.string,
    toggleModal: PropTypes.func,
    imgPick: PropTypes.func,
    addImages: PropTypes.func,
    currentPage: PropTypes.number,
    searchArr: PropTypes.arrayOf(PropTypes.shape),
    totalHit: PropTypes.func,
}