//todo => add toggle,delete(local)
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

//   http://localhost:5000/todos

// gettodo,add,toggle,removetodos
// axios.defaults.baseURL=http://localhost:5000/
const app = axios.create({
    baseURL: "http://localhost:5000"
})

export const getAsyncTodods = createAsyncThunk("todos/getAsyncTodods", async (_, { rejectWithValue }) => {
    try {
        const { data } = await app.get("/todos")
        return data;

    } catch (error) {
        return rejectWithValue(error.message)
    }
})



export const addAsyncTodods = createAsyncThunk("todos/addAsyncTodods", async (payload, { rejectWithValue }) => {
    try {
        const { data } = await app.post("/todos", {
            title: payload.title,
            id: Date.now(),
            completed: false,
        });
        return data;

    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const deleteAsyncTodods = createAsyncThunk("todos/deletAsyncTodods", async (payload, { rejectWithValue }) => {
    try {
        await app.delete(`/todos/${payload.id}`);
        return { id: payload.id };

    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const toggleAsyncTodods = createAsyncThunk("todos/toggleAsyncTodods", async (payload, { rejectWithValue }) => {
    try {
        const { data } = await app.put(`/todos/${payload.id}`, {
            completed: payload.completed,
            title: payload.title,
        });
        console.log(data)
        return data;

    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        isloading: false,
        todos: [],
        error: "",
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            }
            state.todos.push(newTodo)
        },
        toggleTodo: (state, action) => {
            // {id:1}
            //
            const selectedTodo = state.todos.find((todo) => todo.id === action.payload.id)
            selectedTodo.completed = !selectedTodo.completed
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== Number(action.payload.id))

        },
    },
    extraReducers: {
        [getAsyncTodods.pending]: (state, action) => {
            state.isloading = true;
            state.todos = [];
            state.error = "";
        },
        [getAsyncTodods.fulfilled]: (state, action) => {
            state.isloading = false;
            state.todos = action.payload;
            state.error = "";
        },
        [getAsyncTodods.rejected]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
            state.todos = [];
        },
        [addAsyncTodods.pending]: (state, action) => {
            state.isloading = true;
           
        },
        [addAsyncTodods.fulfilled]: (state, action) => {
            state.isloading = false;
            state.todos.push(action.payload)

        },
        [deleteAsyncTodods.fulfilled]: (state, action) => {
            state.isloading = false;
            state.todos = state.todos.filter(
                (todo) => todo.id !== Number(action.payload.id))
        }, [toggleAsyncTodods.fulfilled]: (state, action) => {

            const selectedTodo = state.todos.find(
                (todo) => todo.id === Number(action.payload.id))
            selectedTodo.completed === action.payload.completed;
        }

    }

})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer