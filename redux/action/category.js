// import fetch from 'isomorphic-unfetch'
// import filterCategoryList from "../../util/filterCategory";
import searchItemsByText from "../../util/searchItemsByText";
import * as Types from "../constants/actionTypes";

// Fetch Category fetchCategory
// export const fetchCategory = (searchTerm, url, filters) => async (dispatch) => {
export const fetchCategory = () => async (dispatch) => {
  try {
    // const sendRequest = await fetch(url);
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5MDUyNDY4NTY4IiwiaWF0IjoxNjU3MzY3NDIzLCJleHAiOjE2NTc0NTM0NjN9.fdXnVL10jQmwKlFet0p_8dTIXV7RInOKrEbc5kgTm1EI_ualGYWqrm5uPjQ3Sn56cYiE7L-8VqefZ_RMkwrMwQ",
      },
      body: {
        requrestfrom: "JlldMj1URG1rJi5ucDZ7Iw==",
      },
    };
    const sendRequest = await fetch(
      "http://onlineshop-2055809396.ap-south-1.elb.amazonaws.com/v1/auth/category/getallUsercategoryDetails",
      settings
    );
    const data = await sendRequest.json();

    console.log(data, "------------------------------------data");

    window.categorys = data;

    const searchedItems = searchItemsByText(searchTerm, data);
    const filteredList = filterCategoryList(searchedItems, filters);

    dispatch({
      type: Types.FETCHED_CATEGORY,
      payload: { categorys: filteredList },
    });
  } catch (error) {
    console.log(error);
  }
};

// Fetch More Category
export const fetchMoreCategory = (url, total) => async (dispatch) => {
  try {
    const sendRequest = await fetch(url);
    const data = await sendRequest.json();

    // const searchedItems = searchItemsByText(searchTerm,data)
    // const filteredList  = filterProductList(searchedItems,filters)

    dispatch({
      type: Types.FETCHED_MORE_CATEGORY,
      payload: { categorys: data, total },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategorys = () => async (dispatch) => {
  console.log("-------------------------getCategorys------------------");
  try {
    const settings = {
      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5MDUyNDY4NTY4IiwiaWF0IjoxNjU3MzY3NDIzLCJleHAiOjE2NTc0NTM0NjN9.fdXnVL10jQmwKlFet0p_8dTIXV7RInOKrEbc5kgTm1EI_ualGYWqrm5uPjQ3Sn56cYiE7L-8VqefZ_RMkwrMwQ",
      },
      body: {
        requrestfrom: "JlldMj1URG1rJi5ucDZ7Iw==",
      },
    };
    const sendRequest = await fetch(
      "http://onlineshop-2055809396.ap-south-1.elb.amazonaws.com/v1/auth/category/getallUsercategoryDetails",
      settings
    );
    const data = await sendRequest.json();

    console.log(data, "------------------------------------data");

    try {
      const fetchResponse = await fetch(
        `http://${location}:9000/api/sensors/`,
        settings
      );
      const data = await fetchResponse.json();
      return data;
    } catch (e) {
      return e;
    }

    //   window.categorys = data;

    //   const searchedItems = searchItemsByText(searchTerm, data);
    //   const filteredList = filterCategoryList(searchedItems, filters);

    dispatch({
      type: Types.FETCHED_CATEGORY,
      payload: { categorys: data },
    });
  } catch (error) {
    console.log(error);
  }
};
