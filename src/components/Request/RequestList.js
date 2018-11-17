import React from "react";
import SingleRequest from "./SingleRequest";

const RequestList = ({ requests }) => (
  <div>
    <div>
      {requests &&
        requests.map(request => (
          <SingleRequest key={request.link} {...request} />
        ))}
    </div>
    {console.log(requests)}
    list?
  </div>
);

export default RequestList;
