import AbstractSmartComponent from './abstract-smart-component';
import {capitalize, formatDate, formatTime} from '../utils/utils';
import {POSTPOSITION as postposition} from '../const';


const eventDuration = (event) => {
  const milliseconds = new Date(event.dateTo) - new Date(event.dateFrom);

  let dd = Math.floor(new Date(milliseconds).getUTCHours() / 24);
  let hh = new Date(milliseconds).getUTCHours();
  let mm = new Date(milliseconds).getUTCMinutes();

  dd = dd ? `${dd}D` : ``;
  hh = hh ? `${hh}H` : ``;
  mm = mm ? `${mm}M` : `00`;

  return dd + hh + mm;
};

const tmp = (event) => `<li class="trip-events__item">
  <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${event.type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${capitalize(event.type)} ${postposition[event.type]} ${event.destination.name}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time
          class="event__start-time"
          datetime="${formatDate(event.dateFrom)}T${formatTime(event.dateFrom)}"
        >
          ${formatTime(event.dateFrom)}
        </time>
        &mdash;
        <time
          class="event__end-time"
          datetime="${formatDate(event.dateTo)}T${formatTime(event.dateTo)}"
        >
        ${formatTime(event.dateTo)}
        </time>
      </p>
      <p class="event__duration">
        ${eventDuration(event)}
      </p>
    </div>

    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${event.basePrice}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">Order Uber</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">20</span>
      </li>
    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;


export default class EventComp extends AbstractSmartComponent {
  constructor(event) {
    super();

    this._event = event;
  }

  getTmp() {
    return tmp(this._event);
  }

  setClickHandler(cb) {
    this.getElem().querySelector(`.event__rollup-btn`).addEventListener(`click`, cb);
  }
}
