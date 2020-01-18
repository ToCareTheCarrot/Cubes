import React from 'react';

export class AddForm extends React.Component {

  state={
    number: ""
  }

  render(){
    return (
      <>
      <form onSubmit={e => e.preventDefault()}>
        <input 
          name="numberOfCubes" 
          type="text"
          value={this.state.number}
          onChange={e => 
            this.setState({
              number: e.target.value
            })
          }
        />
        <button
          onClick={() => {
            this.props.onSave(this.state.number);
            console.log(this.state.number);
            // this.setState({ number: "" });
          }}
        >Start</button>
      </form>
      </>
    );
  }
}
