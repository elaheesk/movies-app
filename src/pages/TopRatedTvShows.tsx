import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { apiTvShowsKey } from "../secret";
import { TvShowMovie } from "../types";
import { DataContext } from "../DataContext";
import CardLayout from "../components/CardLayout";

const TopRatedTvShows = () => {
  const dataContext = React.useContext(DataContext);

  //React.useEffect(() => {
  //  const fetchData = async () => {
  //    const respTvShowsPopular = await fetch(
  //      `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiTvShowsKey}&page=4`,
  //    );
  //    const dataa = await respTvShowsPopular.json();

  //    const addNewProp = dataa.results.map((tvShowTop: TvShowMovie) => {
  //      return {
  //        ...tvShowTop,
  //        liked: false,
  //        title: tvShowTop.name,
  //        release_date: tvShowTop.first_air_date,
  //      };
  //    });
  //    if (addNewProp.length) {
  //      dataContext?.setTopRatedTvShows([...addNewProp]);
  //    }
  //  };
  //  fetchData();
  //}, []);
  return (
    <Grid container direction="column">
      <Grid item>
        {" "}
        <Typography>Top-rated tv-shows</Typography>
      </Grid>
      <Grid item container>
        {" "}
        {dataContext?.topRatedTvShows?.map((tvShow: TvShowMovie) => (
          <CardLayout
            key={tvShow.id}
            showObject={tvShow}
            linkName="topratedtvshows"
          />
        ))}
      </Grid>
      <Grid item>footer pagination</Grid>
    </Grid>
  );
};

export default TopRatedTvShows;