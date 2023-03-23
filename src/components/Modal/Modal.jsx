import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, imgToShow }) {

    const handleKeydown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    }

    const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);

        return () => {
        window.removeEventListener('keydown', handleKeydown);
        };
    });

    return createPortal(
        <div className={css.Overlay} onClick={handleBackDropClick}>
            <div className={css.Modal}>
                <img width='1000' src={imgToShow} alt="" />
            </div>
        </div>,
        modalRoot
    );
};

Modal.propTypes = {
    onClose: PropTypes.func,
    imgToShow: PropTypes.string,
}