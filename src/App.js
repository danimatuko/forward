import { useState } from "react";
import "./App.css";
import Dialog from "./Dialog";
import employees from "./db";

const App = () => {
	const [id, setId] = useState("");
	const [showDialog, setShowDialog] = useState(false);
	const [employee, setEmployee] = useState(null);
	const [role, setRole] = useState(null);
	const [showEmployee, setShowEmployee] = useState(false);
	const [error, setError] = useState(null);

	const changeHandler = (e) => setId(e.target.value);

	const submithandler = (e) => {
		e.preventDefault();
		setError(null);
		const employee = employees.find((employee) => employee.id == id);
		if (!employee) {
			setError("עובד לא קיים");
		} else {
			setEmployee(employee);
			if (employee.roles.length > 1) {
				setShowDialog(true);
			} else {
				setRole(employee.roles[0]);
				setShowEmployee(true);
			}
		}

		setId("");
	};

	return (
		<div className="App">
			<div className="container">
				{showEmployee ? (
					<div className="employee">
						<div>{employee && employee.name}</div>
						<div>תפקיד:{role == "manger" ? "מנהל משמרת" : "מוכר"}</div>
						<button className="exit" onClick={() => setShowEmployee(false)}>
							יציאה
						</button>
					</div>
				) : (
					<>
						<form onSubmit={submithandler}>
							<h1>כניסה</h1>
							<input
								name="id"
								type="text"
								placeholder="הכנס מספר זהות"
								value={id}
								onChange={(e) => changeHandler(e)}
							/>
							<button type="submit">אישור</button>
							{error && <div className="error">{error}</div>}
						</form>
						<Dialog
							showDialog={showDialog}
							setShowDialog={setShowDialog}
							setShowEmployee={setShowEmployee}
							role={role}
							setRole={setRole}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default App;
