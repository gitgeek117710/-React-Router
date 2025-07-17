import { NavLink, Outlet } from "react-router-dom";

export default function ProfilePage() {
    const profiles = [1, 2, 3, 4, 5];
    return (
        <div>
            <h1>Profiles Page</h1>
            {profiles.map((profile) => (
                <p>
                    <NavLink key={profile} to={`/profiles/${profile}`} className={({ isActive }) => {
                        return isActive ? 'text-primary-700' : '';
                    }}>
                        Profile {profile}
                    </NavLink>
                </p>

            ))}
            <hr />
            <Outlet />
        </div>
    );
}