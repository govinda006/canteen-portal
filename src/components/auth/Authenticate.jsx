import React, { useState } from "react";
import AuthAdmin from "../admin/authAdmin";
import Card from "../UI/Card";
import CopyRightText from "../UI/CopyRightText";

function Authenticate(props) {
  const [role, setRole] = useState(null);

  const cardTitle = "GECIA Canteen";

  const onRoleClicked = (role) => {
    setRole(role);
    window.localStorage.setItem("ROLE", JSON.stringify(role));
  };

  const onBackClicked = () => {
    setRole(null);
  };

  return (
    <React.Fragment>
      <div
        className="container mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          useTitleClass={true}
          title={cardTitle}
          background="rgb(1,77,78)"
          textColor="#ffffff"
          style={{ width: "300px", height: "300px", margin: "0 auto" }}
        >
          <div className="row text-center">
            <AuthAdmin
              role={role}
              onBackClicked={onBackClicked}
              onRoleClicked={onRoleClicked}
              setAdminLoggedIn={props.setLoginAction}
              setAdminProfile={props.setLoggedInProfile}
            />
          </div>
          <hr />
          <CopyRightText />
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Authenticate;
