export function convertDate(date: string): string {
  const d = new Date(date);
  const listOfMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const listOfDay: string[] = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  return `${listOfDay[d.getDay()]}, ${d.getDate()} ${listOfMonth[d.getMonth()]} ${d.getFullYear()}`;
}
