import React from "react";
import { DataContext } from "../DataContext";
import { TvShowMovie } from "../types";
import { apiImg } from "../secret";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

const MyLikes = () => {
  const dataContext = React.useContext(DataContext);

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
                <Typography variant="body2" color="text.secondary">
                  {showObject?.release_date}
                </Typography>
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
