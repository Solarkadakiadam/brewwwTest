import Title from "../../components/title/title";
import "./body.scss";
import { useAPI } from "../../context/apiContext";
import Card from "../../components/card/card";
import ErrorCard from "../../components/errorCard/errorCard";

function Body() {
  const { data, loading } = useAPI();

  function group(arr) {
    return arr.reduce(function (res, obj) {
      var key = obj.first_publish_year;
      var newObj = { obj };
      if (res[key]) res[key].push(newObj);
      else res[key] = [newObj];
      return res;
    }, {});
  }

  const renderPages = () => {
    if (data && data?.numFound > 0) {
      let bookObject = group(data.docs);
      return (
        <div className="cardContainer">
          {Object.keys(bookObject).map(function (year, index) {
            return (
              <Card
                key={index}
                data={bookObject[year]}
                year={year}
                colorKey={index}
              />
            );
          })}
        </div>
      );
    }
    if (loading === false) {
      return <ErrorCard />;
    } else {
      return null;
    }
  };

  return (
    <div className="container">
      <Title />
      <div className="containerBody">{renderPages()}</div>
    </div>
  );
}

export default Body;
