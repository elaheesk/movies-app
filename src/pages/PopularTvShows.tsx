import React from "react";
import { Grid, Typography } from "@mui/material";
import { TvShowMovie } from "../types";
import { DataContext } from "../DataContext";
import CardLayout from "../components/CardLayout";

const PopularTvShows = () => {
  const dataContext = React.useContext(DataContext);
  //React.useEffect(() => {
  //  const fetchData = async () => {
  //    const respTvShowsPopular = await fetch(
  //      `https://api.themoviedb.org/3/tv/popular?api_key=${apiTvShowsKey}&page=4`,
  //    );
  //    const dataa = await respTvShowsPopular.json();

  //    const addNewProp = dataa.results.map((tvShowPop: TvShowMovie) => {
  //      return {
  //        ...tvShowPop,
  //        liked: false,
  //        title: tvShowPop.name,
  //        release_date: tvShowPop.first_air_date,
  //      };
  //    });
  //    if (addNewProp.length) {
  //      dataContext?.setPopularTvShows([...addNewProp]);
  //    }
  //  };
  //  fetchData();
  //}, []);

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>Popular tv-shows</Typography>
      </Grid>
      <Grid item container>
        {dataContext?.popularTvShows?.map((tvShow: TvShowMovie) => (
          <CardLayout
            key={tvShow.id}
            showObject={tvShow}
            linkName="populartvshows"
          />
        ))}
      </Grid>
      <Grid item>footer pagination</Grid>
    </Grid>
  );
};

export default PopularTvShows;
