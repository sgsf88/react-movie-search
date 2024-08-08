export default function Radio({ children, checked, name, value, onChange }) {
  return (
    <label className="radio">
      <input
        type="radio"
        className="blind"
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
      />
      {children}
    </label>
  );
}
