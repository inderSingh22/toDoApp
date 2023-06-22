// import { useState } from "react"

// const AddArray=()=>{
//     const [allElement,setAllElement]=useState([]);
//     const [elementName,setElementName]=useState();
//     const [filteredList, setFilteredList] = new useState(allElement);

    // const newElement=(e)=>{
    //     setElementName(e.target.value);
    // }

//     const addElements=(e)=>{
//         e.preventDefault();
//         if (elementName.trim() !== '') {
//         const newEle={id:Date.now(),text:elementName}
//         setAllElement([...allElement,newEle]);
//         setElementName('');
//         }
//     }

//     const filterBySearch = (event) => {
//         // Access input value
//         const query = event.target.value;
//         // Create copy of item list
//         var updatedList = [...allElement];
//         // Include all elements which includes the search query
//         updatedList = updatedList.filter((item) => {
//         //   return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//         return item.toLowerCase();
//         console.log("itemMM",item)
//         });
//         // Trigger render with updated values
//         setFilteredList(updatedList);
//       };
    
//     return(
//         <>
//         <form action="" onSubmit={addElements}>
//             <input type="text" onChange={newElement} value={elementName}/>
//             <input id="search-box" onChange={filterBySearch} placeholder="Search bar"/>
//             <button type="submit">Add element</button>
//         </form>
//         <ul>
//             {
//                 allElement?.map((element,key)=>{
//                    return  <li>{element.text}</li>
//                 })
//             }
//         </ul>
//        <ul>
//         {
//             filteredList.map((item,index)=>{
//                 console.log("items_items",item);
//                return <li key={index}>{item.text}</li>
//             })
//         }
//        </ul>
//         </>
//     )
// }
// export default AddArray;
// import "./styles.css";
import React, { useState } from "react";

export default function AddArray() {
//   const allElement = [
//     "Apple",
//     "Orange",
//     "Banana",
//     "Cherry",
//     "Milk",
//     "Peanuts",
//     "Butter",
//     "Tomato"
//   ];
const [allElement,setAllElement]=useState([]);
  const [filteredList, setFilteredList] = new useState(allElement);
  
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...allElement];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.text.toLowerCase().includes(filteredList.toLowerCase());
    console.log("item",item.text)
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };


    const [elementName,setElementName]=useState();
    
    const newElement=(e)=>{
        setElementName(e.target.value);
    }
    
        const addElements=(e)=>{
        e.preventDefault();
        if (elementName.trim() !== '') {
        const newEle={id:Date.now(),text:elementName}
        setAllElement([...allElement,newEle]);
        setElementName('');
        }
    }
  return (
    <div className="App">
        <form action="" onSubmit={addElements}>
            <input type="text" onChange={newElement} value={elementName}/>
            <button type="submit">Add element</button>
        </form>
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} value={filteredList}/>
      </div>
      <div id="item-list">
        <ol>
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}