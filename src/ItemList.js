import React from 'react'

const ItemList = (props) => {

  return(
    <div>
      {console.log("Data?", props.data)}
      {console.log("Error?", props.isError)}

      { props.isError && <p> Error fetching content </p> } 
      { props.data ? null : (<div> Data Loading </div>)}
      { props.data && 
        <div>
            {props.data.map(item => (
              <p key={item.id}>
                <a href={item.wikipedia}>{item.name}</a>
              </p>
            ))}
        </div>
      }
    </div>
  );
}
export default ItemList