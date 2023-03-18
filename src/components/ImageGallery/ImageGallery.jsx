import css from './ImageGallery.module.css';
import React, { Component } from "react";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Audio } from 'react-loader-spinner';

const ENDPOINT = `https://pixabay.com/api/?key=33283297-a16e2a82cec1eccc6e35e3730&page=1&image_type=photo&orientation=horizontal&per_page=12`

class ImageGallery extends Component {
    state = {
        searchArr: null,
        loading: false,
        error: null
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchName !== this.props.searchName) {

            this.setState({ loading: true, error: null })
            fetch(`${ENDPOINT}&q=${this.props.searchName}`)
                .then((res) => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        return Promise.reject(new Error('Something went wrong'))
                    }
                })
                .then(searchArr => {
                    this.setState({
                        searchArr: searchArr.hits.map(({ id, webformatURL, largeImageURL }) => {
                            return { id, webformatURL, largeImageURL }
                        })
                    })
                })
                .catch(error => this.setState({ error }))
                .finally(() => this.setState({ loading: false }));
        }
    }

    render() {
        const { loading, searchArr, error } = this.state;
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
                <ImageGalleryItem searchArr={searchArr} />
            </ul>
        );
    }

};

export default ImageGallery;