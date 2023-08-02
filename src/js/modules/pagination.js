import Pagination from "tui-pagination";

export const pagination = () => {
  const options = {
    totalItems: 500,
    itemsPerPage: 25,
    visiblePages: 5,
  };

  const pagination = new Pagination("pagination", options);
};
