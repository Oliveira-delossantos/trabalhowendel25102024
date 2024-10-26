import React from "react";
import './TodoList.css';

function TodoList() {
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form>
                <input type="text" placeholder="Adicione uma tarefa" />
                <button className="add" type="submit">Add</button>
            </form>

            <div class="listaTarefas">
                <div classname="item completo">
                    <span>Tarefa de exemplo</span>
                    <button>Deletar</button>
                </div>
                <div classname="item completo">
                    <span>Tarefa de exemplo</span>
                    <button>Deletar</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList;