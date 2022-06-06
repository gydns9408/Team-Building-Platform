import dynamic from "next/dynamic";
import MainLayout from "../../../../components/Layout/MainLayout";
const StreamChat = dynamic(
  () => import("../../../../components/StreamChat/StreamChat"),
  { ssr: false }
);
import { useState, useEffect } from "react";
const group = ({ state }) => {
  console.log(state);
  return (
    <MainLayout>
      <StreamChat></StreamChat>
    </MainLayout>
  );
};

export default group;
