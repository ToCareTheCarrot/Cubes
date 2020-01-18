import React from 'react';
import {Cube} from './Cube.jsx';
import {AddForm} from './AddForm.jsx';

function randomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addCube(
  cubes,
  cubeToAdd
) {
  // console.log(this.state.cubes);
  return [...cubes,cubeToAdd]
  
}

export class TableOfGame extends React.Component {

  state={
    cubes: []
  }

  nextId = 1;

  render(){
    return (
      <>
      < AddForm
        onSave={number => {
          for (let i=0; i<=number; i++){
            const cube = {
              id: this.nextId,
              color: randomColor()
            };

            this.setState({
              cubes: addCube(this.state.cubes, cube)
            });

            this.nextId++;
          }}
        }
      />
      <div className="table-of-game">
        {this.state.cubes.map(item => <Cube key={item.id} color={item.color}/>)}
      </div>
      </>
    );
  }
}
