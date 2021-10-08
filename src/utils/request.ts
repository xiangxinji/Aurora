import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

function createService(options = {}) {
  const service = axios.create({});
  return service;
}

export type ResponseData<T = any> = {
  message: string,
  timestamp: number,
  result: T,
  code: number,
  _status: number,
  _headers: object,
}

export default function fetch<T>(configuration: AxiosRequestConfig) {
  const service = createService({});
  const p = new Promise<T>((resolve, reject) => {
    const t = service(configuration) as AxiosPromise<ResponseData<T>>;
    t.then((response) => {
      if (response.status === 200 && response.data.code === 0) {
        resolve(response.data.result);
      }
      reject(response.data);
    });
  });
  return p;
}

export function get(url: string, params ?: any) {
  return fetch({
    url,
    params,
    method: 'GET',
  });
}

export function post(url: string, data ?: any) {
  return fetch({
    url,
    data,
    method: 'POST',
  });
}
