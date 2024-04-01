import { useState, useEffect, useRef } from "react";
import Header from "@component/header";
import Card from "@ui/card";
import CardGrid from "@ui/card-grid";
import Loader from "@ui/loader";
import Error from "@ui/error";
import Footer from "@component/footer";



const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
   


    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const resalot = await response.json();
        setData(resalot);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })()
  }, [])
  return (
    
    <div className="container mx-auto my-[150px]">
       <Header/>
      {
        loading ? <Loader/> : <CardGrid>
        {
          data.length? data.map((el) => {
            return <Card key={el.id} data={el}/>
          }):<Error error={error}/>
        }
      </CardGrid>
      }
      <Footer/>
    </div>
    
  );

  
};

export default App;