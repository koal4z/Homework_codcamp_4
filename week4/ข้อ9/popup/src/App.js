import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Popup heading="This Is Important"></Popup>
    </div>
  );
}

class Popup extends React.Component {
  render() {
    return (
      <div style={styles.div}>
        <ul style={styles.ul}>
          <li>
            <h3>This Is Important</h3>
          </li>
          <li style={styles.liBorder}>
            <p>Here is some important text or error or something.</p>
          </li>
          <li style={styles.liInput}>
            <button style={styles.button}>Close</button>
          </li>
        </ul>
      </div>
    );
  }
}

const styles = {
  div: { width: "500px", position: "relative", left: "50px", top: "50px" },
  ul: {
    border: "0.5px solid #B0A8B9",
    listStyle: "none",
    padding: "0",
    textIndent: "15px"
  },
  liBorder: {
    borderTop: "0.5px solid #B0A8B9",
    borderBottom: "0.5px solid #B0A8B9"
  },
  liInput: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "15px 25px 15px 0"
  },
  button: {
    backgroundColor: "#FFFFFF",
    border: "0.5px solid #B0A8B9",
    borderRadius: "4px",
    padding: "5px 10px",
    fontSize: "15px"
  }
};

export default App;
