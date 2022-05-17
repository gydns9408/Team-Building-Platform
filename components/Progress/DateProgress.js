import moment from "moment";

const ProgressBar = (props) => {
  const { bgcolor, start_period, end_period } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `100%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "left",
  };

  const labelStyles = {
    fontSize: 4,
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${moment(start_period).format(
          "l"
        )} ~ ${moment(end_period).format("l")}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
