import axios from 'axios';

// getPopularMovies
export async function getPopularMovies() {
  const api_Url = 'https://api.themoviedb.org/3';
  const api_Key = 'api_key=8e94b63eca076cd76f6a4bc17d9b4bc8';

  const resp = await axios.get(`${api_Url}/movie/popular?${api_Key}`);
  return resp.data.results;
}

// getUpcomingMovies
export async function getUpcomingMovies() {
  const api_Url = 'https://api.themoviedb.org/3';
  const api_Key = 'api_key=8e94b63eca076cd76f6a4bc17d9b4bc8';

  const resp = await axios.get(`${api_Url}/movie/upcoming?${api_Key}`);
  return resp.data.results;
}

// getPopularTV
export async function getTVMovies() {
  const api_Url = 'https://api.themoviedb.org/3';
  const api_Key = 'api_key=8e94b63eca076cd76f6a4bc17d9b4bc8';

  const resp = await axios.get(`${api_Url}/tv/popular?${api_Key}`);
  return resp.data.results;
}

// Rumantic movies
export async function familyMovies() {
  const api_Url = 'https://api.themoviedb.org/3';
  const api_Key = 'api_key=8e94b63eca076cd76f6a4bc17d9b4bc8';

  const resp = await axios.get(
    `${api_Url}/discover/movie?${api_Key}&with_genres=10749`,
  );
  return resp.data.results;
}

// Documentory
export async function documentries() {
  const api_Url = 'https://api.themoviedb.org/3';
  const api_Key = 'api_key=8e94b63eca076cd76f6a4bc17d9b4bc8';

  const resp = await axios.get(
    `${api_Url}/discover/movie?${api_Key}&with_genres=99`,
  );
  return resp.data.results;
}

// MovieDetails
export async function MovieDetails(id) {
  const api_Url = 'https://api.themoviedb.org/3';
  const api_Key = 'api_key=8e94b63eca076cd76f6a4bc17d9b4bc8';

  const resp = await axios.get(`${api_Url}/movie/${id}?${api_Key}`);
  return resp.data;
}
