import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {

    return (
        <div className={styles.description}>
            <h1 >Ничего не найдено</h1>
            <br />
            <span> :( </span>
            <p>Попробуйте перейти по другой ссылке</p>
        </div>
    )
}

export default NotFoundBlock