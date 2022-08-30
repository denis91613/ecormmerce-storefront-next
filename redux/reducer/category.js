import { deleteCategory, findCategoryIndexById } from "../../util/util";
import * as Types from "../constants/actionTypes";

// {items:[],filteredList:[]}

export default (state = { items: [] }, action) => {
  switch (action.type) {
    case Types.FETCHED_CATEGORY:
      return {
        ...state,
        items: [...action.payload.categorys],
      };

    case Types.FETCHED_MORE_CATEGORY:
      const mergeAllCategorys = [...state.items, ...action.payload.products];
      // console.log(mergeAllCategorys);
      const limit =
        action.payload.total && mergeAllCategorys.length > action.payload.total
          ? mergeAllCategorys.splice(0, action.payload.total)
          : mergeAllCategorys;

      return {
        ...state,
        items: [...limit],
      };

    case Types.ADD_CATEGORY:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case Types.DELETE_CATEGORY:
      return deleteCategory(state, action.payload.id);

    case Types.UPDATE_CATEGORY:
      const index = findCategoryIndexById(state, action.payload.category.id);
      state[index] = action.payload.category;

      return { ...state };

    default:
      return state;
  }
};
