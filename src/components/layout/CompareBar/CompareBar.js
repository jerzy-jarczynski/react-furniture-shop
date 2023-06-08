import Button from '../../common/Button/Button';
import styles from './CompareBar.module.scss';
import React from 'react';

const CompareBar = ({ compareState }) => {
  const toCompare = compareState;

  const deleteItem = () => {
    //const index = compareState.indexOf();
  };

  if (compareState !== undefined && compareState !== [])
    return (
      <div className={styles.compare}>
        <div className={styles.boxes}>
          {toCompare.map(compares => (
            <div key={compares.id} className={styles.box}>
              <h1 className={styles.delete} onClick={deleteItem()}>
                X
              </h1>

              <img
                src={`../../../../public/images/products/${compares.newCompare}.jpg`}
                alt={compares.newCompare}
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
