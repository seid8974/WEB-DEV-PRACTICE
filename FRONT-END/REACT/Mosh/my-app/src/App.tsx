// import Message from './Message';
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["NEW TORK", "SAN FRANCISCO", "TOKYO", "LONDON", "PARIS"];

  let handleSelectItem = (item: string) => {
    console.log(item);
  };
  // return <div><Message /> </div>;
  return (
    <div>
      <ListGroup
        items={items}
        header={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
