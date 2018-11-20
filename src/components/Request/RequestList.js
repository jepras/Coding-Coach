import React from "react";
import SingleRequest from "./SingleRequest";

const RequestList = ({ requests }) => (
  <div>
    <div>
      {requests &&
        requests.map(request => (
          <SingleRequest key={request.name} {...request} />
        ))}
    </div>
    list?
    <p>{requests}</p>
  </div>
);

export default RequestList;
