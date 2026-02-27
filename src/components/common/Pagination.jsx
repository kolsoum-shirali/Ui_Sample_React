export default function Pagination({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const getVisiblePages = () => {
    const pages = [];
    if (currentPage > 1) {
      pages.push(currentPage - 1);
    }

    pages.push(currentPage);

    if (currentPage < pageCount) {
      pages.push(currentPage + 1);
    }

    if (currentPage > 2) {
      pages.unshift("...");
    }

    if (currentPage < pageCount - 1) {
      pages.push("...");
    }

    if (!pages.includes(1)) {
      pages.unshift(1);
    }

    if (!pages.includes(pageCount)) {
      pages.push(pageCount); // Last page
    }

    return [...new Set(pages)];
  };

  const visiblePages = getVisiblePages();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`p-3 rounded-full text-white ${currentPage === 1 ? "bg-gray-400" : "bg-green-600"}`}
      >
        <i className="icon-right-big"></i>
      </button>
      <div className="flex items-center">
        {visiblePages.map((page, index) => (
          <button
            key={index}
            onClick={() => {
              if (typeof page === "number") {
                onPageChange(page);
              }
            }}
            className={`rounded-full border border-gray-400/20 aspect-square w-10 h-10 mx-1 ${currentPage === page ? "font-bold text-xl bg-green-600 text-white" : "bg-white text-black"}`}
            disabled={typeof page === "string"}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === pageCount}
        className={`p-3 rounded-full text-white ${currentPage === pageCount ? "bg-gray-400" : "bg-green-600"}`}
      >
        <i className="icon-left-big"></i>
      </button>
    </div>
  );
}
