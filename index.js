const handleCatagory = async () => {
    console.log("HELLO")
    
   const response = await fetch ("https://openapi.programming-hero.com/api/news/categories");
   const data = await response.json();
   console.log(data.data.news_category);
};
handleCatagory();