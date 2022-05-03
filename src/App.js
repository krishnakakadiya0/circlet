import logo from "./logo.svg";
import "./App.css";

function App() {
  let data = [
    {
      id: 101,
      name: "Abacavir",
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true,
    },
    {
      id: 102,
      name: "Eltrombopag",
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true,
    },
    {
      id: 103,
      name: "Meloxicam",
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false,
    },
    {
      id: 104,
      name: "Allopurinol",
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true,
    },
    {
      id: 105,
      name: "Phenytoin",
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false,
    },
  ];
  let filterData = data.filter((v, i) => v.expiry >= 2022);
  let total = filterData.reduce((ass, v, i) => ass + v.price, 0);
  return (
    <>
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Expiry</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {filterData.map(({id, name, quantity, expiry, price}, i) => {
          return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{expiry}</td>
              <td>{price}</td>
              {i === 0 ? <td rowspan={filterData.length}>{total}</td> : null}
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
