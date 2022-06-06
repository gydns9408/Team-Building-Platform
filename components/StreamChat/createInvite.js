import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import "@stream-io/stream-chat-css/dist/css/index.css";

const reqChannels = async (newClient, filters) => {
  console.log(filters);
  const channels = await newClient.queryChannels(filters, sort, {
    watch: true, // this is the default
    state: true,
  });
  console.log(channels);
  return channels[0];
};
const options = { state: true, presence: true, limit: 10 };
const sort = { last_message_at: -1 };

const createInvite = async (onerID, onerName, teamID, userID) => {

  const filters = {
    type: "team",
    id: `${teamID}`,
    members: { $in: [onerID] },
  };

  const newClient = await new StreamChat("r5sx846qqdpt");
  const handleConnectionChange = ({ online = false }) => {
    if (!online) return console.log("connection lost");
  };
  newClient.on("connection.changed", handleConnectionChange);

  await newClient.connectUser(
    {
      id: onerID,
      name: onerName,
    },
    await newClient.devToken(onerID)
  );

  await reqChannels(newClient, filters).then(async (channel) => {
    await channel.addMembers([userID]);
  });

  newClient.off("connection.changed", handleConnectionChange);
  await newClient.disconnectUser().then(() => console.log("connection closed"));

  return newClient;
};

export default createInvite;
