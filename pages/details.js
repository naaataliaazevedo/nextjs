import React from "react";
import axios from "axios";

const Details = ({ user }) => (
  <div>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} with="200" />
  </div>
);

Details.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

export default Details;
