import React from "react";
import NewsItem from "./News_list_item";

const newsList = props => {
  // for(i=0; i < Array.length; i++) {
  //   //this is the same as map function we're running
  // }
  //
  // props.news.map(function(){
  //   // is the same as the arrow function we're passing
  // })
  const items = props.news.map(item => {
    return <NewsItem key={item.id} item={item} />;
  });

  return <div>{items}</div>;
};

export default newsList;
