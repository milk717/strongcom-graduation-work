import BasicBox from "../BasicBox";
import {contentInput, titleInput} from "../../modules/reminderSlice";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import styled from "styled-components";

export default function ReminderTitleInput(){
    const reminder = useSelector((state) => state.reminder);
    const dispatch = useDispatch();
    const titleTextArea = useRef();
    const contentTextArea = useRef();
    const handleTitleArea = (e) => {
        titleTextArea.current.style.height = "auto";
        titleTextArea.current.style.height = titleTextArea.current.scrollHeight + 'px';
        dispatch(titleInput(e.target.value))
    }
    const handleContentArea = (e) => {
        contentTextArea.current.style.height = "auto";
        contentTextArea.current.style.height = contentTextArea.current.scrollHeight + 'px';
        dispatch(contentInput(e.target.value))
    }
    return(
        <>
            <BasicBox>
                <TextArea
                    placeholder="제목"
                    size='24px'
                    rows={1}
                    ref={titleTextArea}
                    value={reminder.title}
                    onChange={handleTitleArea}
                />
                <TextArea
                    placeholder="내용"
                    size='18px'
                    rows={1}
                    ref={contentTextArea}
                    value={reminder.content}
                    onChange={handleContentArea}
                />
            </BasicBox>
        </>
    )
}

const TextArea = styled.textarea`
  border: none;
  font-size: ${props => props.size};
  margin: 4px 0 0 4px;
  width: 100%;
  resize: none;

  &:focus {
    outline: none;
  }
`