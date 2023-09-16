export default function ChatInput({ text }) {
  return (
    <div className="flex">
      <div className="chat-input">{text}</div>
      <div className="ml-2">😄</div>
    </div>
  );
}
