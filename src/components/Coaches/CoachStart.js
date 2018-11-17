import React from "react";
import CreateCoach from "../../containers/CreateCoach";
import Layout from "../Layout/Layout";

const Coach = ({ name, skills, rating }) => (
  <div>
    <Layout>
      <CreateCoach />
    </Layout>
  </div>
);

export default Coach;
