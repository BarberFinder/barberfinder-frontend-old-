import React from "react";
import { 
List, Divider
} from "semantic-ui-react";

const UserProfileHistory = () => {
  return (
    <div>
      <List>
        <List.Item icon="home" content="Barber Garage 2018/09/21 13.00 WIB" />
        <Divider />
      </List>
    </div>
  );
};

export default UserProfileHistory;
