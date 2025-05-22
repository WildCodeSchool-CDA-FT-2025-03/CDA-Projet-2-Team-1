export default function Rolelist() {
  return (
    <div className="w-64">
      <label htmlFor="options" className="block mb-2 text-sm font-medium text-gray-700">
        Choisissez une option
      </label>
      <select
        id="options"
        className="block w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700"
      >
        <option>Admin</option>
        <option>Medecin</option>
        <option>Secretaire</option>
        <option>Agent</option>
      </select>
    </div>
  );
}
