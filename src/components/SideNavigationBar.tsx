import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { Grid, Skeleton, Typography, Badge, Link } from "@mui/material";
import List from "@mui/material/List";
import { DataContext } from "../DataContext";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

const SideNavigationBar = () => {
  const dataContext = React.useContext(DataContext);
  return (
    <Grid>
      <List sx={{ width: "100%", height: 600, paddingLeft: 3 }}>
        <ListItem>
          <Link component={RouterLink} to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="popularmovies">
            <ListItemText primary="Popular Movies" />
          </Link>
        </ListItem>

        <ListItem>
          <Link component={RouterLink} to="topratedmovies">
            <ListItemText primary="Top-rated Movies" />
          </Link>
        </ListItem>

        <ListItem>
          <Link component={RouterLink} to="populartvshows">
            <ListItemText primary="Popular Tv-shows" />
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="topratedtvshows">
            <ListItemText primary="Top-rated-tvshows" />
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="mywatchlist">
            <ListItemText primary="Like" />
          </Link>
          {dataContext?.addedToWatchList.length ? (
            <Badge
              badgeContent={dataContext?.addedToWatchList.length}
              color="primary"
            >
              <FavoriteIcon style={{ fill: "red" }} fontSize="small" />
            </Badge>
          ) : (
            <Badge
              badgeContent={dataContext?.addedToWatchList.length}
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
