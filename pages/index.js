import MainLayout from "../components/Layout/MainLayout";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MainSVG from "../SVG/main_art.svg";
import { Box } from "@mui/system";
import GridContainer from "../components/Grid/GridContainer";
import Grid from "../components/Grid/GridItem";

const mainArticle = {
  content: `이렇게 멀리 떨어져서 보면 지구는 특별해 보이지 않습니다. 하지만 우리 인류에게는 다릅니다. 저 점을 다시 생각해보십시오. 저 점이 우리가 있는 이곳입니다. 저 곳이 우리의 집이자, 우리 자신입니다. 여러분이 사랑하는, 당신이 아는, 당신이 들어본, 그리고 세상에 존재했던 모든 사람들이 바로 저 작은 점 위에서 일생을 살았습니다. 우리의 모든 기쁨과 고통이 저 점 위에서 존재했고, 인류의 역사 속에 존재한 자신만만했던 수 천 개의 종교와 이데올로기, 경제체제가, 수렵과 채집을 했던 모든 사람들, 모든 영웅과 비겁자들이, 문명을 일으킨 사람들과 그런 문명을 파괴한 사람들, 왕과 미천한 농부들이, 사랑에 빠진 젊은 남녀들, 엄마와 아빠들, 그리고 꿈 많던 아이들이, 발명가와 탐험가, 윤리도덕을 가르친 선생님과 부패한 정치인들이, "슈퍼스타"나 "위대한 영도자"로 불리던 사람들이, 성자나 죄인들이 모두 바로 태양빛에 걸려있는 저 먼지 같은 작은 점 위에서 살았습니다.
  우주라는 광대한 스타디움에서 지구는 아주 작은 무대에 불과합니다. 인류역사 속의 무수한 장군과 황제들이 저 작은 점의 극히 일부를, 그것도 아주 잠깐 동안 차지하는 영광과 승리를 누리기 위해 죽였던 사람들이 흘린 피의 강물을 한 번 생각해보십시오. 저 작은 픽셀의 한 쪽 구석에서 온 사람들이 같은 픽셀의 다른 쪽에 있는, 겉모습이 거의 분간도 안되는 사람들에게 저지른 셀 수 없는 만행을 생각해보십시오. 얼마나 잦은 오해가 있었는지, 얼마나 서로를 죽이려고 했는지, 그리고 그런 그들의 증오가 얼마나 강했는지 생각해보십시오. 위대한 척하는 우리의 몸짓, 스스로 중요한 존재라고 생각하는 우리의 믿음, 우리가 우주에서 특별한 위치를 차지하고 있다는 망상은 저 창백한 파란 불빛 하나만 봐도 그 근거를 잃습니다. 우리가 사는 지구는 우리를 둘러싼 거대한 우주의 암흑 속에 있는 외로운 하나의 점입니다. 그 광대한 우주 속에서 우리가 얼마나 보잘것없는 존재인지 안다면, 우리가 스스로를 파멸시킨다 해도 우리를 구원해줄 도움이 외부에서 올 수 없다는 사실을 깨닫게 됩니다.
  
  현재까지 알려진 바로는 지구는 생명을 간직할 수 있는 유일한 장소입니다. 적어도 가까운 미래에 우리 인류가 이주를 할 수 있는 행성은 없습니다. 잠깐 방문을 할 수 있는 행성은 있겠지만, 정착할 수 있는 곳은 아직 없습니다. 좋든 싫든 인류는 당분간 지구에서 버텨야 합니다. 천문학을 공부하면 겸손해지고, 인격이 형성된다고 합니다. 인류가 느끼는 자만이 얼마나 어리석은 것인지를 가장 잘 보여주는 것이 바로 우리가 사는 세상을 멀리서 보여주는 이 사진입니다. 제게 이 사진은 우리가 서로를 더 배려해야 하고, 우리가 아는 유일한 삶의 터전인 저 창백한 푸른 점을 아끼고 보존해야 한다는 책임감에 대한 강조입니다.`,
};

export default function MainPage() {
  const [headCopy, setHeadCopy] = useState("");
  const [subCopy, setSubCopy] = useState("");
  const [content, setContentCopy] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHeadCopy("Head Copy");
    setSubCopy("Sub Copy");
    setContentCopy(mainArticle.content);
    setLoading(false);
  }, []);

  if (loading) return <div>loading...</div>;
  return (
    <MainLayout>
      <GridContainer direction="row" spacing={2} xs={12} sm={12} md={12}>
        <Grid xs={6} sm={6} md={6}>
          <Typography variant="h2">{headCopy}</Typography>
          <Typography variant="subtitle1">{subCopy}</Typography>
          <Typography variant="body1">{content}</Typography>
        </Grid>
        <Grid xs={6} sm={6} md={6}>
          <MainSVG />
        </Grid>
      </GridContainer>
    </MainLayout>
  );
}
