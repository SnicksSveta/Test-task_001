import 'jquery';
import 'bootstrap-sass';

import './style.scss';

import './ageSlider/ageSlider';
import './sorting/sorting';
import './filtering';

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

[(1, 2, 3)].map(v => v ** 2);
