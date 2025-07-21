import { useState } from "react"

function NoteForm() {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("Medium")
    const [category, setCategory] = useState("Work")
    const [description, setDescription] = useState("")


    return (
        <form className="mb-6">
            <div className="mb-4">
                <label htmlFor="title" className="block font-semibold">
                    Title
                </label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
        </form>
    )
}

export default NoteForm
