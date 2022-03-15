import CustomLink from "../../customize/CustomLink";
import { linksMain, linksTheme } from "../../links";
import "./sideBar.scss";


const SideBar = () => {

    const showLinks = (links) => {
        return links.map((link, index) => {
            return (
                <CustomLink
                    key={index}
                    to={link.to}
                >
                    <i className={link.icon}></i>
                    <span>{link.name}</span>
                </CustomLink>
            )
        })
    }

    return (
        <>
            <ul className="options-content">
                {showLinks(linksMain)}
            </ul>

            <ul className="options-history">
                <h5>BEST OF YOUTUBE</h5>
                {showLinks(linksTheme)}
            </ul>
        </>
    )
}

export default SideBar;