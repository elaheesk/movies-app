import { Grid, Typography } from "@mui/material";
import React from "react";
import CardLayout from "../components/CardLayout";
import { DataContext } from "../DataContext";
import { TvShowMovie } from "../types";

const TopRatedMovies = () => {
  const dataContext = React.useContext(DataContext);

  return (
    <Grid container direction="column">
      <Grid item marginBottom={4}>
        <Typography component="h1" fontWeight={500} variant="h4" gutterBottom>
          Top-rated movies
        </Typography>
      </Grid>
      <Grid item container>
        {dataContext?.topRatedMovies?.map((topMovie: TvShowMovie) => (
          <CardLayout
            key={topMovie.id}
            showObject={topMovie}
            linkName="topratedmovies"
            handleLike={dataContext?.likeTopRatedMovies}
            handleEdit={dataContext?.editTopRatedMovies}
            handleSave={dataContext?.saveTopRatedMovies}
          />
        ))}
      </Grid>
      <Grid item>footer pagination</Grid>
    </Grid>
  );
};

export default TopRatedMovies;
