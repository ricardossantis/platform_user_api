import React, { useEffect, useState } from "react";
import { BackGround, StyledRow, StyledPagination } from "./Users.js";
import { Row, Col } from "antd";
import Card from "../../components/card/Card.jsx";
import Api from "../../services/api.js";

function Users() {
  let numRows = Array(2).fill(0);
  let numsCol = Array(3).fill(0);
  const [users, setUsers] = useState(Array(50).fill(""));
  const [pagination, setPagination] = useState(0);
  let counter = pagination;

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    Api.get(`users`, {
      headers: { Authorization: token },
    }).then((res) => {
      console.log(res);
      setUsers(res.data);
    }, []);
  });

  const handlePagination = (page) => {
    setPagination(page * 6);
  };

  return (
    <BackGround>
      {numRows.map((row, indexRow) => (
        <StyledRow gutter={16} key={indexRow}>
          {numsCol.map((col, indexCol) => {
            counter += 1;
            return (
              <Col key={indexCol} className="gutter-row" span={6}>
                <Card
                  name={users[counter - 1].name}
                  user={users[counter - 1].user}
                  email={users[counter - 1].email}
                />
              </Col>
            );
          })}
        </StyledRow>
      ))}
      <StyledPagination
        defaultCurrent={1}
        onChange={handlePagination}
        total={users.length / 6}
      />
    </BackGround>
  );
}

export default Users;
