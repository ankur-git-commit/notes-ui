function NoteList({ notes }) {
    if (notes.length == 0) {
        return <p className="text-center text-gray-500">No Notes yet</p>
    }

    return (
        <div className="space-y-4">
            {notes.map((note) => (
                <p
                    id={note.id}
                    className="p-4 bg-white rounded-lg shadow-md border-l-4"
                >
                    <h3 className="text-lg font-bold">{note.title}</h3>
                    <p className="text-sm text-gray-600">
                        <strong>Category: {note.category}</strong>
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Priority: {note.priority}</strong>
                    </p>
                    <p className="mt-2">{note.description}</p>
                </p>
            ))}
        </div>
    )
}

export default NoteList
