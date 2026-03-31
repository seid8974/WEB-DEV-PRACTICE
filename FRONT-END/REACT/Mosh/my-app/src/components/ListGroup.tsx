import type { MouseEvent } from "react";
import "./ListGroup.css";
import { useState } from "react";

interface Props {
    items: string[],
    header: string,
    onSelectItem: (item:string) => void
}

function ListGroup({items,header,onSelectItem}:Props) {
    const [ selectedIndex, setSelectedIndex ] = useState(-1);

//   let handleClick = (event:MouseEvent) => console.log(event);

  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item Found!</p>
  //       </>
  //     );
  //   }

  return (
    <>
      <h1>{header}</h1>
      {
        /* {items.length === 0 ? <p>No item Found!</p> : null */
        items.length === 0 && <p>No item Found!</p>
      }
      <ul className="list-group">
        {items.map((item, index) => (
        
          <li className={ selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={()=> { setSelectedIndex(index); onSelectItem(item) }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
