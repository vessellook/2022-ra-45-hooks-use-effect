const DETAILS_URL_TEMPLATE = process.env.REACT_APP_DETAILS_URL;

export const listEndpoint = process.env.REACT_APP_LIST_URL;
export const getDetailsEndpoint = (id) => {
  return DETAILS_URL_TEMPLATE.replace('{id}', '' + id);
};
