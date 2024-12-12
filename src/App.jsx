import React, { useState } from "react";
import AdminHome from "./components/admin/AdminHome";
import Authenticate from "./components/auth/Authenticate";

function App() {
  const [didLoginHappen, setDidLoginHappen] = useState(false);
  const [loggedInProfile, setLoggedInProfile] = useState(null);

  const renderHome =
    loggedInProfile === "ADMIN" ? (
      <AdminHome
        loggedInProfile={loggedInProfile}
        didloginHappen={setDidLoginHappen} // Fixed prop name
        setLoggedInProfile={setLoggedInProfile} // Corrected prop
      />
    ) : null;

  return (
    <React.Fragment>
      <main>
        {!didLoginHappen && (
          <Authenticate
            setLoggedInProfile={setLoggedInProfile}
            setLoginAction={setDidLoginHappen}
          />
        )}
        {didLoginHappen && renderHome}
      </main>
    </React.Fragment>
  );
}

export default App;
