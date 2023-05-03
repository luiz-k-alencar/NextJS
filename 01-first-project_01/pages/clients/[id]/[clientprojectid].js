// import styles from './about.module.css'

import { useRouter } from "next/router";

const ClientProjectPage = (propProject) => {
    const route = useRouter()

    return (
      <div>
        <h1>The client project {route.query.clientprojectid} Page</h1>
      </div>
    );
  };
  
  export default ClientProjectPage;
  