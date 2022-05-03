import logo from "./logo.svg";
import "./App.css";

function App() {
  let data = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    }
  ];
  let filterData = data.filter((v, i) => v.status === true);
  let totalExpense = filterData.reduce((ass,v,i) => ass + v.salary + v.bonus, 0);
  return (
    <>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Bonus</th>
          <th>Total Salary</th>
          <th>Total Expense</th>
        </tr>
        {filterData.map(({name, age, salary, bonus}, i) => {
          let totalSalary = salary + bonus;
          return (
            <tr>
              <td>{name}</td>
              <td>{age}</td>
              <td>{salary}</td>
              <td>{bonus}</td>
              <td>{totalSalary}</td>
              {i===0?<td rowspan = {filterData.length}>{totalExpense}</td>:null}
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
