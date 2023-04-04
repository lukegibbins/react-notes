import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "noteSlice",
    initialState: {
        noteList: []
    },
    reducers: {
        setNoteList: (currentSlice, action) => {
            currentSlice.noteList = action.payload;
        },
        addNote: (state, action) => {
            state.noteList.push(action.payload);
        }
        //Refreshing the page will refresh the note list, however, this will ensure
        //... the state is rendered without a refresh
    }
});

export const noteReducer = notesSlice.reducer;
export const { setNoteList, addNote } = notesSlice.actions;