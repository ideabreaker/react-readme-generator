const Alert = (props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.code);
    props.setCode("");
  };

  const handleClose = () => {
    props.setCode("");
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="max-h-screen-sm max-w-screen-m rounded-lg bg-white p-8">
        <h3 className="text-lg font-medium">Generated code</h3>
        <p className="relative">
          <pre className="h-80 overflow-y-auto rounded bg-gray-200 p-2">
            <code>{props.code || "siema"}</code>
          </pre>
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleClose}
            className="mt-6 rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
          >
            Close
          </button>
          <button
            onClick={handleCopy}
            className="mt-6 ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
