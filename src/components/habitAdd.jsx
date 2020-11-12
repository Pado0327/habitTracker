import React, { Component } from 'react';

class HabitAdd extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    event.target.habit.value = '';
  };
  render() {
    return (
      <>
        <form action="" className="add-from" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            type="text"
            id="habit"
            name="habit"
            placeholder="Habit"
          ></input>
          <button className="add">Add</button>
        </form>
      </>
    );
  }
}

export default HabitAdd;
