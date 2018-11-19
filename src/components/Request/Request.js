import React from "react";
import Layout from "../Layout/Layout";
import AddRequest from "../../containers/AddRequest";
import RequestList from "./RequestList";

import { connect } from "react-redux";

const Request = ({ requests, request }) => (
  <Layout>
    <section className="container-sm">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title mt-0 is-revealing">
            Help with authentication setup in Redux
          </h1>
          <p>
            <strong>Jeppe</strong> needs help with <strong>Redux.</strong> He
            submitted this help on <strong>17/11-2018 15:51</strong>
          </p>
          <p className="mt-0">
            <strong>Issue: </strong>
            Cant figure out how to dispatch correct actions when using passport
            to authenticate and how to retrieve the profile afterwards
          </p>

          <p>
            <strong>Link to issue: </strong>
            <a href="http://github.com/jepras">http://github.com/jepras</a>
          </p>

          <a className="button button-primary button-shadow" href="/accept">
            Accept request
          </a>
          <hr />

          <p>If Request = Closed</p>
          <p>
            Solved by <strong>Yashish Dua</strong> on{" "}
            <strong>17/11-2018 16:03</strong>
          </p>
          <p>
            <strong>Video of solution</strong>
          </p>

          <hr />

          <AddRequest />
          <RequestList />
        </div>
      </div>
    </section>
  </Layout>
);

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    requests: state.requests,
    id: id
  };
};

export default connect(
  mapStateToProps,
  null
)(Request);
