import { createSlice } from '@reduxjs/toolkit'

export const CONTACTS = 'contacts'

const initialState = {
  entities: [],
  filter: '',
}

export const contactsSlice = createSlice({
  name: CONTACTS,
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.entities.push(action.payload.contact)
    },
    deleteContact: (state, action) => {
      const contactId = action.payload.id;
      const contactToRemoveIndex = state.entities.findIndex((contact) => contact.id === contactId);
      state.entities.splice(contactToRemoveIndex, 1);
    },
    setFilter(state, action) {
        state.filter = action.payload.toLowerCase();
      },
  },
})

export const { addContact, deleteContact, setFilter } = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer