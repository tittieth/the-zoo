export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "/244537-P3VK92-904.jpg";
    event.currentTarget.alt = "Bild kunde inte laddas";
    event.currentTarget.width = 100;
  };

export const formatDateTime = (isoDateTime: string) => {
    const date = new Date(isoDateTime);
    const formattedDate = date.toLocaleDateString("sv-SE");
    const formattedTime = date.toLocaleTimeString("sv-SE");
    return `${formattedDate} ${formattedTime}`;
  };