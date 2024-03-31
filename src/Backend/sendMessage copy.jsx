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
