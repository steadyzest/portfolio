import React from "react";
// import { useHistory } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";

const BoxWhiteColor = {
  color: "#FFFFFF",
};
const BoxRedPinkColor = {
  color: "#FF407D",
};

const Home = () => {
  // let history = useHistory();

  // const MovePage = (path: string) => {
  //   history.push(`${path}`);
  // };

  return (
    <Grid container>
      {/* 개발자명 */}
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Box
            mt={3}
            pt={3}
            fontSize="1.3rem"
            fontWeight="bold"
            color="#33F1D8"
          >
            <Box>Developer</Box>
            <Box>KWON DONG HAK</Box>
          </Box>
        </Grid>
        <Grid item xs={2} />
      </Grid>

      {/* 문구1 */}
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs>
          <Box mt={4} pt={4} fontSize="4rem" fontWeight="bold">
            <Box
              style={{
                WebkitTextStroke: "1px white",
                WebkitTextFillColor: "rgba(255, 255, 255, 0.02)",
                opacity: 0.5,
              }}
            >
              Any Desing,
            </Box>
            <Box style={BoxWhiteColor}>I can make it!</Box>
          </Box>
        </Grid>
        <Grid item xs={3} />
      </Grid>

      {/* 문구2 */}
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs>
          <Box mt={3} pt={3} fontSize="1.5rem">
            <Box style={BoxWhiteColor}>어떤 디자인이든,</Box>
            <Box style={BoxWhiteColor}>제가 만들어 드릴게요!</Box>
          </Box>
        </Grid>
        <Grid item xs={3} />
      </Grid>

      {/* 마지막 문구 */}
      <Grid container>
        <Grid item xs={8} />
        <Grid item xs>
          <Box mt={3} pt={3} display="flex" flexDirection="row">
            <Box style={BoxRedPinkColor}>want to hire me?</Box>
            <Box style={BoxRedPinkColor}>ㅡㅡㅡㅡ</Box>
            <Box style={BoxRedPinkColor}>yes!</Box>
          </Box>
        </Grid>
        <Grid item xs={2} />
      </Grid>

      {/* <Grid>
        <Box>
          <Button onClick={() => MovePage("about")}>About</Button>
        </Box>
        <Box>
          <Button onClick={() => MovePage("portfolio")}>Portfolio</Button>
        </Box>
        <Box>
          <Button onClick={() => MovePage("skills")}>Skills</Button>
        </Box>
        <Box>
          <Button onClick={() => MovePage("contact")}>Contact</Button>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default Home;
