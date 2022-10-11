/* eslint-disable quotes */
import React from "react";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const { data, error, isError, isLoading, isFetching } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  let content = null;

  if (isLoading && isFetching) {
    content = <Loader title="Loading songs..." />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }

  if (!isLoading && !isError && data.length === 0) content = <p>Data not found</p>;
  if (!isLoading && !isError && data.length > 0) {
    content = data?.map((song, i) => <SongCard key={song.key} song={song} i={i} />);
  }

  return (
    <div>
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select onChange={() => {}} value="" className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {" "}
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">{content}</div>
    </div>
  );
};

export default Discover;
