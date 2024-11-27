export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
