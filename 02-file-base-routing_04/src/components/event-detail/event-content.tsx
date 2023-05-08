import { FC, ReactNode } from 'react';
import classes from './event-content.module.css';

const EventContent: FC<{children: ReactNode}> = (props) => {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
