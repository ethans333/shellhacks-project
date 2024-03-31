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

export default async function sendMessage(message) {
  return await API.post("api", "/chat", {
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      messages: message,
    },
  });
}
