import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAllCategories } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAllCategories(state),
  products: getNew(state),
});

export default connect(mapStateToProps)(NewFurniture);
