export const getInitials = (name) => {
    const names = name.split(' ');
    if (names.length === 1) {
        return names[0].charAt(0).toUpperCase();
    };
    return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
}

export function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }
  
export function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}