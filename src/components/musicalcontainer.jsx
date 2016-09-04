//Rename this Musical List
//console.log the name of the musical you click on here


import React from 'react';
import {connect} from 'react-redux';
import {fetchMusicals} from '../actions/index';
import Musical from './musical';

class MusicalsContainer extends React.Component {
  state={

    musicalSelected:null

    }

    componentWillMount(){ //this met
      this.props.fetchMusicals();
    }

    musicalSelection(name){

      this.setState({
        musicalSelected:name
      })
    }


    render() {
      console.log(this.state);
        return(
            <div className="container">
              <h3>Musical</h3>
              <div className="row">


                // put the untitled html page here
                //

              </div>



            </div>


        )

    }
}
  function mapStateToProps(state){ // map state to this.props
    return{
        musicals:state.musicals //conncected  to the componenet by the connect down in line 57
    }
  }

export default connect(mapStateToProps,{fetchMusicals})(MusicalsContainer); // reducers is first, actions is second, MusicalContainers is where it is happening
//now we can use the action with "this.props.fetchMusicals", we will have the action now
//if there are no actions or reducers, replace either one with null
