// from Geeks for Geeks React/php walkthrough

// Note to you from the future, this kicks out a
// "No 'Access-Control-Allow-Origin' header is present on the requested resource"
// error. So I think I'mma have to go a different way...

import { useState } from "react";
import $ from "jquery";
import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [result, setResult] = useState("");

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = $(e.target);
		$.ajax({
			type: "POST",
			url: form.attr("action"),
			data: form.serialize(),
			success(data) {
				setResult(data);
			},
		});
	};

	return (
		<div className="App">
			<form
				action="http://localhost:8000/server.php"
				method="post"
				onSubmit={(event) => handleSubmit(event)}
			>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={(event) => handleChange(event)}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			<h1>{result}</h1>
		</div>
	);
}

export default App;
