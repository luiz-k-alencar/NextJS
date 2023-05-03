// import styles from './index.module.css'

import { useRouter } from "next/router";

const HomePage = (props) => {
    const route = useRouter()
    
    console.log(route.query.slug)

    return (
      <div>
        <h1>The Home Page</h1>
      </div>
    );
  };
  
  export default HomePage;
  