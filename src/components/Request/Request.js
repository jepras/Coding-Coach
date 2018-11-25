import React, { Component } from "react";
import Layout from "../Layout/Layout";
import { fetchRecord, updateRecord } from "../../actions/airtableActions";
import Modal from "./Modal";

import { connect } from "react-redux";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", modalState: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchRecord(id));
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  handleClose(event) {
    event.preventDefault();

    const { dispatch, id } = this.props;
    const assigned = event.target.name;
    const status = event.target.id;
    dispatch(updateRecord(assigned, id, status));
    dispatch(fetchRecord(id));
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch, id } = this.props;
    const status = event.target.id;
    const assigned = event.target.name;
    dispatch(updateRecord(assigned, id, status));
    this.toggleModal();
    dispatch(fetchRecord(id));
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
                <strong>{record.name}</strong> needs help with{" "}
                <strong>{record.skill}</strong>. He submitted this help on{" "}
                <strong>{record.date}</strong>
              </p>
              <p className="mt-0">
                <strong>Issue: </strong>
                {record.issue}
              </p>

              <p>
                <strong>Link to issue: </strong>
                <a href={record.link}>{record.link}</a>
              </p>

              {record.status === "open" ? (
                <form onClick={this.handleClick}>
                  <input
                    type="submit"
                    name={auth}
                    id="undergoing"
                    value={"Accept request as " + auth}
                    className="button button-primary button-shadow"
                    href="#"
                  />
                </form>
              ) : null}

              {record.status === "undergoing" ? (
                <form onClick={this.handleClose}>
                  <input
                    type="submit"
                    name={auth}
                    id="closed"
                    value={"Mark as solved"}
                    className="button button-primary button-shadow"
                    href="#"
                  />
                </form>
              ) : null}

              {record.status === "closed" ? (
                <div>
                  <p>
                    Solved by <strong>{record.helper}</strong> on{" "}
                    <strong>17/11-2018 16:03</strong>
                  </p>
                  <p>
                    <strong>Video of solution</strong>
                  </p>
                  <form onClick={this.handleClose}>
                    <input
                      type="submit"
                      name={auth}
                      id="open"
                      value={"Open again"}
                      className="button button-primary button-shadow"
                      href="#"
                    />
                  </form>
                </div>
              ) : null}
            </div>

            <Modal
              closeModal={this.toggleModal}
              modalState={this.state.modalState}
            />
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
