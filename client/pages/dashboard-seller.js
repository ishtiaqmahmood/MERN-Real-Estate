import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import TopNav from "../components/TopNav";
import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";

const seller = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;

  useEffect(() => {
    if (!user) Router.push("/");
  }, [user]);

  return (
    <>
      <TopNav />
      <div className="container-fluid bg-secondary p-5 text-center">
        <ConnectNav />
      </div>
      <div className="container-fluid p-2">
        <DashboardNav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Houses</h2>
          </div>
          <div className="col-md-2">
            <Link href="/hotels">
              <button className="btn btn-primary">+ Add New</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default seller;
