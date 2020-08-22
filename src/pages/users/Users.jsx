import React, { useEffect, useState } from "react";
import { BackGround, StyledDiv, StyledPagination } from "./Users.js";
import Card from "../../components/card-users/Card.jsx";
import Api from "../../services/api.js";

function Users() {
  let numsItems = Array(12).fill(0);
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
    setPagination(page * 12);
  };

  return (
    <BackGround>
      <StyledDiv>
        {numsItems.map((item, indexItem) => {
          counter += 1;
          return (
            <Card
              key={indexItem}
              name={users[counter - 1].name}
              user={users[counter - 1].user}
              email={users[counter - 1].email}
            />
          );
        })}
      </StyledDiv>
      <StyledPagination
        defaultCurrent={1}
        onChange={handlePagination}
        total={users.length / 12}
      />
    </BackGround>
  );
}

export default Users;
