
// Navbar Component
export const Navbar = ({ setCategory }) => {
  // Handle form submission if necessary (placeholder logic)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add search logic here (if needed)
    console.log("Search submitted");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Logo section */}
        <a className="navbar-brand" href="#">
          <img
            src="src/assets/1.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
          <span className="badge bg-light text-dark fs-10">HiveReport</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation links for categories */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("general")}>
                Home
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("technology")}>
                Tech
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("science")}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("entertainment")}>
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};