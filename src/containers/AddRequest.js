import React, { Component } from "react";
import { connect } from "react-redux";
import { addRequest } from "../actions";

class AddRequest extends Component {
  state = {
    tech: "",
    name: ""
    
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addRequest(this.state);
    console.log(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add request</h5>
          <div className="input-field">
            <label htmlFor="name">name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="tech">tech</label>
            <input type="text" id="tech" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Create request
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // set addRequest props to response to addRequest action
    addRequest: newRequest => dispatch(addRequest(newRequest))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddRequest);
