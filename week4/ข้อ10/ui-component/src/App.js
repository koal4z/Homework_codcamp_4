import React from 'react';
import './App.css';

function App() {
  return (
    <Table>
    </Table>
  );
}

const feature = ["Subwoogfe","Non-porous",
  "washable","Wings","Beveled Bezel","Seedless","everything"]
const listFeature = feature.map((num,idx)=> 
<li key={idx}>
   {num}
 </li>)

class Table extends React.Component {
  render() {
    return (
      <section>
        <div id="header">
        <h3>Phone Features</h3><span>...</span>
        </div>
        <ul>
          {listFeature}
        </ul>
        <button>Add a card...</button>
        
      </section>
    )
  }
}

export default App;

