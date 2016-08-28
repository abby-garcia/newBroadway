import React from 'react';
import Musical from './musical';
import {connect} from 'react-redux'; // use {} to filter the module you need
import {fetchMusicals} from '../actions/index'; // you must export the function to then import here


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
                {
                  this.props.musicals.length == 0 ? <h1>No musicals :( </h1> :
                        this.props.musicals.map((musical, index)=> { //this is a for loop, it gave us an object with elements of musicals , it also gives us the postion of that object
                            return (
                                <Musical key={index} info={musical} onMusicalClick={this.musicalSelection.bind(this)}/> //instead of doing all the HTML, we are calling the compoenent that has all the HTML in it's render
                            )
                        })
                    }
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
