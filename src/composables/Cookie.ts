import Cookies from "js-cookie";

const useCookie = (id: string) => {
  const setCookie = (value: any, expires?: number = 365) => {
    return Cookies.set(id, value, { expires } );
  };
  const getCookie = () => {
    return Cookies.get(id);
  };

  return {
    setCookie,
    getCookie,
  };
};

export default useCookie;
