import React, {Component} from 'react';

// inharet properties from componet
class Author extends Component {
  //render
  render(){
    //what comes out of this renders
    return(
      <div>
        <em>{this.props.author}</em>
      </div>
    );
  }
}

export default Author;
