const EssayInputBox = ({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) => {
    return (
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Paste your essay here..."
        className="w-full h-40 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
    );
  };
  
  export default EssayInputBox;

  