import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Animation from "./Animation/Animation";

function Gallery() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");

        // Check if response status is OK (status code 200)
        if (response.status !== 200)
          throw new Error("Network response was not ok");

        setProducts(response.data);

        console.log(response.data);
      } catch (error) {
        setError("Error fetching products.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Animation />; // Show loading spinner while fetching
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if any
  }

  // Check if products array is empty
  if (products.length === 0) return <div>No products available.</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="p-4">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {products.map((product) => (
            <div
              onClick={() => navigate(`/product/${product._id}`)}
              key={product._id}
              className="break-inside-avoid mb-4 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.imageUrl}
                alt={product.product_name}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Gallery;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Animation from "./Animation/Animation";

// function Gallery() {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   //
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/products");
//         if (!response.ok) throw new Error("Network response was not ok");

//         setProducts(response.data);
//         console.log(response.data);
//       } catch (error) {
//         setError("Error fetching products.");
//         setLoading(<Animation />);
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <Animation />; // Show loading spinner while fetching
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Display error message if any
//   }

//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:8080/products") // Replace with your API URL
//   //     .then((response) => setProducts(response.data))

//   //     .catch((error) => console.error("Error fetching products:", error));
//   // }, []);

//   if (!products) return <Animation />;

//   return (
//     <>
//       <div className="bg-gray-100 min-h-screen">
//         <main className="p-4">
//           <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
//             {products.map((product) => (
//               <div
//                 onClick={() => navigate(`/product/${product._id}`)}
//                 key={product._id}
//                 className="break-inside-avoid mb-4 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
//               >
//                 <img
//                   src={product.imageUrl}
//                   alt={product.product_name}
//                   className="w-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }

// export default Gallery;
