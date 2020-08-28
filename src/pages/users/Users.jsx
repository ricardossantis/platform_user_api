import React, { useEffect, useState } from "react";
import {
  BackGround,
  StyledDiv,
  StyledPagination,
  StyledSearch,
} from "./Users.js";
import Card from "../../components/card-users/Card.jsx";
import Api from "../../services/api.js";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useParams, useHistory, Link } from "react-router-dom";

function Users({ searchUsers }) {
  const [numItems, setNumItems] = useState(Array(12).fill(0));
  const [users, setUsers] = useState(Array(50).fill(""));
  const [totalUsers, setTotalUsers] = useState();
  const [pagination, setPagination] = useState(0);
  const [pageSize, setSize] = useState(12);
  let history = useHistory();
  let params = useParams();

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    Api.get(`users`, {
      headers: { Authorization: token },
    }).then((res) => {
      setUsers(res.data);
      setTotalUsers(res.data);
    });
    setPagination(params.page * pageSize);
  }, []);

  const handlePagination = (page) => {
    setPagination(page * pageSize);
    history.push(`/users/${page}`);
  };

  useEffect(() => {
    if (totalUsers !== undefined) {
      handlePagination(1);
      let filtered = totalUsers.filter((item) => {
        if (item.name !== null && item.name.match(searchUsers) !== null) {
          return true;
        }
      });
      setUsers(filtered);
    }
  }, [searchUsers]);

  const handlePageSize = (page, size) => {
    setNumItems(Array(size).fill(0));
    setSize(size);
  };

  return (
    <BackGround>
      <StyledDiv>
        {users[0] !== "" &&
          numItems.map((item, indexItem) => {
            return (
              users[indexItem + pagination - 12] !== undefined && (
                <Link
                  key={indexItem}
                  to={`/feedbacks/${users[indexItem + pagination - 12].id}`}
                >
                  <Card
                    name={users[indexItem + pagination - 12].name}
                    user={users[indexItem + pagination - 12].user}
                    email={users[indexItem + pagination - 12].email}
                  />
                </Link>
              )
            );
          })}
      </StyledDiv>
      <StyledPagination
        defaultCurrent={params.page}
        onChange={handlePagination}
        total={users.length}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={12}
        onShowSizeChange={handlePageSize}
      />
    </BackGround>
  );
}

export default Users;
