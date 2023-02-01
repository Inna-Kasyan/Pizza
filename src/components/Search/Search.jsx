import styles from './Search.module.scss'
import React from 'react-router-dom'

const Search = ({ inputValue, setInputValue }) => {

    return (
        <div className={styles.search_root}>
            <svg className={styles.search_icon} fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" /></svg>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className={styles.search_form} placeholder='Поиск...' />
            {inputValue && <svg className={styles.close_icon} data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title /><path d="M8.25,0,32,23.75,55.75,0,64,8.25,40.25,32,64,55.75,55.75,64,32,40.25,8.25,64,0,55.75,23.75,32,0,8.25Z" data-name="&lt;Compound Path&gt;" id="_Compound_Path_" /></svg>}
        </div>
    )
}

export default Search

