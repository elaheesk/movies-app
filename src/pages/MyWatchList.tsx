import React from "react";
import { DataContext } from "../DataContext";
import { TvShowMovie } from "../types";
import { apiImg } from "../secret";
import {
  Grid,
  Typography,
  Card,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

const MyWatchList = () => {
  const dataContext = React.useContext(DataContext);
  const [reviewField, setReviewField] = React.useState<string>("");

  const handleEditComment = (theEditedMovieOrShow: TvShowMovie) => {
    const newLikedList = dataContext?.likedList?.map(
      (theMovieOrShow: TvShowMovie) => {
        if (theEditedMovieOrShow.id === theMovieOrShow.id) {
          return {
            ...theEditedMovieOrShow,
            editMode: !theMovieOrShow.editMode, //editMode ändras till true
          };
        } else {
          return theMovieOrShow;
        }
      }
    );
    if (newLikedList?.length) {
      dataContext?.setLikedList(newLikedList);
    }
    console.log("editModeChanged", newLikedList);
  };

  const saveEditedComment = (theEditedMovieOrShow: TvShowMovie) => {
    const newLikedList = dataContext?.likedList?.map(
      (theMovieOrShow: TvShowMovie) => {
        if (theEditedMovieOrShow.id === theMovieOrShow.id) {
          return {
            ...theEditedMovieOrShow,
            editMode: !theMovieOrShow.editMode, //editMode ändras till true
            writeComment: reviewField,
          };
        } else {
          return theMovieOrShow;
        }
      }
    );
    if (newLikedList?.length) {
      dataContext?.setLikedList(newLikedList);
      setReviewField("");
    }
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
export default MyWatchList;

// <CardLayout
//   key={like.id}
//   showObject={like}

//   handleEditComment={handleEditComment}
//   saveEditedComment={saveEditedComment}

//   reviewField={reviewField}
//   setReviewField={setReviewField}
// />
