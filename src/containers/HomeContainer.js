import HomeBox from "../components/HomeBox";
import HomeList from "../components/HomeList";
import {dummyNoticeData, dummyTaskData} from "../resources/dummy";
import {useSelector} from "react-redux";
import {useGetReminderQuery} from "../api/jsonApi";

export default function HomeContainer(){
    const {data, error, isLoading} = useGetReminderQuery();

    if(isLoading) return 'Loading...'
    if(error)return 'Error'

    return(
        <>
            <HomeBox boxTitle={'Today\'s Reminder'}>
                <HomeList listData={data}/>
            </HomeBox>
            <HomeBox boxTitle={'Notification'}>
                <HomeList listData={dummyNoticeData}/>
            </HomeBox>
        </>
    )
}
