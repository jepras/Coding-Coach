import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>
          Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:
        </p>
        <button className="button is-danger is-outlined">Hello</button>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}

export default Home;
