import React from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";


export const Profile = () => {
  const history = useHistory();
  const onProfile = () => {
    history.push("/myProfile");
  };
  return (
    <div>
      <div>
        <IconButton
          onClick={() => {
            onProfile();
          }}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
    </div>
  );
};
