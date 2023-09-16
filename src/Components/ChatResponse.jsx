export default function ChatResponse({ text }) {
  return (
    <div className="flex">
      <div className="mr-2">🤖</div>
      <div className="chat-response">{text}</div>
    </div>
  );
}
