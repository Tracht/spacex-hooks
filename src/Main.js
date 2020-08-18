import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './Main.css';

const Main = () => {

  // const [url, setUrl] = useState(
  //   'https://api.spacexdata.com/v3/dragons',
  // );
   // const [query, setQuery] = useState('dragons')
  const [loading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({ spacex: [] });
 

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      
      try {
        const result = await axios(
          // `${url}+${query}`, 
          'https://api.spacexdata.com/v3/dragons',
        );
        setData(result.data);
        console.log("help", result.data)
      }

      catch (error) {
        setIsError(true);
      } 

      setIsLoading(false);
    };

    fetchData();
  }, [setData], console.log("emergency",data));
 

  return(
        <div>
          
          { loading && <p> Content Loading </p> } 

          { isError && <p> Error fetching content </p> } 

          { !loading && 
            <div>
              {console.log("Whats in here?", data.hits)}

              {data.hits.map(item => (
                <p key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
                </p>
              ))}
            </div>
          }
    
        </div>
  );

}

export default Main;