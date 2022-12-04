export const key_string = "?api_key=0d7984bdfce142a6909773370e91ba9f";
export const main_url = "https://api.themoviedb.org/3";

let listUrl = {
  movies:main_url + "/discover/movie" + key_string + "&sort_by=popularity.desc",
  moviesNow: main_url + "/movie/now_playing" + key_string,
  moviesUpcoming: main_url + "/movie/upcoming" + key_string,
  moviesTop: main_url + "/movie/top_rated" + key_string,
  tvShows: main_url + "/discover/tv" + key_string + "&sort_by=popularity.desc",
  tvShowsToday: main_url + "/tv/airing_today" + key_string,
  tvOnAir: main_url + "/tv/on_the_air" + key_string,
  tvShowsTop: main_url + "/tv/top_rated" + key_string,
  people: main_url + "/person/popular" + key_string,
  search: main_url + "/search/multi" + key_string + "&query="
};

export default listUrl;
