import { createAction } from "@ngrx/store";

export const setTodoLength = createAction(
    '[Todo] Set length',
    (length: Number) => length
);

