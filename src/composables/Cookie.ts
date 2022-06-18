import Cookies from "js-cookie";

const useCookie = (id: string) => {
  const setCookie = (value: any) => {
    return Cookies.set(id, value);
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
