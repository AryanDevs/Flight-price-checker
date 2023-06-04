let respObj = {
  meta: {
    count: 3,
    links: {
      self: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=DEL&destinationLocationCode=SIN&departureDate=2023-07-02&adults=1&nonStop=true&currencyCode=INR&max=3",
    },
  },
  data: [
    {
      type: "flight-offer",
      id: "1",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2023-07-02",
      lastTicketingDateTime: "2023-07-02",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT6H",
          segments: [
            {
              departure: {
                iataCode: "DEL",
                terminal: "3",
                at: "2023-07-02T23:45:00",
              },
              arrival: {
                iataCode: "SIN",
                terminal: "3",
                at: "2023-07-03T08:15:00",
              },
              carrierCode: "UK",
              number: "115",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "UK",
              },
              duration: "PT6H",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "INR",
        total: "20428.00",
        base: "18115.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "20428.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["UK"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "INR",
            total: "20428.00",
            base: "18115.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "KOINYV",
              brandedFare: "ECOYV",
              class: "K",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "2",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2023-07-02",
      lastTicketingDateTime: "2023-07-02",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT6H",
          segments: [
            {
              departure: {
                iataCode: "DEL",
                terminal: "3",
                at: "2023-07-02T13:15:00",
              },
              arrival: {
                iataCode: "SIN",
                terminal: "2",
                at: "2023-07-02T21:45:00",
              },
              carrierCode: "AI",
              number: "382",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "AI",
              },
              duration: "PT6H",
              id: "1",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "INR",
        total: "20437.00",
        base: "14800.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "20437.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["AI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "INR",
            total: "20437.00",
            base: "14800.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "LOWDLSG",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "3",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2023-07-02",
      lastTicketingDateTime: "2023-07-02",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT5H40M",
          segments: [
            {
              departure: {
                iataCode: "DEL",
                terminal: "3",
                at: "2023-07-02T23:15:00",
              },
              arrival: {
                iataCode: "SIN",
                terminal: "2",
                at: "2023-07-03T07:25:00",
              },
              carrierCode: "AI",
              number: "380",
              aircraft: {
                code: "788",
              },
              operating: {
                carrierCode: "AI",
              },
              duration: "PT5H40M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "INR",
        total: "23377.00",
        base: "17600.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "23377.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["AI"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "INR",
            total: "23377.00",
            base: "17600.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "GOWDLSG",
              class: "G",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      SIN: {
        cityCode: "SIN",
        countryCode: "SG",
      },
      DEL: {
        cityCode: "DEL",
        countryCode: "IN",
      },
    },
    aircraft: {
      320: "AIRBUS A320",
      321: "AIRBUS A321",
      788: "BOEING 787-8",
    },
    currencies: {
      INR: "INDIAN RUPEE",
    },
    carriers: {
      UK: "VISTARA",
      AI: "AIR INDIA",
    },
  },
};

const dataArray = respObj.data;
console.log(respObj.dictionaries);
let airs = Object.keys(respObj.dictionaries.carriers);
airs.forEach((el) => console.log(el));

let airlines = new Map();
for (key in respObj.dictionaries.carriers) {
  airlines.set(key, respObj.dictionaries.carriers[key]);
}

let finalOutput = [];
dataArray.forEach((element) => {
  const firstSegment = element.itineraries[0].segments[0];
  let flight = {
    airline: airlines.get(firstSegment.carrierCode),
    price: element.price.total,
    flightnumber: `${firstSegment.carrierCode} ${firstSegment.number}`,
  };
  console.log(flight);
  finalOutput.push(flight);
});
// console.log(airlines);
console.log(finalOutput);

// console.log(dataArray);

// app.get("", async (req, res) => {
//   res.status(200).send("Noice!");
// });

// app.post("/test", (req, res) => {
//   console.log(req.body);
//   res.status(200).json({ "we recieved": req.body });
// });

// app.post("/flights", async (req, res) => {
//   try {
//     const requestBody = qs.stringify({
//       grant_type: "client_credentials",
//       client_id: "zLcSdAl83GSysYaSuecNj3KGKyCkCNJn",
//       client_secret: "KgHbAFA18WUSx2cB",
//     });

//     const config = {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     };

//     const response = await axios.post(
//       "https://test.api.amadeus.com/v1/security/oauth2/token",
//       requestBody,
//       config
//     );

//     const accessToken = response.data.access_token;

//     console.log(accessToken);
//     const fresponse = await axios.get(
//       `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${req.body.from}&destinationLocationCode=${req.body.to}&departureDate=${req.body.date}&adults=${req.body.passengers}&nonStop=true&currencyCode=INR&max=3`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     console.log("yaha tak to sab theek tha hi");
//     const respObj = fresponse.data;

//     let airlines = new Map();

//     for (key in respObj.dictionaries.carriers) {
//       airlines.set(key, respObj.dictionaries.carriers[key]);
//     }

//     let dataArray = respObj.data;
//     let finalOutput = [];
//     dataArray.forEach((element) => {
//       const firstSegment = element.itineraries[0].segments[0];
//       let flight = {
//         airline: airlines.get(firstSegment.carrierCode),
//         price: element.price.total,
//         flightnumber: `${firstSegment.carrierCode} ${firstSegment.number}`,
//       };
//       finalOutput.push(flight);
//     });

//     res.status(200).send(finalOutput);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.post("/flights2", async (req, res) => {
//   try {
//     const requestBody = qs.stringify({
//       grant_type: "client_credentials",
//       client_id: "zLcSdAl83GSysYaSuecNj3KGKyCkCNJn",
//       client_secret: "KgHbAFA18WUSx2cB",
//     });

//     const config = {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     };

//     const response = await axios.post(
//       "https://test.api.amadeus.com/v1/security/oauth2/token",
//       requestBody,
//       config
//     );

//     const accessToken = response.data.access_token;

//     console.log(accessToken);
//     const fresponse = await axios.get(
//       `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${req.query.from}&destinationLocationCode=${req.query.to}&departureDate=${req.query.date}&adults=${req.query.passengers}&nonStop=true&currencyCode=INR&max=3`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     const respObj = fresponse.data;

//     let airlines = new Map();

//     for (key in respObj.dictionaries.carriers) {
//       airlines.set(key, respObj.dictionaries.carriers[key]);
//     }

//     let dataArray = respObj.data;
//     let finalOutput = [];
//     dataArray.forEach((element) => {
//       const firstSegment = element.itineraries[0].segments[0];
//       let flight = {
//         airline: airlines.get(firstSegment.carrierCode),
//         price: element.price.total,
//         flightnumber: `${firstSegment.carrierCode} ${firstSegment.number}`,
//       };
//       finalOutput.push(flight);
//     });

//     res.status(200).send(finalOutput);
//   } catch (error) {
//     res.status(500).send("error");
//   }
// });
