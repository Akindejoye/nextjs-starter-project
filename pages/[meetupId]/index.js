import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {

    return(
            <MeetupDetail
                image='https://images.pexels.com/photos/2676589/pexels-photo-2676589.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                title='First Meetup' 
                address='Some address 5, 12345 Some City'
                description='The meetup description'
            />
    );
}

export default MeetupDetails;