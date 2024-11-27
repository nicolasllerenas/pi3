export default function Button({ href, text }) {
  return (
    <a
      href={href}
      className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
    >
      {text}
    </a>
  );
}
