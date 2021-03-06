import Axios from 'axios';

const parseResponse = res => res.data;

export const httpGet = (url, options) =>
  Axios.get(url, options).then(parseResponse);

export const httpPost = (url, data, options) =>
  Axios.post(url, data, options).then(parseResponse);

export const httpPut = (url, data, options) =>
  Axios.put(url, data, options).then(parseResponse);

export const httpDelete = (url, options) =>
  Axios.delete(url, options).then(parseResponse);

export const httpAuthGet = (url, options) =>
  httpGet(url, Object.assign({}, options, { withCredentials: true }));

export const httpAuthPost = (url, data, options) =>
  httpPost(url, data, Object.assign({}, options, { withCredentials: true }));

export const httpAuthPut = (url, data, options) =>
  httpPut(url, data, Object.assign({}, options, { withCredentials: true }));

export const httpAuthDelete = (url, options) =>
  httpDelete(url, Object.assign({}, options, { withCredentials: true }));
