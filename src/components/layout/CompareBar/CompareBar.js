import shortid from 'shortid';
import Button from '../../common/Button/Button';
import styles from './CompareBar.module.scss';
import React from 'react';

const CompareBar = ({ compareState }) => {
  //console.log('state: ', compareState);
  if (compareState !== undefined && compareState !== [])
    return (
      <div className={styles.compare}>
        <div className={styles.boxes}>
          {compareState.map(compares => (
            <div key={compares.id} className={styles.box} id={shortid()}>
              <h1 className={styles.delete}>X</h1>
              <img
                src={`../../../../public/images/products/${compares.name}.jpg`}
                alt={compares.name}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        <Button className={styles.btn}>Compare</Button>
      </div>
    );
  else return <div className={styles.invisible}></div>;
};

export default CompareBar;
