import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
console.log("API URL", import.meta.env);
const client = (() => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Accept: "application/json, text/plain, */*",
    },
  });
})();

export const request = async (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => {
    const { data } = response;
    return data;
  };

  const onError = function (error: AxiosError) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response,
    });
  };

  options.url = "http://" + import.meta.env.VITE_API_URL + "/" + options.url;
  console.log("Request", options);

  return client(options).then(onSuccess).catch(onError);
  // const response = await axios.get(options.url);
  // return onSuccess(response);
};
