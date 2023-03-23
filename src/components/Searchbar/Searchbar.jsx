import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Searchbar ({ onSubmit }) {

    const [searchName, setSearchName] = useState('');
    
    const handleInput = (e) => {
        const request = e.currentTarget.value.toLowerCase();
        setSearchName(request);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchName.trim() === '') {
            toast.error('Request is empty!');
            return;
        }

        onSubmit(searchName);
        setSearchName('');
    };

    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={css.SearchForm_button}>
                    <FcSearch style={{width:"2em", height:"2em"}}/>
                    <span className={css.SearchForm_button_label}>Search</span>
                </button>
                <input
                    className={css.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchName}
                    onChange={handleInput}
                />
            </form>
        </header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}
