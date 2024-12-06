// rrd imports
import { Form, NavLink } from "react-router-dom";

// library
import { TrashIcon } from '@heroicons/react/24/solid';

// assets
import logomark from "../assets/logo.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      {/* Home Link */}
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <img src={logomark} alt="HomeBudget Logo" height={30} />
        <span>HomeBudget</span>
      </NavLink>

      {/* Game Link */}
      <NavLink
        to="/game"
        aria-label="Play Rock-Paper-Scissors"
      >
        <span>Play Game</span>
      </NavLink>

      {/* Delete User Action */}
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
