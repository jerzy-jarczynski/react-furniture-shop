import Button from '../../common/Button/Button';
import styles from './CompareBar.module.scss';
import React, { useEffect, useState } from 'react';

const CompareBar = ({ compareState, action2, isButtonClicked }) => {
  // eslint-disable-next-line no-unused-vars
  const [compare, setCompare] = useState(compareState);

  useEffect(() => {
    setCompare(compareState);
  }, [compareState]);

  const deleteProduct = id => {
    const filtered = compareState.filter(compare => compare.id !== id);
    const updateClicked = { ...isButtonClicked };
    delete updateClicked[id];
    action2(filtered);
    setCompare(filtered);
  };

  const imageExtensions = ['.jpeg', '.jpg', '.png', '.bmp', '.svg', '.webp'];

  const findImageExtension = name => {
    const matching = imageExtensions.find(extension => {
      const path = `${process.env.PUBLIC_URL}/images/products/${name}${extension}`;
      return path;
    });
    if (matching) {
      return `${process.env.PUBLIC_URL}/images/products/${name}${matching}`;
    }
  };

  if (compareState !== undefined && compareState !== [] && compareState !== '') {
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
              <div className={styles.delete}>
                <p>X</p>
              </div>
              <img
                src={findImageExtension(compares.name)}
                alt={compares.name}
                className={styles.image}
              />
            </div>
          ))}
        </div>
        <Button className={styles.btn}>Compare</Button>
      </div>
    );
  } else return <div className={styles.invisible} />;
};

export default CompareBar;
