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
import { useParams, useHistory } from "react-router-dom";

function Users() {
  const [numItems, setNumItems] = useState(Array(12).fill(0));
  const [users, setUsers] = useState(Array(50).fill(""));
  const [totalUsers, setTotalUsers] = useState();
  const [pagination, setPagination] = useState(0);
  const [pageSize, setSize] = useState(12);
  let counter = pagination;
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

  const handleSearch = (value) => {
    let filtered = totalUsers.filter(
      (item) => item.name !== null && item.name.match(value)
    );
    setUsers(filtered);
    setNumItems(Array(filtered.length).fill(0));
  };

  const handlePageSize = (page, size) => {
    setNumItems(Array(size).fill(0));
    setSize(size);
  };

  return (
    <BackGround>
      <StyledSearch
        placeholder="Insert user name"
        onSearch={handleSearch}
        enterButton={<Button icon={<SearchOutlined />} />}
      />
      <StyledDiv>
        {numItems.map((item, indexItem) => {
          counter += 1;
          return (
            counter <= users.length && (
              <Card
                key={indexItem}
                name={users[counter - 1].name}
                user={users[counter - 1].user}
                email={users[counter - 1].email}
              />
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
