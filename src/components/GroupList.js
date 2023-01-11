import {Card as MuiCard, CardActionArea, CardContent as MuiCardContent, CardMedia, Divider, Typography} from "@mui/material";
import styled from "styled-components";

function GroupCard() {
    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="https://storage.googleapis.com/jjalbot/2022/02/d8RfM5c0g.jpeg"
                        height="150px"
                        alt="group image"
                    />
                    <Divider/>
                    <CardContent>
                        <h1>고양이</h1>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default function GroupList() {
    return (
        <GridCardWrapper>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
        </GridCardWrapper>
    )
}

const GridCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

const Card = styled(MuiCard)`
  box-shadow: 2px 2px 8px 2px rgb(55, 71, 107, 0.5);
  border-radius: 16px;
`;

const CardContent = styled(MuiCardContent)`
  padding: 8px;
  display: flex;
  justify-content: center;
  background-color: ${props=>props.theme.color.background};
  &>h1{
    color: ${props=>props.theme.color.black};
    font-size: 20px;
  }
`
