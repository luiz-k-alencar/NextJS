import { useRouter } from "next/router";

// import styles from './index.module.css'
const PortfolioProjectPage = (props) => {
    const router = useRouter()

    return (
       <div>
           <h1>The {router.query.projectid} Page</h1>
       </div>
   )
}

export default PortfolioProjectPage;