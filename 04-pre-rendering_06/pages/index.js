import EventList from '../components/events/event-list';
import { getAllEvents } from '../helpers/api-util';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvent = await getAllEvents();

  return {
    props: {
      events: featuredEvent,
    },
    revalidate: 1800,
  };
}


export default HomePage;
