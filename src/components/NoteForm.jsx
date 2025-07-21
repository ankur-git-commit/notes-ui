import { useState } from "react"

function NoteForm({ notes, setNotes }) {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("Medium")
    const [category, setCategory] = useState("Work")
    const [description, setDescription] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(false)

    // const [formData, setFormData] = useState({
    //     title: "",
    //     priority: "Medium",
    //     category: "Work",
    //     description: "",
    // })

    // const handleChange = (e) => {
    //     const { name, value} = e.target

    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         [name]: value
    //     }))
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Validation
        if (!title || !description) {
            return
        }

        const newNote = {
            id: Date.now(),
            title,
            priority,
            category,
            description,
        }

        setNotes([newNote, ...notes])

        setTitle("")
        setPriority("Medium")
        setCategory("Work")
        setDescription("")
    }

    return (
        <>
            {/* { Toggle Button } */}
            <button
                onClick={() => setIsFormVisible(prevValue => !prevValue)}
                className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
            >
                {isFormVisible ? "Hide Form ✖️" : "Add New Note ➕"}
            </button>
            {isFormVisible && (
                <form className="mb-6" onSubmit={handleSubmit}>
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
                    <div className="mb-4">
                        <label
                            htmlFor="priority"
                            className="block font-semibold"
                        >
                            Priority
                        </label>
                        <select
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="High">🔴 High</option>
                            <option value="Medium">🟠 Medium</option>
                            <option value="Low">🟢 Low</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="category"
                            className="block font-semibold"
                        >
                            Category
                        </label>
                        <select
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Work">📂 Work</option>
                            <option value="Personal">🏠 Personal</option>
                            <option value="Ideas">💡 Ideas</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block font-semibold"
                        >
                            Description
                        </label>
                        <textarea
                            type="textarea"
                            className="w-full p-2 border rounded-lg"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
                        Add Note
                    </button>
                </form>
            )}
        </>
    )
}

export default NoteForm
