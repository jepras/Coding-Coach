import React, { Component } from "react";
import Layout from "../Layout/Layout";
import { fetchRecord, updateRecord } from "../../actions/airtableActions";

import { connect } from "react-redux";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchRecord(id));
    /*     this.props.fetchRecord(id)
     */
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.status);
    const { dispatch, id } = this.props;
    const assigned = event.target.name;
    dispatch(updateRecord(assigned, id));
  }

  render() {
    const { record, auth /* isFetching */ } = this.props;

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

              {record.status === null || "open" ? (
                <form onClick={this.handleClick}>
                  <input
                    type="submit"
                    label={auth}
                    name={auth}
                    status="undergoing"
                    value={"Accept request as " + auth}
                    className="button button-primary button-shadow"
                    href="#"
                  />
                </form>
              ) : null}

              {record.status === "undergoing" ? (
                <form>
                  <a className="button button-primary button-shadow">
                    Mark as solved
                  </a>
                </form>
              ) : null}

              {record.status === "closed" ? (
                <div>
                  <p>
                    Solved by <strong>Yashish Dua</strong> on{" "}
                    <strong>17/11-2018 16:03</strong>
                  </p>
                  <p>
                    <strong>Video of solution</strong>
                  </p>
                  <form>
                    <a className="button button-primary button-shadow">
                      Open again
                    </a>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const { airtableRecord, firebase } = state;
  const record = airtableRecord.items;
  console.log(state);

  return {
    record: record,
    id: id,
    auth: firebase.auth.email ? firebase.auth.email : null
  };
};

/* const mapDispatchToProps
 */

export default connect(
  mapStateToProps,
  null
)(Request);
