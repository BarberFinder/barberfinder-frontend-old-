import React from "react";
import { List, Divider } from "semantic-ui-react";

const userProfileDetail = props => {
  return (
    <div>
      <List>
        <List.Item icon="users" content="mnoorcahyo" />
        <Divider />
        <List.Item icon="mail" content="mnoorcahyo@gmail.com" />
        <Divider />
        <List.Item icon="phone" content="087878875708" />
        <Divider />
      </List>
    </div>
  );
};

export default userProfileDetail;
