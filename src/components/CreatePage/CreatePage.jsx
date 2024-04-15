import { useEffect, useState } from "react";

export default function CreatePage() {
	const [message, setMessage] = useState()

	function createForm(event) {
		event.preventDefault()
		const formData = new FormData(event.target)

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: formData
		})
		event.target.reset()
		setMessage('Форма отправлена')
		
	}
	return (
		<>
			<h1>Добавление</h1>
			<form onSubmit={createForm}>
				<label>title</label>
				<input type="text" name="title" />
				<label>body</label>
				<textarea name="body"></textarea>
				<button type="submit">Добавить</button>
				{message}
				</form>
				</>
	)
}