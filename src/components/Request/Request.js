import React, { Component } from "react";
import Layout from "../Layout/Layout";
import { fetchRecord } from "../../actions/airtableActions";

import { connect } from "react-redux";

class Request extends Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchRecord(id));
  }

  render() {
    const { record /* isFetching */ } = this.props;
    return (
      <Layout>
        <section className="container-sm">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0 is-revealing">{record.title}</h1>
              <p>
                <strong>{record.name}</strong> needs help with <strong /> He
                submitted this help on <strong>{record.date}</strong>
              </p>
              <p className="mt-0">
                <strong>Issue: </strong>
                {record.issue}
              </p>

              <p>
                <strong>Link to issue: </strong>
                <a href={record.link}>{record.link}</a>
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
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const { airtableRecord } = state;
  const record = airtableRecord.items;

  return {
    record: record,
    id: id
  };
};

export default connect(
  mapStateToProps,
  null
)(Request);
