import "./App.css";
import City from "./containers/City/City";
import CityFun from "./containers/CityFun/CityFun";
import Country from "./containers/Country/Country";
import CountryFun from "./containers/CountryFun/CountryFun";

function App() {
  return (
    <>
      <Country />
      <City />
      <CountryFun />
      <CityFun />
    </>
  );
}

export default App;
