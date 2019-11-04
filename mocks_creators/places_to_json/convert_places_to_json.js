/* eslint-disable no-nested-ternary */
const fs = require('fs');
const places = require('./places_entry.json');

const states = places.reduce(
  (acc, { state, city, center }) => ({
    ...acc,
    [state]: {
      ...acc[state],
      [city]: acc[state]
        ? acc[state][city]
          ? [...acc[state][city], center]
          : [center]
        : [center],
    },
  }),
  [],
);

const placesJSON = Object.keys(states).map(state => {
  const stateObj = states[state];
  const cities = Object.keys(stateObj).map(city => ({
    city,
    centers: stateObj[city],
  }));
  return {
    state,
    cities,
  };
});

fs.writeFileSync('./places.json', JSON.stringify(placesJSON, null, 2));
