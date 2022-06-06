import { StreamChat } from "stream-chat";
import "@stream-io/stream-chat-css/dist/css/index.css";

const createChannel = async (teamID, teamName, userID, userName) => {
  const newClient = await new StreamChat("r5sx846qqdpt");
  const handleConnectionChange = ({ online = false }) => {
    if (!online) return console.log("connection lost");
  };
  newClient.on("connection.changed", handleConnectionChange);
  await newClient.connectUser(
    {
      id: userID,
      name: userName,
    },
    newClient.devToken(userID)
  );
  const channel = await newClient.channel("team", teamID, {
    name: teamName,
    members: [userID],
  });
  await channel.create();

  newClient.off("connection.changed", handleConnectionChange);
  newClient.disconnectUser();

  return newClient;
};

export default createChannel;
