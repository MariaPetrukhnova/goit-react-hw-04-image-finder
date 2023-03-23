import css from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({onClick}) {
    const onLoadMore = (e) => {
        e.preventDefault();
        onClick(e);
    }

    return (
        <button type='button' className={css.Button} onClick={onLoadMore}>Load more</button>
    )
};
 
Button.propTypes = {
    onClick: PropTypes.func,
}