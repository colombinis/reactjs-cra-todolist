import React from 'react';

const Todos = (props) => {
    const todos = props.todos;
    const deleteTodo = props.deleteTodo;

    const listTodos = todos.length ? (
        todos.map((t) => {
            return (
                <div key={t.id} className="collection-item">
                    <button onClick={ () => { deleteTodo(t.id) } }>X</button>
                    <span>{t.content}</span>
                </div>
            );
        })
    ) : (
        <div className="center">
            No hay datos para mostrar.
        </div>
    );



return (
    <div className="todos collection">
        {listTodos}
    </div>
);
}

export default Todos;