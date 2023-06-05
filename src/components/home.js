import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SideBar from "./sideBar";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const [cards, setCards] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [page, setPage] = React.useState(1);

  const loadCards = async () => {
    try {
      const loginResponse = await fetch("https://rawg.io/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: "DUBootcamp23"
        }),
      });

      const { key } = await loginResponse.json();

      const API_URL = `https://api.rawg.io/api/games`;

      const response = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          token: `Token ${key}`,
        },
      });

      const data = await response.json();

      const fetchedCards = data.results.map((game) => ({
        id: game.id,
        name: game.name,
        image: game.background_image_additional,
        rating: game.rating,
        released: game.released,
        description: game.description,
      }));

      if (fetchedCards.length === 0) {
        setHasMore(false);
        return;
      }

      setCards((prevCards) => [...prevCards, ...fetchedCards]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error loading cards:", error);
    }
  };

  React.useEffect(() => {
   loadCards();
}, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box sx={{ display: "flex", bgcolor: "black" }}>
          {/* Content */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                bgcolor: "black",
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  New and Upcoming Games
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  This is a demo of a game hub. It will display new and upcoming
                  games.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained">Should be a dropdown?</Button>
                  <Button variant="outlined">Should be a dropdown?</Button>
                </Stack>
              </Container>
            </Box>

            <Container
              sx={{
                py: 8,
                backgroundColor: "black",
                padding: 0,
                display: "flex",
                justifyContent: "center",
              }}
              maxWidth="md"
            >
              <SideBar />
              <InfiniteScroll
                dataLength={cards.length}
                next={loadCards} // Pass the loadCards function as the next prop
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={<h4>No more cards to load</h4>}
              >
                <Grid container spacing={4} sx={{ bgcolor: "black" }}>
                  {cards.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={3}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardMedia
                          component="div"
                          sx={{
                            // 16:9
                            pt: "56.25%",
                            backgroundImage: `url(${card.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {card.name}
                          </Typography>
                          <Typography>{card.description}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </InfiniteScroll>
            </Container>
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: "black", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Whatever Erich wants to say lol
          </Typography>
          {/* Copyright component */}
        </Box>
        {/* End footer */}
      </main>
    </ThemeProvider>
  );
}

export default Home;
