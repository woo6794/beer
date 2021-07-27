import React, { useEffect, useState } from "react";
import { getBeerList } from "../api";
import styled from "styled-components";
import BackgroundImg from "../beer.jpg";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getBeerListApi = async () => {
      const res = await getBeerList();
      setData(res.data);
    };
    getBeerListApi();
  }, []);

  return (
    <HomeContainer>
      <Description>
        온갖 맥주의 정보를 보여드립니다~
        <br />
        사진을 눌러 해당맥주의 상세정보를 확인하시고
        <br />
        우측 상단 Pages 에서 BeerLIst 를 가보시면
        <br />
        더욱 다양한 맥주들의 정보를 확인하실수 있습니다~
      </Description>
      <ButtonWrap>
        <BeerButton>
          <ButtonInside>
            <RandomBeer>RandomBeer</RandomBeer>
            <BeerName>{data && data.length > 0 && data[0].name}</BeerName>
            {data && data.length > 0 && (
              <BeerImg src={data[0].image_url} alt="" />
            )}
          </ButtonInside>
        </BeerButton>
      </ButtonWrap>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background: url(${BackgroundImg});
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  flex: 1;
  font-size: 40px;
  font-weight: 700;
  position: relative;
  left: 50px;
  background: #fff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  border: #7f7f7f solid 2px;
  padding: 30px;
`;

const ButtonWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const BeerButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #999;
  background-image: linear-gradient(180deg, #ccc, #999);
  border-top: 3px solid #ccc;
  border-right: 3px solid #ccc;
  border-left: 4px solid #666;
  border-bottom: 4px solid #666;
  border-radius: 1em;
  float: left;
  margin: 3em;
  text-decoration: none;
  transition: box-shadow 0.3s, border-top 0.3s, border-right 0.3s;
  :hover,
  :focus {
    cursor: pointer;
    border-top: 3px solid #666;
    border-right: 3px solid #666;
  }
`;

const ButtonInside = styled.div`
  margin: 0.5em auto;
  border-radius: 0.8em;
  background-color: #ccc;
  background-image: linear-gradient(45deg, #ccc, #999);
  box-shadow: inset -0.15em 0.15em 0 #666, inset 0.1em -0.1em 0 #ccc;
`;

const RandomBeer = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 15px 0 0;
`;

const BeerName = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  margin-bottom: 10px;
`;

const BeerImg = styled.img`
  height: 600px;
  margin: 0 30px 30px;
`;

export default Home;
