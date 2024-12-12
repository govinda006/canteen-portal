import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";

import {
  validateUserName,
  validateUserPassword,
} from "../../validation/validators";

function AuthAdmin(props) {
  const [adminUserName, setAdminUserName] = useState(null);
  const [adminPassword, setAdminPassword] = useState(null);
  const [adminLoginDisabled, setAdminLoginDisabled] = useState(true);

  const onAdminUserNameInput = (event) => {
    const userEmail = event.target.value;

    if (
      validateUserName(userEmail) &&
      (adminPassword !== null || adminPassword === "")
    ) {
      setAdminUserName(userEmail);
      setAdminLoginDisabled(false);
    } else {
      setAdminLoginDisabled(true);
    }
  };

  const onAdminPasswordInput = (event) => {
    const userPassword = event.target.value;
    if (validateUserPassword(userPassword)) {
      setAdminPassword(userPassword);
      setAdminLoginDisabled(false);
    } else {
      setAdminLoginDisabled(true);
    }
  };

  const onAdminLogin = () => {
    const adminDetails = {
      AdminEmail: adminUserName,
      AdminPassword: adminPassword,
    };
    localStorage.setItem(
      "LOGGED_IN",
      JSON.stringify({
        ROLE: "Admin",
        payLoad: adminDetails,
      })
    );

    props.setAdminLoggedIn(true);
    props.setAdminProfile("ADMIN");
  };

  return (
    <React.Fragment>
      {props.role === null && (
        <React.Fragment>
          <div className="col-12 mb-3">
            <Card
              title="Today's Menu"
              style={{ width: "80%", margin: "0 auto" }}
            >
              <Button
                color="primary"
                label="Check Out Today's Menu"
                width="auto"
                size="sm"
                onClick={() => alert("Displaying today's menu items!")}
              />
            </Card>
          </div>
          <div className="col-12">
            <Card title="Admin" style={{ width: "80%", margin: "0 auto" }}>
              <Button
                color="danger"
                label="Proceed as Admin"
                width="auto"
                size="sm"
                onClick={() => props.onRoleClicked("Admin")}
              />
            </Card>
          </div>
        </React.Fragment>
      )}

      {props.role === "Admin" && (
        <React.Fragment>
          <div className="display-4 text-center text-warning">{"Admin"}</div>
          <div className="container mt-3">
            <hr />
            <Card style={{ width: "80%", margin: "0 auto" }}>
              <div className="container">
                <div className="row">
                  <div className="col-12 p-1">
                    <Input
                      onKeyUp={onAdminUserNameInput}
                      type="text"
                      placeholder="Admin User Name"
                    />
                  </div>
                  <div className="col-12 p-1">
                    <Input
                      onKeyUp={onAdminPasswordInput}
                      type="password"
                      placeholder="Admin Password"
                    />
                  </div>
                  <div className="col-12 mt-2"></div>
                  <div className="row">
                    <div className="col-6">
                      <Button
                        label="Login as Admin"
                        width="100%"
                        color="danger"
                        disabled={adminLoginDisabled}
                        onClick={() => {
                          onAdminLogin();
                        }}
                        type="submit"
                      />
                    </div>
                    <div className="col-6">
                      <Button
                        label="Back"
                        width="100%"
                        color="danger"
                        onClick={props.onBackClicked}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default AuthAdmin;
