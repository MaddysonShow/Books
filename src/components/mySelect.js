import React from 'react';
import styles from '../styles.module/mySelect.module.css'

const MySelect = ({options, ind}) => {
    return (
        <option value={options} defaultValue={ind === 0 ? true : false}>{options}</option>
    );
};

export default MySelect;
