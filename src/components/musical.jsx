import React from 'react';
// so in line 8, make null your first paramenter because it's referring to the event. when we click we trigger a
//function that is inside the properties ( onMusicalClick is a property from the parent(MusicalsContainer))
class Musical extends React.Component {

    render() {

      return(
        <div className="musical col-lg-3" onClick={this.props.onMusicalClick.bind(null, this.props.info.title)}> //goes thru what you want in APi
        <p> {this.props.info.title} </p>
        <img className="pictures" src={this.props.info.picture}/>  //this.performers.images.small
        </div>
      )
    }





}


export default Musical;
