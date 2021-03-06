import eventTmp from './event';
import eventEditTmp from './event-edit';

import {EVENT_TYPE_LIST as eventList} from '../const';


const tripDaysTmp = `<ul class="trip-days">
  <li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">1</span>
      <time class="day__date" datetime="2019-03-18">MAR 18</time>
    </div>

    <ul class="trip-events__list">
      <li class="trip-events__item">
        ${eventEditTmp(eventList, `check-in`)}
      </li>
      <li class="trip-events__item">
        ${eventTmp()}
      </li>
      <li class="trip-events__item">
        ${eventTmp()}
      </li>
      <li class="trip-events__item">
        ${eventTmp()}
      </li>
    </ul>
  </li>
</ul>`;


export default tripDaysTmp;
