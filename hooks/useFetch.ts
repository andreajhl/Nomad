export const useFetch = async( url: string, config = {}) => {
  try {
    let resp = await fetch(`http://localhost:3000/api/${url}`, config);
    return await resp.json();

  } catch (error) {
    return error;
  };
};
