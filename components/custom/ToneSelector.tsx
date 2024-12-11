const ToneSelector = ({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) => {
    return (
      <div className="mt-0">
        <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
          Select Tone:
        </label>
        <select
          id="tone"
          value={value}
          onChange={onChange}
          className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500  mb-4"
        >
          <option value="formal">Formal🎩</option>
          <option value="playful">Casual 😎</option>
          <option value="humorous">Humorous 😂</option>
          <option value="inspiring">Inspiring 🌟</option>
          <option value="emotional">Emotional 😢</option>
          <option value="persuasive">Persuasive 🗣️</option>

        </select>
      </div>
    );
  };
  
  export default ToneSelector;
  