import React from "react";
import { Grid, Box } from "@material-ui/core";
import { HiStar, HiOutlineStar } from "react-icons/hi";

const SkillCard = () => {
  const data = [
    {
      name: "react",
      star: 3,
      content: "사용자 인터페이스를 만들기 위한 JS 라이브러리",
    },
  ];

  const renderImage = (name: string) => {
    return (
      <Box display="flex" justifyContent="center">
        <img
          src={process.env.PUBLIC_URL + `${name}.png`}
          alt=""
          width="64"
          height="64"
        />
      </Box>
    );
  };

  const renderStar = (star: number) => {
    const empty = 5 - star;

    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={{ color: "#fff" }}
      >
        <Box fontSize="1.5rem" mr={2}>
          숙련도
        </Box>
        <Box>
          {Array(star).fill(<HiStar color="#61DAFB" size="1.5rem" />)}
          {Array(empty).fill(<HiOutlineStar color="#61DAFB" size="1.5rem" />)}
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Box
        style={{
          background: "#000",
          color: "#fff",
          borderRadius: 35,
        }}
      >
        {data.map((item) => (
          <Grid container style={{ padding: 0, margin: 0 }}>
            <Grid container style={{ marginTop: "2rem" }}>
              <Grid item xs />
              <Grid item xs={8} style={{ fontSize: "3rem" }}>
                {item.name}
              </Grid>
              <Grid item xs={2}>
                {renderImage(item.name)}
              </Grid>
              <Grid item xs />
            </Grid>

            <Grid container style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Grid item xs />
              <Grid item xs={10}>
                {renderStar(item.star)}
              </Grid>
              <Grid item xs />
            </Grid>

            <Grid container style={{ marginBottom: "2rem" }}>
              <Grid item xs />
              <Grid item xs={10}>
                {item.content}
              </Grid>
              <Grid item xs />
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default SkillCard;
