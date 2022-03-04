import React from "react";
import { DataContext } from "../DataContext";
import { TvShowMovie } from "../types";
import { apiImg } from "../secret";
import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const MyLikes = () => {
  const dataContext = React.useContext(DataContext);

  const removeLiked = (item: TvShowMovie) => {
    dataContext?.likePopularMovies(item);
    dataContext?.likeTopRatedMovies(item);
    dataContext?.likePopularTvShows(item);
    dataContext?.likeTopRatedTvShows(item);
  };

  let unknownUrl = `${apiImg}`;
  return (
    <Grid item>
      {!!dataContext?.likedList?.length &&
        dataContext?.likedList.map((showObject: TvShowMovie) => (
          <Grid item margin={2} key={showObject?.id}>
            <Card sx={{ maxWidth: 345, height: 650 }}>
              <CardMedia
                component="img"
                height="140"
                image={`${unknownUrl}${showObject?.backdrop_path}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {showObject?.title}
                </Typography>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="body1" color="text.secondary">
                      {showObject?.release_date}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button onClick={() => removeLiked(showObject)}>
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {showObject?.overview}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {showObject?.writeComment}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};
export default MyLikes;
