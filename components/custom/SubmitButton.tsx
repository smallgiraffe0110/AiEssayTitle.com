const SubmitButton = ({ onClick }: { onClick: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="mt-6 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Generate Title
      </button>
    );
  };
  
  export default SubmitButton;
  