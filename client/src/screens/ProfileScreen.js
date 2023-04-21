import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { Tag } from "antd";
import "./Profilescreen.css"

import MyBookingScreen from "./MyBookingScreen";
const { TabPane } = Tabs;

function ProfileScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    } else if (user.isAdmin) {
      window.location.href = "/admin"
    }
  }, []);

  function callback(key) {
    console.log(key);
  }

  return (
    // <div className="container mt-5">
    //   <div className="row justify-content-center">
    //     <div className="col-md-8">
    //       <Tabs defaultActiveKey="1" onChange={callback}>
    //         <TabPane tab="Profile" key="1">
    //           <div className="bs p-3">
    //             <h3 className="mb-4">My Profile</h3>
    //             <p className="mb-3"><strong>Name:</strong> {user.name}</p>
    //             <p className="mb-3"><strong>Email:</strong> {user.email}</p>
    //             <p>
    //               <strong>IsAdmin:</strong>{" "}
    //               {user.isAdmin ? (
    //                 <Tag color="green">YES</Tag>
    //               ) : (
    //                 <Tag color="red">NO</Tag>
    //               )}
    //             </p>
    //           </div>
    //         </TabPane>
    //         <TabPane tab="Booking" key="2">
    //           <MyBookingScreen />
    //         </TabPane>
    //       </Tabs>
    //     </div>
    //   </div>
    // </div>
    <div className="container mt-5">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Profile" key="1">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title mb-4">My Profile</h5>
                  <p className="card-text">Name: {user.name}</p>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Is Admin: {user.isAdmin ? <Tag color="green">YES</Tag> : <Tag color="red">NO</Tag>}</p>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Booking" key="2">
          <MyBookingScreen />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ProfileScreen;
