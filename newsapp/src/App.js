// import React, { useRef } from 'react';

// const AddTwoNumbers = () => {
//   const num1Ref = useRef(null);
//   const num2Ref = useRef(null);

//   const handleAdd = () => {
//     const num1 = parseFloat(num1Ref.current.value) || 0;
//     const num2 = parseFloat(num2Ref.current.value) || 0;
//     const sum = num1 + num2;

//     // Display the result using an alert
//     alert(`Result: ${sum}`);
//   };

//   return (
//     <div>
//       <label>
//         Enter number 1:
//         <input type="text" ref={num1Ref} />
//       </label>
//       <br />
//       <label>
//         Enter number 2:
//         <input type="text" ref={num2Ref} />
//       </label>
//       <br />
//       <button onClick={handleAdd}>Add</button>
//     </div>
//   );
// };

// export default AddTwoNumbers;

// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  key={"general"}
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key={"business"}
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key={"entertainment"}
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key={"health"}
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="in"
                  category="health"
                />
              }
            />
            .
            <Route
              exact
              path="/science"
              element={
                <News
                  key={"science"}
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="in"
                  category="science"
                />
              }
            />
            .
            <Route
              exact
              path="/sports"
              element={
                <News
                  key={"sports"}
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="in"
                  category="sports"
                />
              }
            />
            .
            <Route
              exact
              path="/technology"
              element={
                <News
                  key={"technology"}
                  pageSize={this.pageSize} 
                  apiKey={this.apiKey}
                  country="in"
                  category="technology"
                />
              }
            />
            .
          </Routes>
        </Router>
      </div>
    );
  }
}
