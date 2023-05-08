import { FC } from "react";
import EventItem from "./EventItem";
import { EventType } from "@/models/event";

import styles from './EventList.module.css'

const EventList: FC<{ items: EventType[] }> = (props) => {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
