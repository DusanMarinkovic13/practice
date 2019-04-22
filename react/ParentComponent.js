import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from 'ChildComponent'

class ParentComponent extends Component{
    render() {
        return (
          <div className="app">
            <ChildComponent 
            title="Hello, World!"
            imgUrl = "https://images.wallpaperscraft.com/image/space_nebula_galaxy_136976_1280x720.jpg"
            />
          </div>
        );
      }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default ParentComponent