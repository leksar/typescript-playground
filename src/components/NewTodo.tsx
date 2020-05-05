import React, {useRef} from 'react';

interface NewTodoProps {
    onAdd: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({onAdd}) => {

    const inputText = useRef<HTMLInputElement>(null);

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        onAdd(inputText.current!.value);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='todo-text'>Name the task and hit enter</label>
            <input type='text' id='todo-text' ref={inputText} />
        </form>
    )
} 

export default NewTodo;