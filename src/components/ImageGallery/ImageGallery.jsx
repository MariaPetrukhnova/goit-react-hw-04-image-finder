import css from './ImageGallery.module.css';
import React, { Component } from "react";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ENTRY = `https://pixabay.com/api/?key=33283297-a16e2a82cec1eccc6e35e3730&page=1&image_type=photo&orientation=horizontal&per_page=12`

class ImageGallery extends Component {
    state = {
    searchArr: null
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchName !== this.props.searchName) {

            fetch(`${ENTRY}&q=${this.props.searchName}`)
                .then(res => res.json())
                .then(searchArr => {
                    this.setState({
                        searchArr: searchArr.hits.map(({ id, webformatURL, largeImageURL }) => {
                            return { id, webformatURL, largeImageURL }
                        })
                    })
                });
        }
    }

    render() {
        return (
            <ul className={css.ImageGallery}>
                <ImageGalleryItem searchArr={this.state.searchArr} />
            </ul>
        );
    }

};

export default ImageGallery;