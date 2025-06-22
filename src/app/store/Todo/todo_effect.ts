import { Injectable } from "@angular/core";

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { restApiService } from "src/app/core/services/rest-api.service";
import { addTodo, addTodoFailure, addTodoSuccess, deleteTodo, deleteTodoFailure, deleteTodoSuccess, fetchTodoListData, fetchTodoListFailure, fetchTodoListSuccess, updateTodo, updateTodoFailure, updateTodoSuccess } from "./todo_action";


@Injectable()
export class TodoEffects {

    // Todo
    fetchTodoData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchTodoListData),
            mergeMap(() =>
                this.restApiService.getTodoData().pipe(
                    map((Todos) => {
                        const Todo = JSON.parse(Todos).data;
                        return fetchTodoListSuccess({ Todo })
                    }),
                    catchError((error) =>
                        of(fetchTodoListFailure({ error }))
                    )
                )
            ),
        ),
    );

    addTodoData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTodo),
            mergeMap(({ newData }) =>
                this.restApiService.postTodoData(newData).pipe(
                    map((responseData) => addTodoSuccess({ newData: responseData.data })),
                    catchError((error) => of(addTodoFailure({ error })))
                )
            )
        )
    )

    updateTodoData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateTodo),
            mergeMap(({ updatedData }) =>
                this.restApiService.patchTodoData(updatedData).pipe(
                    map((responseData) => updateTodoSuccess({ updatedData: responseData.data })),
                    catchError((error) => of(updateTodoFailure({ error })))
                )
            )
        )
    );;

    constructor(
        private actions$: Actions,
        private restApiService: restApiService
    ) { }
}