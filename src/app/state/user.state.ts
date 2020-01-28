import { State, Action, StateContext, Selector } from "@ngxs/store";
import { User } from "../models/User";
import { AddUser } from "../actions/user.action";

export class UserStateModel {
    users: User[]
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})

export class UserState {
    constructor() {
        
    }

    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users
    }

    @Action(AddUser)
    add({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
        if(!localStorage.getItem('store') || JSON.parse(localStorage.getItem('store')).length != [...state.users, payload].length) {
            localStorage.setItem('store', JSON.stringify([...state.users, payload]))
        }
    }
}