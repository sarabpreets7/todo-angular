import { createReducer } from "@ngrx/store";
import { setTodoLength } from "../actions/todolist.action";

export interface TodoState {
    length: Readonly<Number>;
}

const initialState: Readonly<Number> = 0;

// export const todoReducer = createReducer(
//     initialState,
//     on(setTodoLength,(state,length) => length
// )
// );


