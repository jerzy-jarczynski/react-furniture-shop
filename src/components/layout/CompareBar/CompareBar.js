import Button from '../../common/Button/Button';
import styles from './CompareBar.module.scss';
import React, { useEffect, useState } from 'react';

const CompareBar = ({ compareState, action2 }) => {
  const [compare, setCompare] = useState(compareState);

  useEffect(() => {
    setCompare(compareState);
  }, [compareState]);
  const deleteProduct = id => {
    for (const i of compareState) {
      if (i.id === id) {
        const filtered = compareState.filter(compare => compare.id !== i.id);
        setCompare(filtered);
        action2(filtered);
      }
    }
  };

  if (compareState.length === 0) return <div className={styles.invisible}></div>;
  else if (compareState !== undefined && compareState !== [] && compareState !== '')
    return (
      <div className={styles.compare}>
        <div className={styles.boxes}>
          {compareState.map(compares => (
            <div
              key={compares.id}
              className={styles.box}
              id={compares.id}
              onClick={() => deleteProduct(compares.id)}
            >
              <h1 className={styles.delete}>X</h1>
              <img
                src={`${process.env.PUBLIC_URL}/images/products/${compares.name}.jpeg`}
                alt={compares.name}
                className={styles.image}
              />
            </div>
          ))}
        </div>
        <Button className={styles.btn}>Compare</Button>
      </div>
    );
};

export default CompareBar;
