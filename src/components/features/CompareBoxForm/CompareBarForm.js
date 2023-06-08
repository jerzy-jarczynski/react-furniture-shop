import CompareBar from '../../layout/CompareBar/CompareBar';
import React from 'react';
import styles from './CompareBarForm.module.scss';
import PropTypes from 'prop-types';

const CompareBarForm = ({ compareState }) => {
  //console.log('Passed: ', compareState);
  return (
    <div className={styles.invisible}>
      <CompareBar compareState={compareState} />
    </div>
  );
};

export default CompareBarForm;

CompareBarForm.propTypes = {
  compareState: PropTypes.object,
};
