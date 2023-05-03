// import styles from './about.module.css'

import { useRouter } from "next/router";

const ClientPage = (props) => {
    const route = useRouter()

    return (
      <div>
        <h1>The {route.query.id} Page</h1>
      </div>
    );
  };
  
  export default ClientPage;
  