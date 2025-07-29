function NoteList({ notes, deleteNote }) {
    if (notes.length == 0) {
        return <p className="text-center text-gray-500">No Notes yet</p>
    }

    return (
        <div className="space-y-4">
            {notes.map((note) => (
                <div
                    key={note.id}
                    className={`p-4 bg-white rounded-lg shadow-md border-l-4 
                        ${
                            note.priority === "Low"
                                ? "border-green-500"
                                : note.priority === "Medium"
                                  ? "border-orange-500"
                                  : "border-red-500"
                        }
                        `}
                >
                    <h3 className="text-lg font-bold">{note.title}</h3>
                    <p className="text-sm text-gray-600">
                        <strong>Category: {note.category}</strong>
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Priority: {note.priority}</strong>
                    </p>
                    <p className="my-2">{note.description}</p>

                    <button
                        onClick={() => deleteNote(note.id)}
                        className="mt-3 text-red-500 cursor-pointer hover:text-red-700"
                    >
                        🗑 Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default NoteList
