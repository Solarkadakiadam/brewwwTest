import Title from "../../components/title/title";
import "./body.scss";
import { useAPI } from "../../context/apiContext";
import { useState } from "react";
import Card from "../../components/card/card";

function Body() {
  const { data } = useAPI();

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
      var dataToSend = [data.docs[0], data.docs[2], data.docs[1]];
      return (
        <div className="cardContainer">
          {/* {data.docs.map((item)=>{
         return <Card data= {item}/>
       })} */}

          <Card data={dataToSend} />
          <Card data={dataToSend} />
          <Card data={dataToSend} />
          <Card data={dataToSend} />
          <Card data={dataToSend} />
          <Card data={dataToSend} />
        </div>
      );
    } else {
      return <div>no data found</div>;
    }
  };

  return (
    <div className="body">
      <Title />
      {renderPages()}
    </div>
  );
}

export default Body;
