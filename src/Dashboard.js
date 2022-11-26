import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "./config";
function Dashboard() {
  useEffect(() => {
    fetchdata();
  }, []);
  let fetchdata = async () => {
    let a = await axios.get(`${config.api}/portal/dashboard`, {
      headers: {
        authorization: `${localStorage.getItem("react_app_token")}`,
      },
    });
  };
  return (
    <div className="container">
      {/* {console.log(a.data)} */}

      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <img
              className="card-img-top"
              src="https://thumbs.dreamstime.com/b/businessman-showing-text-income-concept-passive-50241422.jpg"
              alt="Card image cap"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "black", fontSize: "40px" }}
              >
                Income
              </h5>

              <Link
                to={"/portal/incomelist"}
                className="btn btn-success btn-block "
              >
                View Income Histroy
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/id/164665722/photo/close-up-of-an-expense-report-with-glasses-and-a-calculator.jpg?s=612x612&w=0&k=20&c=0fo8thRvyHTWvi0o6CGyVeoiXUMZ-RTJV8YnL895fGE="
              alt="Card image cap"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "black", fontSize: "40px" }}
              >
                Expense
              </h5>

              <Link
                to={"/portal/expenselist"}
                className="btn btn-danger btn-block"
              >
                View Expense Histroy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
