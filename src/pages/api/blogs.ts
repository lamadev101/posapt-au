// import React, { useEffect } from "react";



// const blogsData = async () =>  {
//     try {
//       const url = 'https://develop.api.posapt.au/api/common/listWebsiteBlogCategory'; // Replace with your API endpoint URL
  
//       const sendData = {
//         Page: 1,
//         PageSize: 10
//       };
  
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(sendData)
//       });
  
//       if (response.ok) {
//         const responseData = await response.json();
//         console.log('Response:', responseData);
//       } else {
//         throw new Error('Request failed with status ' + response.status);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   export default blogsData;

  // Call the function to send the POST request
  // sendPostRequest();


// import react from 'react'

// interface sendData  {
//     Page: number;
//     PageSize: number;
// }
// const blogsData = async () => {
//     const sendData = {
//         "Page":1,
//         "PageSize":10
//      };
//     const response =  await fetch('https://develop.api.posapt.au/api/common/listWebsiteBlogCategory' ,  {
//      method:'POST',
//      headers: {
//         'Content-Type': 'application/json'
//       },
//      boby: JSON.stringify(sendData),
//     });

//     const data  =  await response.json();
//     console.log(data);
// }
