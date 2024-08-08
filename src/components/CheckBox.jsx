export default function CheckBox({ children, checked, onChange }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        className="blind"
      />
      {children}
    </label>
  );
}
