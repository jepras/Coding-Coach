import React from "react";
import SingleRequest from "./SingleRequest";

import { connect } from "react-redux";

const RequestList = ({ requests }) => (
  <div>
    <div>
      {requests &&
        requests.map(request => (
          <SingleRequest key={request.name} {...request} />
        ))}
    </div>
    {console.log(requests)}
    list?
    <p>{requests}</p>
  </div>
);

export default RequestList;
