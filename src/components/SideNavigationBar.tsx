import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { Grid, Badge, Link } from "@mui/material";
import List from "@mui/material/List";
import { DataContext } from "../DataContext";
import ListItem from "@mui/material/ListItem";

const SideNavigationBar = () => {
  const dataContext = React.useContext(DataContext);
  return (
    <Grid>
      <List sx={{ width: "100%", height: 600, paddingLeft: 3 }}>
        <ListItem>
          <Link component={RouterLink} to="/">
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="popularmovies">
            Popular Movies
          </Link>
        </ListItem>

        <ListItem>
          <Link component={RouterLink} to="topratedmovies">
            Top-rated Movies
          </Link>
        </ListItem>

        <ListItem>
          <Link component={RouterLink} to="populartvshows">
            Popular Tv-shows
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="topratedtvshows">
            Top-rated-tvshows
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="mywatchlist">
            Liked
          </Link>
          {dataContext?.likedList?.length ? (
            <Badge
              badgeContent={dataContext?.likedList?.length}
              color="primary"
            >
              <FavoriteIcon style={{ fill: "red" }} fontSize="small" />
            </Badge>
          ) : (
            <Badge
              badgeContent={dataContext?.likedList?.length}
              color="primary"
            >
              <FavoriteIcon style={{ fill: "gray" }} fontSize="small" />
            </Badge>
          )}
        </ListItem>
      </List>
    </Grid>
  );
};
export default SideNavigationBar;
