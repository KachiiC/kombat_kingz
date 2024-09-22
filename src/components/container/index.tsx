import { SiteFooter } from "../Footer";
import { SiteNavbar } from "../Navbar";
import './Container.scss'

interface IPageContainer {
  children: JSX.Element;
}

export const PageContainer = ({ children }: IPageContainer) => {
  return (
    <>
      <SiteNavbar />
      <div className="page-container">{children}</div>
      <SiteFooter />
    </>
  );
};
