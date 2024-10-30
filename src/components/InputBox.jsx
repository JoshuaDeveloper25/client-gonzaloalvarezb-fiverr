const InputBox = ({ labelTitle, propInput }) => {
  return (
    <label className="mb-4 block">
      <span className="block text-lg text-gray-700 font-normal">
        {labelTitle} {propInput.required && "*"}
      </span>

      <input className="input" {...propInput} />
    </label>
  );
};

export default InputBox;
