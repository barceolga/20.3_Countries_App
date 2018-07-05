import { createStore } from 'redux';
import reducers from '../reducers/index.js';
import DevTools from '../DevTools.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(fab,  faTrash)

const store = createStore(reducers, /*DevTools.instrument()*/);

export default store;
