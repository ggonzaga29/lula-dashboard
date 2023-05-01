
// generates columns for react-data-table-component
export const generateColumns = (obj) => {
    return Object.keys(obj).map(key => {
        return {
            name: key.charAt(0).toUpperCase() + key.slice(1),
            selector: row => row[key]
        }
    })
}