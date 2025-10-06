type NewsPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function NewsPagination({
  currentPage,
  totalPages,
}: NewsPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center mt-12">
      <div className="inline-flex rounded-md shadow">
        <a
          href={currentPage > 1 ? `?page=${currentPage - 1}` : "#"}
          className={`py-2 px-4 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 text-gray-500 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-disabled={currentPage === 1}
        >
          <i className="fas fa-chevron-left"></i>
        </a>

        {pages.map((page) => (
          <a
            key={page}
            href={`?page=${page}`}
            className={`py-2 px-4 border ${
              currentPage === page
                ? "bg-primary border-primary text-white hover:bg-secondary"
                : "bg-white border-gray-300 hover:bg-gray-50 text-gray-700"
            }`}
          >
            {page}
          </a>
        ))}

        <a
          href={currentPage < totalPages ? `?page=${currentPage + 1}` : "#"}
          className={`py-2 px-4 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 text-gray-500 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-disabled={currentPage === totalPages}
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </nav>
  );
}
