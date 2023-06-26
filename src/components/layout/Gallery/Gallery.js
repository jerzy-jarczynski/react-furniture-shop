import React from 'react';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySlider';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='row no-gutters'>
              <div className={'col ' + styles.heading}>
                <h3>FURNITURE GALLERY</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <GallerySlider />
              </div>
            </div>
          </div>
          <div className='col'>
            <div
              className={styles.rightPhoto}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/bed-1.jpeg)`,
                backgroundSize: 'cover',
              }}
            >
              <div className={styles.photoInfo}>
                <h1>
                  <span>From</span> $35.40
                </h1>
                <h1>Bedroom Bed</h1>
                <button className={styles.shopNow}>Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
