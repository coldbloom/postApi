import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
     async () => {
        const res = await fetch('https://5fb3db44b6601200168f7fba.mockapi.io/api/posts')
        const data = await res.json()
        return data
     }
)

export const fetchDeletePost = createAsyncThunk(
    'post/fetchDeletePost',
    async (postId) => {
        const res = await fetch(`https://5fb3db44b6601200168f7fba.mockapi.io/api/posts/${postId}`)
        const data = await res.json()
        return data
    }
)

export const fetchAddPost = createAsyncThunk(
    'post/fetchAddPost',
    async (post)  => {
        const res = await fetch('https://5fb3db44b6601200168f7fba.mockapi.io/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
        })
        const data = await res.json()
        return data
    }
)

const initialState = {
    items: []
}

const postSlice = createSlice({
    name:'post',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default postSlice.reducer