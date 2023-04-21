import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminBookingScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionid",
      key: "transactionid",
    },
    { title: "Room ID", dataIndex: "roomid", key: "roomid" },
    { title: "Room", dataIndex: "room", key: "room" },
    { title: "From Date", dataIndex: "fromdate", key: "fromdate" },
    { title: "To Date", dataIndex: "todate", key: "todate" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          {status === "booked" ? (
            <Tag color="green">CONFIRMED</Tag>
          ) : (
            <Tag color="red">CANCELLED</Tag>
          )}
        </>
      ),
    },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/bookings/getallbookings")).data;
      setBookings(data);
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
    <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h2 className="text-center mb-4">Booking Records</h2>
          {loading ? (
            <Loader />
          ) : error.length > 0 ? (
            <Error msg={error} />
          ) : (
            <div className="table-responsive">
              <Table columns={columns} dataSource={bookings} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminBookingScreen;
