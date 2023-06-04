const qs = require("qs");
const axios = require("axios");

exports.getflights1 = async (req, res) => {
  try {
    const requestBody = qs.stringify({
      grant_type: "client_credentials",
      client_id: process.env.API_KEY,
      client_secret: process.env.API_SECRET,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      requestBody,
      config
    );

    const accessToken = response.data.access_token;

    console.log(accessToken);
    const fresponse = await axios.get(
      `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${req.query.from}&destinationLocationCode=${req.query.to}&departureDate=${req.query.date}&adults=${req.query.passengers}&nonStop=true&currencyCode=INR&max=3`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const respObj = fresponse.data;

    let airlines = new Map();

    for (key in respObj.dictionaries.carriers) {
      airlines.set(key, respObj.dictionaries.carriers[key]);
    }

    let dataArray = respObj.data;
    let finalOutput = [];
    dataArray.forEach((element) => {
      const firstSegment = element.itineraries[0].segments[0];
      let flight = {
        airline: airlines.get(firstSegment.carrierCode),
        price: element.price.total,
        flightnumber: `${firstSegment.carrierCode} ${firstSegment.number}`,
      };
      finalOutput.push(flight);
    });

    res.status(200).json({
      success: true,
      flights: finalOutput,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: "Wrong request",
    });
  }
};
