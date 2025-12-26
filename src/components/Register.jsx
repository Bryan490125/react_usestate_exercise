import { useState } from "react";

export default function Register() {
  const genders = ["Male", "Female", "Other"];
  const hobbiesList = ["Music", "Movies", "Plastic Model"];
  const roles = ["General Staff", "Developer", "System Analyst"];

  const [form, setForm] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    hobbies: [],
    role: "General Staff",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleHobbyToggle(e) {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      hobbies: checked
        ? [...prev.hobbies, value]
        : prev.hobbies.filter((h) => h !== value),
    }));
  }

  return (
    <div style={{ width: 320, margin: "20px auto", fontFamily: "serif" }}>
      <div>
        <label>Username</label><br />
        <input name="username" value={form.username} onChange={handleChange} />
      </div>

      <div>
        <label>Firstname</label><br />
        <input name="firstname" value={form.firstname} onChange={handleChange} />
      </div>

      <div>
        <label>Lastname</label><br />
        <input name="lastname" value={form.lastname} onChange={handleChange} />
      </div>

      <div>
        <label>Gender</label><br />
        {genders.map((g) => (
          <div key={g}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={form.gender === g}
              onChange={handleChange}
            />{" "}
            {g}
          </div>
        ))}
      </div>

      <div>
        <label>Hobbies</label><br />
        {hobbiesList.map((h) => (
          <div key={h}>
            <input
              type="checkbox"
              value={h}
              checked={form.hobbies.includes(h)}
              onChange={handleHobbyToggle}
            />{" "}
            {h}
          </div>
        ))}
      </div>

      <div>
        <label>Role</label><br />
        <select name="role" value={form.role} onChange={handleChange}>
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <hr />

      <p><b>Username:</b> {form.username}</p>
      <p><b>Firstname:</b> {form.firstname}</p>
      <p><b>Lastname:</b> {form.lastname}</p>
      <p><b>Gender:</b> {form.gender}</p>
      <p><b>Hobbies:</b> {form.hobbies.join(", ")}</p>
      <p><b>Role:</b> {form.role}</p>
    </div>
  );
}
