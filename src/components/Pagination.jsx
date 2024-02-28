const Pagination = ({ page, products, fetchProducts }) => {
  const selectPageHandler = (selectedPage) => {
    fetchProducts(selectedPage);
  };
  return (

    <nav aria-label="Page navigation example">
  <ul class="flex items-center -space-x-px h-8 text-sm">
    <li>
      <span onClick={() => selectPageHandler(page - 1)} class={page > 1 ? "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer" : "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white pointer-events-none cursor-not-allowed"}>
        <span class="sr-only">Previous</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </span>
    </li>
    {products.map((_, i) => {
          return (
            <li
              key={i}
              id={i+1}
              class={page === (i+1) ? 'text-blue-600 cursor-pointer bg-blue-50 flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer'}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </li>
          );
        })}
    
    <li>
      <span onClick={() => selectPageHandler(page + 1)} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </span>
    </li>
  </ul>
</nav>



    // <div>
    //   <div className="pagination">
    //   <span
    //         onClick={() => selectPageHandler(page - 1)}
    //         className={page > 1 ? "" : "pagination__disable"}
    //       >
    //         First
    //       </span>

    //     {products.map((_, i) => {
    //       return (
    //         <span
    //           key={i}
    //           className={page === i + 1 ? "pagination__selected" : ""}
    //           onClick={() => selectPageHandler(i + 1)}
    //         >
    //           {i + 1}
    //         </span>
    //       );
    //     })}

    //     <span
    //       onClick={() => selectPageHandler(page + 1)}
    //       className={page < products.length ? "" : "pagination__disable"}
    //     >
    //       Last
    //     </span>
    //   </div>
    // </div>
  );
};
export default Pagination;
