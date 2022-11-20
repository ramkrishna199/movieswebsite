import "./components/Index.css";
import Card from "./components/Card";
import Data from "./components/Data";

const mcars = (value) => {
  return (
    <Card
      key={value.id}
      ranking={value.ranking}
      title={value.title}
      year={value.year}
      distributor={value.distributor}
      amount={value.amount}
      img={value.img}
    />
  );
};

function App() {
  return (
    <>
      <h1 className="heading_style">Movies List</h1>
      {Data.map(mcars)}
    </>
  );
}

export default App;
