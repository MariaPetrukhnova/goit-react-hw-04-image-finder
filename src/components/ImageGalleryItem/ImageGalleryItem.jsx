import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ searchArr }) => {
    if (searchArr) {
        return (
        <>
            {searchArr.map(item => (
                <li className={css.ImageGalleryItem} key={item.id}>
                    <img className={css.ImageGalleryItem_image} src={item.webformatURL} alt={item.id} />
                </li>))
            }
        </>
        )
    }

};

export default ImageGalleryItem;