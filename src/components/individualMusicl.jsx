import React from 'react';
import {connect} from 'react-redux'; // use {} to filter the module you need
import {fetchOneMusical} from '../actions/index'; // you must export the function to then import here


//componentWillMount will trigger BEFORE compoenent is rendered.
//state is all the musicals combined



class IndividualMusical extends React.Component {
    componentWillMount(){
      this.props.fetchOneMusical(); // we're calling the action here
    }

    render() {
      debugger;
      return(
        <div>
          <h3>Individual Musical</h3>
        {
          this.props.musical == [] ? <h1>No musicals </h1> : <h1> {this.props.musical.title}</h1>
        }
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
