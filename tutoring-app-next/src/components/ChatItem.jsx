export default function ChatItem({ name, lastMessage, time }) {
  return (
    <div className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{lastMessage}</p>
      </div>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  );
}
