export const selectFilteredContacts = (state) => {
    const filterValue = state.contacts.filter.toLowerCase();
    const contacts = state.contacts.entities;

    return contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue));
}
