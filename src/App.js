import "./App.css";
import { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading.js';
import Home from './containers/Home/Home'

let LoadingWithHome = Loading(Home);

function App() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  let orgData = [
    {id:101, name:'abc'},
    {id:102, name:'xyz'}
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {setLoading(false); setData(orgData)}, 2000);
  },[])
  return (
    <>
      <LoadingWithHome isLoading={loading} data={data} />
    </>
  );
}

export default App;
