import TaskList from "../components/TaskList";
import HomeBox from "../components/HomeBox";
import HomeList from "../components/HomeList";
import {dummyNoticeData, dummyTaskData} from "../resources/dummy";

export default function HomeContainer(){
    return(
        <>
            <HomeBox boxTitle={'Today\'s Reminder'}>
                <HomeList listData={dummyTaskData}/>
            </HomeBox>
            <HomeBox boxTitle={'Notification'}>
                <HomeList listData={dummyNoticeData}/>
            </HomeBox>
        </>
    )
}
