import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

//Where el is the DOM element you'd like to test for visibility
function isHidden(el) {
  var style = window.getComputedStyle(el);
  return (style.display === 'none')
}

class App extends Component {
  handleHeaderClick = (e) => {
    const headerEl = e.currentTarget;
    const bodyEl = headerEl.parentNode.querySelector('.toggle-body'); // querySelectAll
    const isVisible = !isHidden(bodyEl);
    bodyEl.style.display = (isVisible) ? 'none' : 'block';
  };
  render() {
    return (
      <div className="App">
        <h1>"Toggle" Component</h1>

        <Toggle>
          <div className="toggle-header" onClick={this.handleHeaderClick}>
            General
          </div>
          <div className="toggle-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Toggle>

        <Toggle>
          <div className="toggle-header" onClick={this.handleHeaderClick}>
            General
          </div>
          <div className="toggle-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Toggle>
      </div>
    );
  }
}

export default App;

const Toggle = styled.div`
  background: red;
  padding: 10px;
  border: solid 1px #ccc;
  border-radius: 5px;
  display: none
`;