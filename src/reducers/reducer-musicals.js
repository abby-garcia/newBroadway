

export default function(state = [], action){
  if(action.type == "FETCH_MUSICALS" ){
      return action.payload.data.events;
  }
  else if(action.type =="FETCH_ONE_MUSICAL"){
      return action.payload.data;
  }
  else if(action.type =="PRACTICE"){
    return action.payload.data;
  }
  else{
    return state; 
  }

}
