import {Divider, List, ListItem, ListItemText as MuiListItemText} from "@mui/material";
import styled from "styled-components";

export default function HomeList({listData}){
    return(
        <>
            <List sx={{width: '100%'}}>
                {listData.map((value,index) => (
                    <>
                        <ListItemBox
                            key={value.id}
                            disableGutters
                        >
                            <ListItemText primary={value.title} secondary={value.subtitle}/>
                        </ListItemBox>
                        {
                            (index < listData.length -1 ) ? <Divider /> : null
                        }
                    </>
                    ))}
            </List>
        </>
    );
}

const ListItemBox = styled(ListItem)`
  padding: 8px;
  background-color: ${props => props.theme.color.white};
`;

const ListItemText = styled(MuiListItemText)`
  color: ${props => props.theme.color.black}
`