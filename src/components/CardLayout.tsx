import React from "react";
import { Link } from "react-router-dom";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import {
  Card,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { TvShowMovie } from "../types";
import { apiImg } from "../secret";

interface CardLayoutProps {
  showObject: TvShowMovie;
  linkName?: string;
  handleLike: any;
  handleEdit?: any;
  handleSave?: any;
}

const CardLayout: React.FC<CardLayoutProps> = ({
  showObject,
  linkName,
  handleLike,
  handleEdit,
  handleSave,
}) => {
  const [reviewField, setReviewField] = React.useState<string>("");

  const handleSaveComment = (selectedObject: any) => {
    handleSave(selectedObject, reviewField);
    setReviewField("");
  };

  const handleEditComment = (selectedObject: any) => {
    if (selectedObject?.writeComment) {
      setReviewField(selectedObject.writeComment);
    }
    handleEdit(selectedObject);
  };

  return (
    <Grid item marginRight={4} marginBottom={4}>
      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardMedia
          component="img"
          height="140"
          image={`${apiImg}${showObject?.backdrop_path}`}
          alt="pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {showObject?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {showObject?.release_date}
          </Typography>

          <Grid container justifyContent="space-between" marginY={2}>
            <Grid item>
              <Typography fontWeight={"light"} variant="caption">
                <Link to={`/${linkName}/${showObject?.id}`}>Read more</Link>
              </Typography>
            </Grid>
            <Grid item>
              {showObject?.liked ? (
                <FavoriteIcon
                  style={{ fill: "red" }}
                  onClick={() => handleLike(showObject)}
                />
              ) : (
                <FavoriteIcon
                  style={{ fill: "gray" }}
                  onClick={() => handleLike(showObject)}
                />
              )}
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container direction="column">
            <Grid item>
              <Button
                disableElevation
                size="small"
                onClick={() => handleEditComment(showObject)}
              >
                Leave a comment
              </Button>
            </Grid>
            <Grid item>
              {!reviewField && (
                <Typography variant="body1" color="text.secondary">
                  {showObject?.writeComment}
                </Typography>
              )}
            </Grid>
            {showObject?.editMode && (
              <React.Fragment>
                <Grid item>
                  <input
                    type="text"
                    value={reviewField}
                    onChange={(event) => {
                      setReviewField(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button onClick={() => handleSaveComment(showObject)}>
                    save
                  </Button>
                </Grid>
              </React.Fragment>
            )}
            <Grid item></Grid>
            <Grid item></Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CardLayout;
