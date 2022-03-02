import React from "react";
import { Grid, Typography } from "@mui/material";
import { TvShowMovie } from "../types";
import { DataContext } from "../DataContext";
import CardLayout from "../components/CardLayout";

const TopRatedTvShows = () => {
  const dataContext = React.useContext(DataContext);

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>Top-rated tv-shows</Typography>
      </Grid>
      <Grid item container>
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
