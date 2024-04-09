import React, { useState, useEffect } from "react";
import ProductThumb from "./ProductThumb";
import listaFinal from "../resources/listaFinal.json";
import "./ListProducts.css";

const ListProducts = () => {
  const productsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState("");
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Filter products based on selected breadcrumb
  const filteredProducts = listaFinal.filter((product) =>
    selectedBreadcrumb ? product.breadcrumbs.includes(selectedBreadcrumb) : true
  );

  // Paginate filtered products
  const productsOnPage = filteredProducts.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
    scrollToTop();
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    setCurrentPage(Math.min(currentPage + 1, totalPages));
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage, selectedBreadcrumb]);

  // Function to handle breadcrumb click
  const handleBreadcrumbClick = (breadcrumb) => {
    setSelectedBreadcrumb(breadcrumb);
    setCurrentPage(1); // Reset to first page when breadcrumb is clicked
  };

  // Function to extract unique breadcrumbs from all products
  const extractUniqueBreadcrumbs = () => {
    const uniqueBreadcrumbs = new Set();
    listaFinal.forEach((product) => {
      product.breadcrumbs.forEach((crumb) => {
        uniqueBreadcrumbs.add(crumb);
      });
    });
    return Array.from(uniqueBreadcrumbs);
  };

  const uniqueBreadcrumbs = extractUniqueBreadcrumbs();

  return (
    <div>
      <h2>Catálogo</h2>
      <h4>Todos os produtos</h4>
      <div className="list-products">
        {productsOnPage.map((product, index) => {
          // Find the index of the current product in listaFinal
          const indexInListaFinal = listaFinal.findIndex((item) => item === product);

          return (
            <ProductThumb
              key={indexInListaFinal} // Use indexInListaFinal as the key
              chave={indexInListaFinal} // Use indexInListaFinal as the chave
              image={product.imagens[0]}
              breadcrumbs={product.breadcrumbs}
              name={product.nome}
              marca={product.marca}
              descricao={product.descricao}
            />
          );
        })}
      </div>
      <div>
        <button onClick={handlePrevPage}>Anterior</button>
        <button onClick={handleNextPage}>Próximo</button>
      </div>
      <div className="breadcrumbs-container"> {/* Add container for breadcrumbs */}
        <ul className="breadcrumbs-list"> {/* Add list class */}
          {uniqueBreadcrumbs.map((breadcrumb, index) => (
            <li
              key={index}
              onClick={() => handleBreadcrumbClick(breadcrumb)}
              className="breadcrumb-item" // Add class for styling
            >
              {breadcrumb}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListProducts;
