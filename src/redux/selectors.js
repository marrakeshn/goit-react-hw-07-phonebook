export const selectFilteredContacts = (state) => {
    const filterValue = state.contacts.filter;
    const contacts = state.contacts.entities;

    return contacts.filter((contact) => contact.name.includes(filterValue));
}
