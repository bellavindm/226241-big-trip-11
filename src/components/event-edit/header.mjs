import {capitalize} from '../../utils';
import {POSTPOSITION as postposition} from '../../const';


const headerTmp = (eventList, eventType) =>`<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      ${eventList.map((group) => `<fieldset class="event__type-group">
        <legend class="visually-hidden">
          ${capitalize(group.name)}
        </legend>

        ${group.list.map((item) => `<div class="event__type-item">
          <input
            id="event-type-${item}-1"
            class="event__type-input  visually-hidden"
            type="radio"
            name="event-type"
            value="${item}"
            ${item === eventType ? `checked` : ``}
          >

          <label
            class="event__type-label  event__type-label--${item}"
            for="event-type-${item}-1"
          >
            ${capitalize(item)}
          </label>
        </div>`)
        .join(`\n`)}

      </fieldset>`)
      .join(`\n`)}
    </div>
  </div>

  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
      ${capitalize(eventType)} ${postposition[eventType]}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
    <datalist id="destination-list-1">
      <option value="Amsterdam"></option>
      <option value="Geneva"></option>
      <option value="Chamonix"></option>
    </datalist>
  </div>

  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">
      From
    </label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">
      To
    </label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
  </div>

  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
  </div>

  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Delete</button>

  <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked>
  <label class="event__favorite-btn" for="event-favorite-1">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
    </svg>
  </label>

  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</header>`;


export default headerTmp;
