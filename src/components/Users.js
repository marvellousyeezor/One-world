import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Users() {
  return (
    <section>
        <Navbar />
        <Pagination/>
    </section>
  );
}

const Pagination = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api?results=50");
        const userArray = res.data.results;
        const cleanArray = userArray.map((user) => {
          return {
            Name: user.name.first + " " + user.name.last,
            Age: user.dob.age,
            Username: user.login.username,
          };
        });
        setUsers(cleanArray);
      } catch {
        alert("User request failed");
      }
    };

    fetchUsers();
  }, []);

  return users ? (
    <Pages content={users} itemsPerPage={5} />
  ) : (
    <h1>Loading Users...</h1>
  );
};


const Pages = ({ content, itemsPerPage }) => {
  const [page, setPage] = useState(0);
  const start = itemsPerPage * page;
  const end = start + itemsPerPage;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        {Object.keys(content[0]).map((key) => (
          <h3 style={{ width: 100, fontWeight: "bold"}}>{key}</h3>
        ))}
      </div>
      {content.slice(start, end).map((obj) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              
            }}
          >
            {Object.values(obj).map((value) => (
              <div style={{ width: 100 }}>{value}</div>
            ))}
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {Array.from(Array(Math.ceil(content.length / itemsPerPage)).keys()).map(
          (number) => (
            <p1
              style={{
                width: 30,
                color: "3a3a3a",
                marginTop: 50,
                cursor: "pointer",
                fontWeight: page === number ? "bold" : "normal",
              }}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </p1>
          )
        )}
      </div>
    </div>
  );
};



export default Users;
