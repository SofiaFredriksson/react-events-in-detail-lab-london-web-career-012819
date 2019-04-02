import React from 'react';


export default class CoordinatesButton extends React.Component {
  handleClick = (event) => {
     this.props.onReceiveCoordinates([event.clientY, event.clientX])
   }


   render () {
     return (
       <button onClick={this.handleClick}>
       Coordinates
       </button>
     )
   }
}
