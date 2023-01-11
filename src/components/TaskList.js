import {List, ListItem, ListItemText as MuiListItemText} from "@mui/material";
import styled from "styled-components";

const dummyData = [
    {id: 0, title: '대추차 마시고 나가기', subtitle: '오늘 한번만 알림'},
    {id: 1, title: '맥북 충전기 챙기기', subtitle: '매일 오전 11이 이전 외출 시 알림'},
    {id: 2, title: '텀블러 챙기기', subtitle: '매일 상시 알림'},
]
export default function TaskList() {
    return (
        <>
            <List sx={{width: '100%'}}>
                {dummyData.map((value) => (
                    <ListItemBox
                        key={value.id}
                        disableGutters
                    >
                        <ListItemText primary={value.title} secondary={value.subtitle}/>
                    </ListItemBox>
                ))}
            </List>
        </>
    );
}

const ListItemBox = styled(ListItem)`
  margin-bottom: 16px;
  border-radius: 16px;
  padding: 8px;
  box-shadow: 2px 2px 8px 2px rgb(55, 71, 107, 0.5);
  background-color: ${props => props.theme.color.white};
`;

const ListItemText = styled(MuiListItemText)`
  color: ${props => props.theme.color.black}
`
