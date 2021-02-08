import { FunctionComponent } from "react";
import Link from "next/link";

interface Props {}
const Header: FunctionComponent<Props> = () => {
  return (
    <div className="header">
      <h2 className="title">Testing With Recoil And TypeScript</h2>
      <div className="links">
        <Link href="/todo">Todo</Link>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
