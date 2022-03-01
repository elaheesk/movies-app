import React from "react";
import { DataContext } from "../DataContext";
import { TvShowMovie } from "../types";
import { Grid, Typography } from "@mui/material";
import CardLayout from "../components/CardLayout";

// interface Props {
//   handleAddToWatchList?: any;
// }
const MyWatchList = () => {
  const dataContext = React.useContext(DataContext);
  const [reviewField, setReviewField] = React.useState<string>("");
  //const [publishedComment, setPublishedComment] = React.useState("");

  const handleEditComment = (theEditedMovieOrShow: TvShowMovie) => {
    const newCombineMoviesTvShows = dataContext?.addedToWatchList?.map(
      (theMovieOrShow: TvShowMovie) => {
        if (theEditedMovieOrShow.id === theMovieOrShow.id) {
          return {
            ...theEditedMovieOrShow,

            editMode: !theMovieOrShow.editMode //editMode ändras till true
          };
        } else {
          return theMovieOrShow;
        }
      }
    );
    if (newCombineMoviesTvShows?.length)
  {  dataContext?.setCombineMoviesTvShows(newCombineMoviesTvShows)}
    
    //setPublishedComment("");
//hwsxksjx


    console.log("editModeChanged", newCombineMoviesTvShows);
  };

  const saveEditedComment = (theEditedMovieOrShow: TvShowMovie) => {
    const newCombineMoviesTvShows = dataContext?.addedToWatchList?.map(
      (theMovieOrShow: TvShowMovie) => {
        if (theEditedMovieOrShow.id === theMovieOrShow.id) {
          return {
            ...theEditedMovieOrShow,
            editMode: !theMovieOrShow.editMode, //editMode ändras till true
            writeComment: reviewField
          };
        } else {
          return theMovieOrShow;
        }
      }
    );
if (newCombineMoviesTvShows?.length)
{dataContext?.setCombineMoviesTvShows(newCombineMoviesTvShows)
    setReviewField("")}
    
  };

  return (
    <Grid>
      {dataContext?.addedToWatchList?.length ? (
        dataContext?.addedToWatchList.map((like: TvShowMovie) => (
          <CardLayout
            key={like.id}
            showObject={like}
            //handleAddToWatchList={handleAddToWatchList}
            handleEditComment={handleEditComment}
            saveEditedComment={saveEditedComment}
            //publishedComment={publishedComment}
            reviewField={reviewField}
            setReviewField={setReviewField}
          />
        ))
      ) : (
        <Typography variant="h6">Nothing added to watchlst</Typography>
      )}
    </Grid>
  );
};
export default MyWatchList;
