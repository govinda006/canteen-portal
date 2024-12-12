import React, { useState } from "react";
import styles from "../styles/AdminHome.module.css";
import Card from "../UI/Card";

const AdminHome = (props) => {
  const [users, setUsers] = useState([]);

  const onAdminLogout = () => {
    props.didloginHappen(false);
    props.setLoggedInProfile(null);
    localStorage.clear();
  };

  const handleAddUser = () => {
    const newUser = { id: Date.now(), name: "New User", role: "Subscriber" };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleRemoveUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <Card
          title={`Welcome, ${props.loggedInProfile}`}
          className={`mb-4 ${styles.welcomeCard}`}
        >
          <div className="row g-4">
            {/* User Management */}
            <div className="col-md-4">
              <Card title="User Management" className={styles.card}>
                <div className={styles.buttonGroup}>
                  <button
                    className={`btn ${styles.actionButton}`}
                    onClick={handleAddUser}
                  >
                    Add User
                  </button>
                  <div>
                    {users.map((user) => (
                      <div key={user.id}>
                        {user.name} -
                        <button onClick={() => handleRemoveUser(user.id)}>
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <button className={`btn ${styles.actionButton}`}>
                    View User Details
                  </button>
                </div>
              </Card>
            </div>
            {/* Menu Management */}
            <div className="col-md-4">
              <Card title="Menu Management" className={styles.card}>
                <div className={styles.buttonGroup}>
                  <button className={`btn ${styles.actionButton}`}>
                    Add/Update Items
                  </button>
                  <button className={`btn ${styles.actionButton}`}>
                    Set Daily Specials
                  </button>
                  <button className={`btn ${styles.actionButton}`}>
                    Disable Items
                  </button>
                </div>
              </Card>
            </div>
            {/* Feedback and Complaints */}
            <div className="col-md-4">
              <Card title="Feedback and Complaints" className={styles.card}>
                <div className={styles.buttonGroup}>
                  <button className={`btn ${styles.actionButton}`}>
                    Review Feedback
                  </button>
                  <button className={`btn ${styles.actionButton}`}>
                    Respond to Complaints
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <div className={`mt-4 text-center ${styles.logoutSection}`}>
          <button
            className={`btn btn-danger btn-lg ${styles.logoutButton}`}
            onClick={onAdminLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminHome;
