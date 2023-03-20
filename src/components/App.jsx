import { Header } from "./Header/Header";
import headerUrls from "../data/header_link";

export const App = () => {
  return (
    <>
      <Header items={headerUrls} />
    </>
  );
};