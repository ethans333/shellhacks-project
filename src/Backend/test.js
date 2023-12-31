import { Amplify, API } from "aws-amplify";
Amplify.configure({
  // OPTIONAL - if your API requires authentication
  Auth: {
    mandatorySignIn: false,
  },
  API: {
    endpoints: [
      {
        name: "api",
        endpoint: "https://do4p2218i6.execute-api.us-east-1.amazonaws.com/dev",
      },
    ],
  },
});

const response = await API.post("api", "/education", {
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    Name: "Ethan",
    Age: "21",
    Goal: "Purchase a Home",
    Explanation: "Explain like im in a student in highschool.",
    Language: "English",
  },
});

console.log(response);
