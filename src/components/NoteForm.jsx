import { useState } from "react"
import TextInput from "./inputs/TextInput"
import SelectInput from "./inputs/SelectInput"
import TextAreaInput from "./inputs/TextAreaInput"

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
                onClick={() => setIsFormVisible((prevValue) => !prevValue)}
                className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
            >
                {isFormVisible ? "Hide Form ✖️" : "Add New Note ➕"}
            </button>
            {isFormVisible && (
                <form className="mb-6" onSubmit={handleSubmit}>
                    <TextInput
                        label="Title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <SelectInput
                        label="Priority"
                        name="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        options={[
                            { value: "High", label: "🔴 High" },
                            { value: "Medium", label: "🟠 Medium" },
                            { value: "Low", label: "🟢 Low" },
                        ]}
                    />
                    <SelectInput
                        label="Category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        options={[
                            { value: "Work", label: "📂 Work" },
                            { value: "Personal", label: "🏠 Personal" },
                            { value: "Ideas", label: "💡 Ideas" },
                        ]}
                    />
                    <TextAreaInput
                        label="Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
                        Add Note
                    </button>
                </form>
            )}
        </>
    )
}

export default NoteForm
