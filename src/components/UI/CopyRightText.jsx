import React from "react";

function CopyRightText() {
    const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer>
        <h6 className="text-center">
          <small>© {currentYear} Atlas Copco AB | All Rights Reserved</small>
        </h6>
      </footer>
    </React.Fragment>
  );
}

export default CopyRightText;
