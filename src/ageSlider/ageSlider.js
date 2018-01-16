import jQuery from 'jquery';
import 'jquery-ui/ui/widgets/slider';

import './ageSlider.scss';

const initialState = [18, 30];

jQuery('.age-slider')
  .each((index, elem) => {
    const sliderElem = jQuery(elem);

    sliderElem.slider({
      range: true,
      min: 16,
      max: 80,
      values: initialState,
      create() {
        jQuery('.ui-slider-handle', elem)
          .each((i, handle) => {
            const handleElem = jQuery(handle);

            handleElem.append(`<span class="age-slider__value-${i}">${initialState[i]}</span>`);
          });
      },
      slide(event, ui) {
        jQuery(`.age-slider__value-${ui.handleIndex}`, ui.handle)
          .text(ui.value);
      },
    });
  });
