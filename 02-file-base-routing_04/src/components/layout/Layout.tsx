import { FC, ReactNode } from "react";
import MainHeader from "./mainHeader";

const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
