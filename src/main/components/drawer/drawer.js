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
              <span>470</span>
            </div>
            <div className="drawerSecondSubSection">
              <img src={study} alt="icon" />
              <span>32 hours read time</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Drawer;
