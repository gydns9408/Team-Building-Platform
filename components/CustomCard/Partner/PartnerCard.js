import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Avatar, CardHeader, Divider } from "@mui/material";
import Tag from "../../Tags/Tag";
import TagContainer from "../../Tags/TagsContainer";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import GridContainer from "../../Grid/GridContainer";
import Editor from "../../Editors/CKEditorTextEditor";

const styles = {
  card: {
    width: "auto",
    height: "100%",
  },
};

const useStyles = makeStyles(styles);

const PartnerCard = (props) => {
  const classes = useStyles();

  const { contestID, className } = props;
  //   const [contest, setContest] = useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(props);
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <Link
      href={`${process.env.HOSTNAME}/profile/${contestID.user.name}`}
      prefetch
      passHref
     >
        <Card className={classes.card + " " + className}>
          <GridContainer direction="row" spacing={2} xs={12} sm={12} md={12}>
            <CardActionArea>
              <CardContent>
                <CardHeader
                  avatar={
                    <Avatar
                      alt="photo"
                      src={
                        contestID.user.image !== null
                          ? `${contestID.user.image}`
                          : `/asset/image/background/contest/default.svg`
                      }
                    />
                  }
                  title={contestID.user.name}
                  titleTypographyProps={{ fontSize: 20, color:"#00adb5" }}
              />
              <Divider />
              <Typography>&nbsp;</Typography>
              <Typography>{contestID.profile.content}</Typography>
              <Typography>&nbsp;</Typography>
              <Divider />
                <h3><li>기술스택</li></h3>
                <TagContainer tags={contestID.tech_stack}
                type={"TechStack"}
                form={"iconOnly"}
              />
            </CardContent>
          </CardActionArea>
        </GridContainer>
      </Card>
    </Link>
  );
};

export default PartnerCard;

//배효운