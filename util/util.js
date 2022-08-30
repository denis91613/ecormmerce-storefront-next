// Delete Product from List By Id
export const deleteProduct = (list, id) => {
  const filter = list.filter((item) => item.id !== id);
  return filter;
};

// Find Product Index From List
export const findProductIndex = (list, slug) => {
  const index = list.findIndex((item) => item.slug === slug);
  return index;
};
export const findProductIndexById = (list, id) => {
  const index = list.findIndex((item) => item.id === id);
  return index;
};

// Delete Category from List By Id
export const deleteCategory = (list, id) => {
  const filter = list.filter((item) => item.id !== id);
  return filter;
};

// Find Category Index From List
export const findCategoryIndex = (list, slug) => {
  const index = list.findIndex((item) => item.slug === slug);
  return index;
};
export const findCategoryIndexById = (list, id) => {
  const index = list.findIndex((item) => item.id === id);
  return index;
};
