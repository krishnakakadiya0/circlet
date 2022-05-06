import "./App.css";
import City from "./containers/Country/City";
import CityFun from "./containers/Country/CityFun";
import Country from "./containers/Country/Country";
import CountryFun from "./containers/Country/CountryFun";

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
