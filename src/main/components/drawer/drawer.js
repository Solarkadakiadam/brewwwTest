import "./drawer.scss";
import { useState } from "react";
import right from "../../../styles/icons/right.png";
import down from "../../../styles/icons/down.png";
import study from "../../../styles/icons/study.png";
import pages from "../../../styles/icons/pages.png";

function Drawer(props) {
  const { book } = props;
  const [open, setOpen] = useState(false);
  console.log(book.title, "selam");
  return (
    <div class="drawer">
      <div onClick={() => setOpen(!open)} class="drawerTitle">
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
              <span>320</span>
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
