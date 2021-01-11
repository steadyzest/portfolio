import React from "react";
import { Grid, Box } from "@material-ui/core";

const BoxWhiteColor = {
  color: "#FFFFFF",
};
const BoxRedPinkColor = {
  color: "#FF407D",
};

const Contact = () => {
  return (
    <Grid container>
      {/* 직업유형 */}
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Box mt={3} pt={3} fontSize="1.3rem" fontWeight="bold" color="white">
            <Box>Full-Stack</Box>
            <Box>Developer</Box>
          </Box>
        </Grid>
        <Grid item xs={2} />
      </Grid>

      {/* 문구1 */}
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs>
          <Box mt={4} pt={4} fontSize="2.5rem" fontWeight="100">
            <Box style={BoxWhiteColor}>안녕하세요</Box>
            <Box style={BoxWhiteColor}>개발자 권동학입니다.</Box>
          </Box>
        </Grid>
        <Grid item xs={3} />
      </Grid>

      {/* 문구2 */}
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <Box mt={4} pt={4} mb={4} pb={4} fontSize="1rem" fontWeight="100">
            <Box style={BoxWhiteColor}>
              C, C++로 개발을 시작하여 현재는 웹,앱 서버 및 프론트 개발을
              중점으로 React Native와 함께 열심히 성장중인 2년차 풀스택
              개발자입니다.
            </Box>
            <Box mt={2} pt={2} style={BoxWhiteColor}>
              프로젝트를 크게 때로는 조금씩 경험해 오면서 서버, 프로그래밍,
              클라이언트 개발 등 여러 분야의 구조를 파악하고 보다 많은 오류와
              개선사항을 수렴해 오면서 더 나은 구조를 위한 알고리즘을 연구하고
              있습니다.
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </Grid>
  );
};

export default Contact;
