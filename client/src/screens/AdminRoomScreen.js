import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminRoomScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    {
      title: "Room ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    { title: "Max Count", dataIndex: "maxcount", key: "maxcount" },
    { title: "Phone Number", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "Rent Per Day", dataIndex: "rentperday", key: "rentperday" },
    { title: "Type", dataIndex: "type", key: "type" },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/rooms/getallrooms")).data;
      setRooms(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  // async function deleteFun() {
  //   setError("");
  //   setLoading(true);
  //   try {
  //     const data = (await axios.delete("/api/rooms/deleteroom/${_id}")).data;
  //     setRooms(data);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //   }
  //   setLoading(false);
  // }
// 
  useEffect(() => {
    fetchMyData();
  }, []);

  return (
    <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Room List</h2>
            <button
              className="btn btn-success"
              onClick={fetchMyData}
              disabled={loading}
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
            {/* <button
              className="btn btn-success"
              onClick={deleteFun}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Delete"}
            </button> */}
          </div>
          {error && <Error msg={error} />}
          {loading ? (
            <Loader />
          ) : (
            <Table columns={columns} dataSource={rooms} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminRoomScreen;
