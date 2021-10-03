import React from "react";

const Dialog = ({ showDialog, setShowDialog, setRole, setShowEmployee }) => {
	const changeHnadler = (e) => {
		setRole(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setShowEmployee(true);
		setShowDialog(false);
	};

	return (
		<div className="dialog" style={{ display: showDialog ? "block" : "none" }}>
			<button onClick={() => setShowDialog(false)}>X</button>
			<h2>בחר תפקיד</h2>
			<form onSubmit={submitHandler}>
				<label htmlFor="manger">מנהל משמרת</label>
				<input
					type="radio"
					name="role"
					value="manger"
					onChange={(e) => changeHnadler(e)}
				/>{" "}
				<br />
				<label htmlFor="seller">מוכר</label>
				<input
					type="radio"
					name="role"
					value="seller"
					onChange={(e) => changeHnadler(e)}
				/>{" "}
				<br />
				<button type="submit" style={{ marginTop: "15px" }}>
					אישור
				</button>
			</form>
		</div>
	);
};

export default Dialog;
