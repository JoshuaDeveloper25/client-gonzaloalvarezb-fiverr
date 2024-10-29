const InputBox = ({ labelTitle, propInput, type = 'text' }) => {
  return (
    <label className="mb-10 block">
      <span className="block text-lg font-semibold">
        {labelTitle} {propInput.required && '*'}
      </span>

      <input
        className="input"
        type={type}
        {...propInput}
      />
    </label>
  );
};

export default InputBox;
