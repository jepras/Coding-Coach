import React from "react";

const Modal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Lets do this!</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            There is a need for your help. Here are a few points to get you
            started
            <ul>
              <li>
                Get settled in your video session on{" "}
                <a href="https://appear.in/codingcoach">appear.in</a>
              </li>
              <li>
                Download the{" "}
                <a href="https://chrome.google.com/webstore/detail/loom-video-recorder-scree/liecbddmkiiihnedobmlmillhodjkdmb">
                  Loom extension
                </a>
                to record your session
              </li>
              <li>Do your best and help the student!</li>
              <li>
                Remember to mark this request as solved when done and upload
                your video
              </li>
              <li>Get paid for your minutes within a week</li>
            </ul>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button
            className="button button-primary button-shadow"
            onClick={closeModal}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
