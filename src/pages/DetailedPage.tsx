import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography
  } from "@mui/material";
  import React from "react";
  import { apiMoviesKey } from "../secret";
  import { apiImg } from "../secret";
  import { useParams } from "react-router-dom";
 
  import { TvShowMovie } from "../types";
  
  const DetailedPage = () => {
    const { id } = useParams();
  
    
    const [details, setDetails] = React.useState<TvShowMovie | null>(null);
  
  
    React.useEffect(() => {
      const fetchData = async () => {
        const resp = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiMoviesKey}&language=en-US`
        );
        const data = await resp.json();
        const addNewProperty = { ...data, liked: false };
        setDetails(addNewProperty);
       
      };
  
      fetchData();
    }, []);
  
    let unknownUrl = `${apiImg}`;
    return (
      <Grid item margin={2}>
        <Card sx={{ maxWidth: 345, height: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`${unknownUrl}${details?.backdrop_path}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {details?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {details?.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  };
  export default DetailedPage;
  