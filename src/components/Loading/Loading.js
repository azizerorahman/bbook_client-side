import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = ({ height, refresh }) => {
  return (
    <div
      className={`d-flex flex-column gap-5 align-items-center justify-content-center ${height}`}
    >
      <Spinner animation="grow" />
      {refresh && (
        <Button
          onClick={() => window.location.reload(false)}
          className="border-0 py-2 px-4 rounded-3 fw-bold f-merriweather secondary-bg button"
        >
          Refresh
        </Button>
      )}
    </div>
  );
};

export default Loading;
