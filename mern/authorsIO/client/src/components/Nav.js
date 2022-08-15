import {NavLink, Link, useLocation } from "react-router-dom";

export default function Nav() {

  let location = useLocation();
  console.log(location);

  let inActiveStyle = {
    display: "none"
  };

  // !isActive ? activeStyle : undefined

  return (
    <div className="App mt-3 ms-3 mb-2">
      <h2 className="mb-0">Favorite authors</h2>

      {
        (location.pathname != '/') ?
          <Link className='' to={'/'} >Home</Link>
        :
          <Link className='' to={'/new'} >Add an author</Link>
        
      }

      {/* <NavLink
            to="/" end
            style={({ isActive }) =>
              !isActive ? undefined : inActiveStyle
            }
          >
            Home
      </NavLink> 
      <NavLink
            to="/new" end
            style={({ isActive }) =>
              !isActive ? undefined : inActiveStyle
            }
          >
            Add an author
      </NavLink>
      <NavLink
            to="/edit" end
            style={({ isActive }) =>
              !isActive ? undefined : inActiveStyle
            }
          >
            Add an author
      </NavLink> */}

    </div>
  )
}
