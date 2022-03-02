import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
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
  //handleEditComment?: (para: any) => void;
  //saveEditedComment?: (para: any) => void;
  //reviewField?: string;
 // setReviewField?: any;

  //handleAddToWatchList?: any;
}
const CardLayout = ({showObject,linkName}: Props) => {
  const dataContext = React.useContext(DataContext);
  let unknownUrl = `${apiImg}`;


  return (
    <Grid  item margin={2}>
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

            <Grid container justifyContent='space-between' marginY={2}>
              <Grid item>
              <Typography fontWeight={"light"} variant="caption">
              <Link to={`/${linkName}/${showObject?.id}`}>Read more</Link>
            </Typography>
              </Grid>
              
              <Grid item>
              <Button size="small" onClick={() => dataContext?.handleAddToWatchList(showObject)} variant="outlined" startIcon={<AddIcon />}>
  watchlist
</Button>
 
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
