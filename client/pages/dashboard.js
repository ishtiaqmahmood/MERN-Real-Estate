import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Router from "next/router";
import TopNav from "../components/TopNav";

const dashboard = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;

  useEffect(() => {
    if (!user) Router.push("/");
  }, [user]);

  return (
    <>
      <TopNav />
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default dashboard;
