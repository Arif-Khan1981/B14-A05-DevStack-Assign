const StackCard = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm pt-10 pl-2">
      
      {/* Heading */}
      <h3 className="text-xl font-bold text-gray-900">
        Your Stack
      </h3>

      {/* Subtext */}
      <p className="mt-1 text-sm text-gray-400">
        No technologies selected yet.
      </p>

      {/* Empty state box */}
      <div className="mt-5 flex min-h-33 items-center justify-center rounded-xl border border-dashed border-gray-200">
        <p className="text-sm text-gray-400">
          Your stack is empty.
        </p>
      </div>

    </div>
  );
};

export default StackCard;