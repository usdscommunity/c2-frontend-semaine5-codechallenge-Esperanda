export default function ExtensionCard({ logo, name, description, isActive }) {
  return (
    <article className="extension-card">
      <div className="left-column">
        <div className="logo-container">
          <img src={logo} alt={`${name} logo`} />
        </div>
        <div className="text-container">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="actions">
        <button className="remove-btn">Remove</button>
        <label className="toggle-switch">
          <input type="checkbox" checked={isActive} readOnly />
          <span className="slider"></span>
        </label>
      </div>
    </article>
  );
}
