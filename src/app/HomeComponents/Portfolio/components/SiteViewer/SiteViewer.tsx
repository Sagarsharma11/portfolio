import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./SiteViewer.css";
const SiteViewer = ({ setShow, show, siteUri }: any) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        centered
        className={"SiteViewer--modal"}
        show={show}
        onHide={handleClose}
        size={"xl"}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {siteUri.type === "link" ? (
            // If mentorAllocation is true
            <iframe
              id="myIframe"
              width="100%"
              height="750px"
              src={siteUri.uri}
              frameBorder="0"
              allowFullScreen={false}
            ></iframe>
          ) : siteUri.type === "image" ? (
            <>
              <img src={siteUri.uri} />
            </>
          ) : (
            <div>Oops, sorry, something went wrong.</div>
          )}
          <div></div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SiteViewer;
