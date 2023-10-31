import React, { useEffect, useState } from 'react';

const Gettingalldatas = ({}) => {
  const [data, setData] = useState([]);

  /*useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://george1994grandmaster.github.io/postman-test/test.json');
        if (response.status === 200) {
          const jsonData = await response.json();
          console.log(jsonData)
          setData(jsonData.employees); // Assuming the "employees" array contains the data
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); // Call the fetchData function when the component mounts
  }, []);*/

  return (
    <div>
      <h1>Testing React App</h1>
      
    </div>
  );
}


export default Gettingalldatas;