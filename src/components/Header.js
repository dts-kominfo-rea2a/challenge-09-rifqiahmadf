// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";

const Header = () => {
  return (
    <>
      <table border="0" style={{ position: "fixed" }}>
        <tbody>
          <tr>
            <td>
              <h1>Call a Friend</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h2>your friendly contact app</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Header;
