
import React, {useState, useEffect} from 'react'

const Artworks = () => {
    const [data, setData] = useState([])

    const Getdata = async () => {
        try{
            const res = await fetch('http://localhost:3000/api/art2');
            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`)
            }
            const result = await res.json()
            setData(result)
        } catch (err) {
            console.log( err.message)
        }
    }
    useEffect(() =>{
        Getdata()
    },[])

  return (
    <div>
     {data.length > 0 ? (
        <div>
            {data.map((item, index) =>(
                <div key={index}>
                    <img src={item.src} alt="" />
                    <p>{item.name}</p>
                    <p>{item.inventor}</p>
                </div>
            ))}
        </div>
     ) : (
        <div>Loading...</div>
     )}
    </div>
  )
}

export default Artworks


// import React, { useState, useEffect } from 'react';

// const Artworks = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getData = async () => {
//     try {
//       const res = await fetch('http://localhost:3000/api/art2');
//       if (!res.ok) {
//         throw new Error(`HTTP ${res.status}`);
//       }
//       const result = await res.json();
//       setData(result);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

//   return (
//     <div>
//       {data.length > 0 ? (
//         data.map((item) => (
//           <div key={item._id}>
//             <img src={item.src || item.imageUrl} alt={item.name} width="200" />
//             <p>{item.name}</p>
//             <p>{item.inventor}</p>
//           </div>
//         ))
//       ) : (
//         <p>No artworks found</p>
//       )}
//     </div>
//   );
// };

// export default Artworks;

