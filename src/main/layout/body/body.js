import Title from "../../components/title/title";
import "./body.scss";
import { useAPI } from "../../context/apiContext";
import Card from "../../components/card/card";
import ErrorCard from "../../components/errorCard/errorCard";

/**
 * This component works as the main view of the board page.
 */
function Body() {
  const { data, loading } = useAPI();

  /**
   * @param arr takes the docs array from the api response
   * @returns grouped new object to be used in Card component
   */
  function group(arr) {
    return arr.reduce(function (res, obj) {
      var key = obj.first_publish_year;
      var newObj = { obj };
      if (newObj.obj && newObj.obj.language) {
        if (newObj.obj.language?.includes("eng")) {
          if (res[key]) {
            res[key].push(newObj);
          } else {
            res[key] = [newObj];
          }
        }
      }
      return res;
    }, {});
  }

  /**
   * This functions maps the object and renders the card components
   */
  const renderCards = () => {
    let bookObject = group(data.docs);
    return Object.keys(bookObject).map(function (year, index) {
      return (
        <Card
          key={index}
          data={bookObject[year]}
          year={year}
          colorKey={index}
        />
      );
    });
  };

  /**
   * This functions decides which component will be rendered according to the api response
   */
  const renderPages = () => {
    if (data && data?.numFound > 0) {
      return <div className="cardContainer">{renderCards()}</div>;
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
