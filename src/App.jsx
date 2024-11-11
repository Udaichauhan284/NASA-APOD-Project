import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  
  const handleToggleModel = () => {
    setShowModel(!showModel);
  }

  useEffect(() => {
    const fetchData = async () => {
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_API_KEY}`;
      
      //initially we check in localStorage, this is how we cached our app
      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;

      const cachedData = localStorage.getItem(localKey);
      if(cachedData){
        try {
          const apiData = JSON.parse(cachedData);
          setData(apiData);
          console.log("Fetched From Cache Today");
          return;
        }catch(err){
          console.error("Error parsing cached data: ", err);
          localStorage.removeItem(localKey); //Remove invalid cache entry
        }
      }
      localStorage.clear(); //clear the localStorage


      try {
        const res = await fetch(url);
        if(!res.ok){
          throw new Error("Network response was not OK");
        }
        const apiData = await res.json();
        //setting in localStorage
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('Fetched from API today');
      }catch(err){
        console.error("Fetch Error", err.message);
      }
    };

    //call the fetching funtion
    fetchData();
  }, []);


  return (
    <>
    {data ? (<Main data = {data}/>) : (
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    {showModel && <SideBar data={data} handleToggleModel={handleToggleModel}/>}
    {data && <Footer data={data} handleToggleModel={handleToggleModel}/>}
    </>
  )
}

export default App;
