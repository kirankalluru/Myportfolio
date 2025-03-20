import React, { useState, useEffect } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Drinks = () => {
  const [drinksdata, setDrinksdata] = useState([]);
  const [searchterm, setSearchterm] = useState("");

  const Fetchdrink = async (URL) => {
    const response = await fetch(URL);
    const { drinks } = await response.json();
    setDrinksdata(drinks);
  };

  useEffect(() => {
    const correctURL=`${URL}${searchterm}`
    Fetchdrink(correctURL);
  }, [searchterm]);

  return (
    <div className="min-h-screen bg-black-400 flex flex-col justify-center align-middle p-4">
        <div className="mb-2">
        <h1 className="text-purple-600 text-2xl font-bold">Enjoy your Drink🍷</h1>
        </div>
      <form className="mb-4">
        <input
          className="p-2 border rounded bg-gray-300 text-purple-500 text-xl w-full"
          id="search"
          name="search"
          type="text"
          placeholder="Enter drink"
          onChange={(e)=>{
            setSearchterm(e.target.value);
          }}
        />
      </form>
      <hr className="mb-4" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {drinksdata &&
          drinksdata.map((eachdrink) => {
            const { idDrink, strDrink, strDrinkThumb,strCategory } = eachdrink;
            return (
              <li key={idDrink} className="bg-black rounded shadow p-4">
                <div className="mb-2 overflow-hidden">
                  <img
                    src={strDrinkThumb}
                    alt={strDrink}
                    className="h-48 w-full object-cover rounded hover:scale-125  duration-500 cursor-pointer"
                  />
                </div>
                <div>
                  <h3 className="text-lg text-purple-500 font-semibold">{strDrink}</h3>
                </div>
                <div>
                  <p className="text-sm text-purple-500 font-semibold">Category: <span className="text-red-400">{strCategory}</span></p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Drinks;
