import "./drawer.scss";
import { useState } from "react";
import right from "../../../assets/icons/right.png";
import down from "../../../assets/icons/down.png";
import study from "../../../assets/icons/study.png";
import pages from "../../../assets/icons/pages.png";

/**
 * This is the drawer component within the card.
 */
function Drawer(props) {
  const { book } = props;
  const [open, setOpen] = useState(false);

  /** random page number that ranges from hobbit to the lord of the rings */
  const randomPageNumber = Math.floor(Math.random() * 1178) + 310;
  /** avarage read time according to the page number */
  const readTime = Math.floor(randomPageNumber / 40);

  return (
    <div className="drawer">
      <div onClick={() => setOpen(!open)} className="drawerTitle">
        <span>{book.title}</span>
        <img src={open ? down : right} alt="icon" />
      </div>
      {open && (
        <div className="drawerBody">
          <div className="drawerSubSection">
            <div className="editions">
              <span>{book.edition_count} Editions</span>
            </div>
            <span>First Published: {book.first_publish_year}</span>
          </div>
          <div className="drawerSubSection">
            <div className="drawerSecondSubSection">
              <img src={pages} alt="icon" />
              <span>{randomPageNumber}</span>
            </div>
            <div className="drawerSecondSubSection">
              <img src={study} alt="icon" />
              <span>{readTime} hours read time</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Drawer;
