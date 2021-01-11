import React from "react";
import { Container } from "@material-ui/core";

import SkillCard from "components/SkillCard";

const Skills = () => {
  return (
    <Container>
      <div style={{ color: "white" }}>스킬</div>
      <SkillCard />
    </Container>
  );
};

export default Skills;
