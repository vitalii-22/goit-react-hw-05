import axios from 'axios';

const url =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGIzN2M1ZGZkMzM1YzIzMTE0MzE0MTM2YzQ3YWYyMiIsInN1YiI6IjY1ZmZlZjJhNzcwNzAwMDE3YzBkYTlhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.en9D-lK2J3eY46sTE3LD0bYfZqHmBwv9mMb4Z3xP5DI',
  },
};

export const requestMovies = async () => {
  const { data } = await axios.get(url, options);
  return data;
};

// export const requestProducts = async () => {
//   const { data } = await axios.get("https://dummyjson.com/products");
//   return data;
// };

// export const requestProductsByQuery = async (query) => {
//   const { data } = await axios.get(
//     `https://dummyjson.com/products/search?q=${query}`
//   );
//   return data;
// };

// export const requestProductsById = async (productId) => {
//   const { data } = await axios.get(
//     `https://dummyjson.com/products/${productId}`
//   );
//   return data;
// };
