import config from "../configs";

const makeAPICall = async (
  { fromLatLong, fromLatLongTwo, toLatLong, toLatLongTwo, method = "POST" },
  ...customConfigs
) => {
  const configs = {
    method,
    ...customConfigs,
  };

  return window
    .fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${fromLatLong},${fromLatLongTwo}&destinations=${toLatLong},${toLatLongTwo}&key=${config.GOOGLE_API}`,
      configs
    )
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export default makeAPICall;


// import config from '../configs';
// const makeAPICall = async (
//     { fromLatLong, fromLatLongTwo, toLatLong, toLatLongTwo, method = "POST"},
//     ...customConfigs
//   ) => {
  
//     const configs = {
//       method,
//       ...customConfigs,
//       headers: {"Access-Control-Allow-Origin": "*" }
//     };
  
//     // return window.fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${fromLatLong},${fromLatLongTwo}&destinations=${toLatLong},${toLatLongTwo}&key=AIzaSyD8mgPJGYmmHYjCg7JlAn87pJ7DdLkBLro`, configs)
//     return window.fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${fromLatLong},${fromLatLongTwo}&destinations=${toLatLong},${toLatLongTwo}&key=${config.GOOGLE_API}`, configs)
//       .then((response) => response.json())
//       .catch((err) => err);
//   };
  
//   export default makeAPICall;