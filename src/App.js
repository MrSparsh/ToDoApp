import React, { useState } from "react";


function ListItem(props) {
  return (
    <div>
      <div>
        {props.listItemData}
      </div>
      <button
        onClick={() => props.deleteItemClicked(props.index)}
      >
        Delete
      </button>
    </div>
  );
}

function ListBox(props) {
  return props.listItems.map((item,index) => (
    <ListItem 
      listItemData={item} 
      index={index} 
      deleteItemClicked={props.deleteItemClicked} 
    />
  ));
}
function AddItemBox(props) {
  return (
    <div>
      <input
        value={props.inputData}
        key="newItemData"
        onChange={props.inputDataChanged}
      />
      <button
        onClick={() => {
          props.addItemClicked(props.inputData);
        }}
      >
        Add{" "}
      </button>
    </div>
  );
}

function App() {
  const [listItems, setListItems] = useState([]);
  const [inputData, setInputData] = useState("");

  const deleteItemClicked = indexToDelete => {
    console.log(indexToDelete);
    setListItems(listItems.filter((item,index) => {return index!==indexToDelete}));
  };
  const addItemClicked = itemData => {
    console.log(itemData);
    setListItems(listItems.concat(itemData));
    setInputData("");
  };
  const inputDataChanged = event => {
    console.log(event.target.value);
    setInputData(event.target.value);
  };
  return (
    <div>
      <h1>To Do App</h1>
      <AddItemBox
        addItemClicked={addItemClicked}
        inputData={inputData}
        inputDataChanged={inputDataChanged}
      />
      <ListBox 
        listItems={listItems} 
        deleteItemClicked={deleteItemClicked} 
      />
    </div>
  );
}
export default App;