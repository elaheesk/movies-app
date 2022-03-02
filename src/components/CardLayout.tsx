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
import { DataContext } from "../DataContext";
import { TvShowMovie } from "../types";
import { apiImg } from "../secret";

interface CardLayoutProps {
  showObject: TvShowMovie;
  linkName?: string;
}

const CardLayout: React.FC<CardLayoutProps> = ({ showObject, linkName }) => {
  const dataContext = React.useContext(DataContext);
  let unknownUrl = `${apiImg}`;

  return (
    <Grid item marginRight={4} marginBottom={4}>
      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`${unknownUrl}${showObject?.backdrop_path}`}
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
                    onClick={() =>
                      dataContext?.handleAddToWatchList(showObject)
                    }
                  />
                ) : (
                  <FavoriteIcon
                    style={{ fill: "gray" }}
                    onClick={() =>
                      dataContext?.handleAddToWatchList(showObject)
                    }
                  />
                )}
              </Grid>
            </Grid>
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
