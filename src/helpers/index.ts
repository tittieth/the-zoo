export const formatDateTime = (isoDateTime: string) => {
    const date = new Date(isoDateTime);
    const formattedDate = date.toLocaleDateString("sv-SE");
    const formattedTime = date.toLocaleTimeString("sv-SE");
    return `${formattedDate} ${formattedTime}`;
  };