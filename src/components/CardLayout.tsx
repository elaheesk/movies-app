import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
import { DataContext } from "../DataContext";
import { TvShowMovie } from "../types";
import { apiImg } from "../secret";
interface Props {
  showObject: TvShowMovie;
  linkName?: string;
  handleEditComment?: (para: any) => void;
  saveEditedComment?: (para: any) => void;
  reviewField?: string;
  setReviewField?: any;

  //handleAddToWatchList?: any;
}
const CardLayout = ({
  showObject,
  linkName,
  handleEditComment = () => {},
  saveEditedComment = () => {},
  reviewField,
  setReviewField,

}: Props) => {
  const dataContext = React.useContext(DataContext);
  let unknownUrl = `${apiImg}`;
  return (
    <Grid item margin={2}>
      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardActionArea>
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
            <Typography fontWeight={"light"} variant="caption">
              <Link to={`/${linkName}/${showObject?.id}`}>Read more</Link>
            </Typography>
            {!showObject?.liked ? (
              <Button
                onClick={() => dataContext?.handleAddToWatchList(showObject)}
              >
                Add to watchlist
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => dataContext?.handleAddToWatchList(showObject)}
                >
                  Remove from watchlist
                </Button>
                <>
                <Button onClick={() => handleEditComment(showObject)}>
                  Edit
                </Button>
                </>
                 {showObject?.writeComment}
                {showObject?.editMode && (
                  <CardContent>
                    <input
                      type="text"
                      value={reviewField}
                      onChange={(event) => {
                        setReviewField(event.target.value);
                      }}
                    />
                    <Button onClick={() => saveEditedComment(showObject)}>
                      save
                    </Button>
                  </CardContent>
                )}
              </>
            )}

            <Typography variant="body2" color="text.secondary">
              {showObject?.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default CardLayout;
