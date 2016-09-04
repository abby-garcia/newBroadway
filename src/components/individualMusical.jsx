//text box and button

import React from 'react';
import {connect} from 'react-redux'; // use {} to filter the module you need
import {fetchOneMusical} from '../actions/index'; // you must export the function to then import here


//componentWillMount will trigger BEFORE compoenent is rendered.
//state is all the musicals combined



class IndividualMusical extends React.Component {
    componentWillMount(){

      // you will be calling the Instagram action
      // action --> index.js... call the instagram API there





    }

    render() {
      debugger;
      return(
        <div>
          <h3>{this.props.params.musicalname}</h3> //console.log this to see if this works
          // check if props.params or params.props makes more sense
          //STEP TWO
          // link with paramenter     to get name
          //this.props.params.musicalname


        </div>
      )

    }
}

function mapStateToProps(state){ // map state to this.props
  return{
      musical:state.musicals //conncected  to the componenet by the connect down in line 57
  }
}

export default connect(mapStateToProps,{fetchOneMusical})(IndividualMusical); // reducers is first, actions is second, MusicalContainers is where it is happening
//now we can use the action with "this.props.fetchMusicals", we will have the action now
//if there are no actions or reducers, replace either one with null
