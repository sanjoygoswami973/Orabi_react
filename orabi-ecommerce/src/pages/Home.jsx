import React from "react";
import Banner from "../components/Banner";
import AdditionalInfo from "../components/AdditionalInfo";
import Advertise from "../components/Advertise";
import Newarrival from "../components/Newarrival";
import Bestseller from "../components/Bestseller";
import Advertisement from "../components/Advertisement";
import Offers from "../components/Offers";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <Newarrival />
      <Bestseller />
      <Advertisement />
      <Offers />
    </>
  );
};

export default Home;
