import { useEffect, useMemo, useState } from "react";

export function useCategories() {
  const categories = useMemo(
    () => [
      {
        id: 1,
        name: "Todos",
        category: ["mens-shoes", "mens-shirts", "tablets", "laptops"],
      },
      { id: 2, name: "Calzado para hombre", category: "mens-shoes" },
      { id: 3, name: "Polo para hombre", category: "mens-shirts" },
      { id: 4, name: "Tablets", category: "tablets" },
      { id: 5, name: "Laptops", category: "laptops" },
    ],
    []
  );
  return categories;
}

export function useRandomProductName() {
  const productNames = ["laptops", "tablets"];
  return useMemo(
    () => productNames[Math.floor(Math.random() * productNames.length)],
    []
  );
}

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => res.json())
      .then(({ products }) => {
        setProducts(products);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return products;
}

// export function useCategories() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products/category-list")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredCategories = data.filter(
//           (value) =>
//             value === "mens-shoes" ||
//             value === "mens-shirts" ||
//             value === "tablets" ||
//             value === "laptops"
//         );
//         setCategories(filteredCategories);
//       })
//       .catch((error) => console.error("Error fetching data: ", error));
//   }, []);
//   return categories;
// }

export function useFirstProductsByCategory(categories) {
  const [firstProducts, setFirstProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await Promise.all(
        categories.map((category) =>
          fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then(({ products }) => ({
              productCategory: products[0].category,
              thumbnail: products[0].thumbnail,
            }))
        )
      )
        .then((results) => {
          setFirstProducts(results);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchProducts();
  }, [categories]);
  return firstProducts;
}

export function useProductsByCategory(categories) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Realizar las solicitudes de manera concurrente
        const responses = await Promise.all(
          categories.map((category) =>
            fetch(`https://dummyjson.com/products/category/${category}`)
          )
        );

        // Procesar las respuestas y obtener productos únicos
        const productSet = new Map();
        const allProducts = await Promise.all(
          responses.map(async (response) => {
            const data = await response.json();
            return data.products;
          })
        );

        allProducts.flat().forEach((product) => {
          if (!productSet.has(product.id)) {
            productSet.set(product.id, product);
          }
        });

        // Establecer el estado con los productos únicos
        setProducts(Array.from(productSet.values()));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [categories]);
  return products;
}

export function useProductSearchByCategory(title) {
  const [searchedProductsByCategory, setSearchedProductsByCategory] = useState(
    []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch(`https://dummyjson.com/products/category/${title}`)
        .then((res) => res.json())
        .then(({ products }) => {
          setSearchedProductsByCategory(products);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
    fetchProducts();
  }, [title]);
  return searchedProductsByCategory;
}

export function useProductSearch(product) {
  const [searchedProduct, setSearchedProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch(`https://dummyjson.com/products/search?q=${product}`)
        .then((res) => res.json())
        .then(({ products }) => {
          setSearchedProduct(products);
        })
        .catch((error) => console.error("Error ftching data:", error));
    };
    fetchProducts();
  }, [product]);
  return searchedProduct;
}
