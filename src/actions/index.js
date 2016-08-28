// actions
import axios from 'axios';


//getting musicals

export function fetchMusicals(){
    // do the call
      const request = axios.get("https://api.seatgeek.com/2/events?geoip=98.213.245.205&range=12mi");

    // return the action
      return{ // this is how you create an action!
        type:"FETCH_MUSICALS",
        payload: request
      }


}

export function fetchOneMusical(){
    // do the call
      const request = axios.get("https://api.seatgeek.com/2/events/801255");

    // return the action
      return{ // this is how you create an action!
        type:"FETCH_ONE_MUSICAL", // we're just using the name to tell us what to do/ tells us what action it is
        payload: request
      }


}

export function practice(){
    // do the call
      const request = axios.get("https://api.seatgeek.com/2/events?performers.id=3");

    // return the action
      return{ // this is how you create an action!
        type:"PRACTICE", // we're just using the name to tell us what to do/ tells us what action it is
        payload: request
      }


}
