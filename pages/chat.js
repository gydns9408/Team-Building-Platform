import MainLayout from "../components/Layout/MainLayout";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import GridContainer from "../components/Grid/GridContainer";
import Grid from "../components/Grid/GridItem";
import createChannel from "../components/StreamChat/createChannel";
import createInvite from "../components/StreamChat/createInvite";

// teamID, teamName, userID, userName

export default function chatT() {
  return (
    <MainLayout>
      <Button
        onClick={() => {
          createChannel(9, "teamTester9", "haru9", "haru9");
        }}
      >
        채널
      </Button>
      <Button
        onClick={() => {
          createInvite("haru7", "haru7", "8", "haru8");
        }}
      >
        초대
      </Button>
    </MainLayout>
  );
}
