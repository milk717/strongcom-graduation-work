import {List, ListItem, ListItemText as MuiListItemText} from "@mui/material";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

export default function TaskList() {
    const reminder = useSelector((state)=>state.reminder.list);
    const dispatch = useDispatch();

    return (
        <>
            <List sx={{width: '100%'}}>
                {reminder.map((value) => (
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
