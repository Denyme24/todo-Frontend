'use client'

import { useState } from 'react'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog'
import { Trash2, Edit2 } from 'lucide-react'

interface Todo {
    id: number
    body: string
    completed: boolean
}

interface TodoItemProps {
    todo: Todo
    onToggle: () => void
    onDelete: () => void
    onEdit: (newText: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(todo.body)

    const handleEdit = () => {
        onEdit(editedText)
        setIsEditing(false)
    }

    return (
        <li className="flex items-center space-x-2 group bg-white bg-opacity-50 rounded-md p-2">
            <Checkbox
                checked={todo.completed}
                onChange={onToggle}
                id={`todo-${todo.id}`}
            />
            <label
                htmlFor={`todo-${todo.id}`}
                className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
            >
                {todo.body}
            </label>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEditing(true)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <Edit2 className="h-4 w-4 text-blue-500" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={onDelete}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <Trash2 className="h-4 w-4 text-red-500" />
            </Button>

            <Dialog open={isEditing} onOpenChange={setIsEditing}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Todo</DialogTitle>
                    </DialogHeader>
                    <Input
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="my-4"
                    />
                    <DialogFooter>
                        <Button onClick={() => setIsEditing(false)} variant="outline">
                            Cancel
                        </Button>
                        <Button onClick={handleEdit}>Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </li>
    )
}

