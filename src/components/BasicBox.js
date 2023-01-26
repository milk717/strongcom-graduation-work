import styled from "styled-components";

export default function BasicBox(props){
    return(
        <>
            <StyledBox>
                {props.children}
            </StyledBox>
        </>
    )
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px 2px rgb(55, 71, 107, 0.5);
  border-radius: 16px;
  margin-top: 24px;
  padding: 16px ;
  background-color: ${props=>props.theme.color.white};
  cursor:pointer;
`