import React from "react";
import { apiTvShowsKey } from "../secret";
import { apiImg } from "../secret";
import { useParams } from "react-router-dom";
import { TvShowMovie } from "../types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
const DetailedPageTvShows = () => {
  const { id } = useParams();
  const [details, setDetails] = React.useState<TvShowMovie | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${apiTvShowsKey}&language=en-US&page=4`
      );
      const data = await resp.json();
      const addNewProperty = {
        ...data,
        liked: false,
        title: data.name,
        release_date: data.first_air_date,
      };
      setDetails(addNewProperty);
    };

    fetchData();
  }, []);

  let unknownUrl = `${apiImg}`;
  return (
    <Grid item margin={2}>
      <Card sx={{ display: "flex", height: 440 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {details?.title}
            </Typography>
            <Typography component="div" variant="h5">
              {details?.release_date}
              <Typography component="div" variant="h5">
                {" "}
                IMDb Rating{" "}
                <StarRateIcon style={{ fill: "gold" }}></StarRateIcon>
                {details?.vote_average}
              </Typography>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {details?.overview}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          height="300"
          sx={{ width: 400 }}
          image={`${unknownUrl}${details?.backdrop_path}`}
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  );
};
export default DetailedPageTvShows;
