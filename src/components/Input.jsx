export default function Input({ title, onWriting }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">{title}</label>
      <input
        className="w-md border-2 border-gray-700 focus:outline focus:outline-yellow-500 focus:border-yellow-500 rounded-sm mb-2"
        type="number"
        onChange={onWriting}
      />
    </div>
  );
}
