import school from '../src/school';
import axios from 'axios';

const mapEndpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
const apiKey = 'AIzaSyBGuYmI_irONfHc4CHnwo5wqWN1sa6tHUQ';

const generateAddressString = (location) => {
  return `${location.street.split(' ').join('+')},${location.suburb.split(' ').join('+')},${location.state.split(' ').join('+')}`;
}
/**
 * Calculate distance and duration based on the location passed in
 *  and the school location.
 *
 * @param location
 * @returns {Promise<{distance: *, duration: *}>}
 */
export const travelCalculator = async (location) => {
  const options = {
    params: {
      origins: generateAddressString(school.location),
      destinations: generateAddressString(location),
      units: 'metric',
      mode: 'driving',
      key: apiKey,
      json: true,
    }
  };
  const response = await axios.get(mapEndpoint, options);
  const {
    rows: [{
      elements: [{
        distance: {
          text: distance
        },
        duration: {
          text: duration
        }
      }]
    }]
  } = response.data;
  
  return { distance, duration };
}

