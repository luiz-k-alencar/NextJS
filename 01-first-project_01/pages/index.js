// import styles from './index.module.css'

import Link from "next/link";

const BlogPage = (props) => {
  return (
    <div>
      <h1>The Blog Page</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portifólio</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPage;
