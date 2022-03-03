import React from "react";
import { Grid, Typography } from "@mui/material";
import { TvShowMovie } from "../types";
import { DataContext } from "../DataContext";
import CardLayout from "../components/CardLayout";

const PopularTvShows = () => {
  const dataContext = React.useContext(DataContext);

  return (
    <Grid container direction="column">
      <Grid item marginBottom={4}>
        <Typography component="h1" fontWeight={500} variant="h4" gutterBottom>
          Popular tv-shows
        </Typography>
      </Grid>
      <Grid item container>
        {dataContext?.popularTvShows?.map((tvShow: TvShowMovie) => (
          <CardLayout
            key={tvShow.id}
            showObject={tvShow}
            linkName="populartvshows"
            handleLike={dataContext?.likePopularTvShows}
            handleEdit={dataContext?.editPopularTvShows}
            handleSave={dataContext?.savePopularTvShows}
          />
        ))}
      </Grid>
      <Grid item>footer pagination</Grid>
    </Grid>
  );
};

export default PopularTvShows;
