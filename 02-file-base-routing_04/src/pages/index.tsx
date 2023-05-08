import EventList from "@/components/events/EventList";

import { getFeaturedEvents } from "@/dummy-data";

// import styles from "./index.module.css";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  );
};

export default HomePage;
