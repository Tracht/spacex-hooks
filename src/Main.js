import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect( () => {
    axios.get('https://api.spacexdata.com/v3/dragons/')
      .then((response) => {
        console.log('succesful api request', response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.log('error with the request', error)
        setIsError(true)
      })
  }, []);

  return(
    <div>
      { isError && <p> Error fetching content </p> } 
      { data ? null : (<div> Data Loading </div>)}
      { data && 
        <div>
            {console.log("Whats in here?", data)}
            {data.map(item => (
              <p key={item.id}>
                <a href={item.wikipedia}>{item.name}</a>
              </p>
            ))}
        </div>
      }
    </div>
  );
}
export default Main