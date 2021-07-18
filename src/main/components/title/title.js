import "./title.scss";
import { useAPI } from "../../context/apiContext";
import { useState } from "react";
import Spinner from "../spinner/spinner";

function Title() {
  const { setAuthor, loading, author, data } = useAPI();
  const [text, setText] = useState("");

  console.log(data, "burdaki");

  const searchAuthor = () => {
    if (text === "") {
      alert("Please Enter a author id");
      return;
    }
    if (text === author) {
      alert("Please enter a different author id");
      return;
    }
    setAuthor(text);
  };

  return (
    <div className="title">
      <div>
        <h2>Lorem Board</h2>
      </div>
      <div className="form-element">
        <label htmlFor="searchInput">books of</label>
        <input
          onChange={(event) => {
            event.preventDefault();
            setText(event.target.value);
          }}
          type="text"
          name="searchInput"
          id="searchInput"
        />
      </div>
      <button onClick={searchAuthor}>submit</button>
      {loading ? (
        <Spinner />
      ) : (
        <h2 className="authorName">{data?.docs[0]?.author_name}</h2>
      )}
    </div>
  );
}

export default Title;
