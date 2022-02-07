import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://images.pexels.com/photos/2676589/pexels-photo-2676589.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        address: 'Some address 5, 123456 Some City',
        description: 'This is a second meetup!'
    }
];

const HomePage = (props) => {

    return(
        <MeetupList meetups={props.meetups} />
    )
}

export const getServerSideProps = async (context) => {
    const req = context.req;
    const res = context.res;
    
    // fetch data from an API

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

// export const getStaticProps = async () => {
//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 1
//     };
// };

export default HomePage;