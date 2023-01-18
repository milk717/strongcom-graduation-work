import {Divider, Stack} from "@mui/material";
import {settingList} from "../resources/string";
import styled from "styled-components";

function MenuItem({menu}) {
    return (
        <>
            <Stack key={menu.key}>
                <MenuTitle>{menu.menuName}</MenuTitle>
                <Divider/>
                {
                    (menu?.subMenu)
                        ?
                        <>
                            {
                                menu.subMenu.map(menu => <SubTitle key={menu.key}>{menu.menuName}</SubTitle>)
                            }
                            <Divider/>
                        </>
                        : null
                }
            </Stack>
        </>
    );
}

export default function SettingList() {
    return (
        <>
            {
                settingList.map(menu =>
                    <MenuItem key={menu.key} menu={menu}/>
                )
            }
        </>
    );
}

const MenuTitle = styled.p`
  font-size: 20px;
  margin: 8px;
`

const SubTitle = styled.p`
  font-size: 16px;
  margin: 8px;
  color: ${props => props.theme.color.gray}
`