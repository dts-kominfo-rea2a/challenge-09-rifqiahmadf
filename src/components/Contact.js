// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={data?.photo} width="100" alt="user pic" />
            </td>
            <td>{data?.name}</td>
            <td>{data?.phone}</td>
            <td>{data?.email}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Contact;
