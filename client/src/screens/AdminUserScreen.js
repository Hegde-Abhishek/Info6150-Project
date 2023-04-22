import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import { Container, Row, Col, Button } from "react-bootstrap";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminUserScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    { title: "userid", dataIndex: "_id", key: "_id" },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    { title: "email", dataIndex: "email", key: "email" },

    {
      title: "isAdmin",
      dataIndex: "isAdmin",
      key: "isAdmin",
      render: (isAdmin) => (
        <>
          {isAdmin === true ? (
            <Tag color="green">YES</Tag>
          ) : (
            <Tag color="red">NO</Tag>
          )}
        </>
      ),
    },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/users/getallusers")).data;
      setUsers(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyData();
  }, []);

  return (
    <Container>
      {/* <Row className="my-3">
        <Col>
          <h1>Admin User Screen</h1>
        </Col>
      </Row> */}

      {loading ? (
        <Loader />
      ) : error.length > 0 ? (
        <Error msg={error} />
      ) : (
        <Row className="my-3">
          <Col>
            <Table columns={columns} dataSource={users} />
          </Col>
        </Row>
      )}
      <Row className="my-3">
        <Col>
          <Button variant="primary" onClick={fetchMyData}>
            Refresh Data
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminUserScreen;
