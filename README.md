# En inlämningsuppgift i kursen Javascript fördjupning. 

## Uppgiftsbeskrivning: 

<h1>The Zoo</h1>
  <p>Använd React med TypeScript för att skapa en sida för ett zoo.</p>
  <p>En lista med djur finns tillgänglig på: <a href="https://animals.azurewebsites.net/api/animals" target="_blank" rel="noopener noreferrer">https://animals.azurewebsites.net/api/animals</a></p>
  <p>Du behöver ladda ner djuren till din applikation och spara dem i applikationen. Det kommer inte gå att ändra djuren via API:t. Förslagsvis lagrar du dem i localStorage eller sessionStorage.</p>

  <h2>Grundläggande Krav (G):</h2>
  <ul>
    <li>
      <p>Startsida med Djurlista: På startsidan presenteras en lista med djur där varje djur visas med namn och en kort beskrivning.</p>
    </li>
    <li>
      <p>Individuell Djursida: Det är möjligt att klicka på ett djur i listan för att komma till en separat sida med mer information om djuret.</p>
    </li>
    <li>
      <p>Mata Djur: På djurets individuella sida finns en knapp "Mata Djur" som kan klickas för att markera att djuret har matats. När knappen klickas ändras djurets status för att indikera att det är matat. Knappen blir också inaktiv och tidsstämpel för matningen sparas.</p>
    </li>
  </ul>


<h2>Väl Godkänt Krav (VG):</h2>
  <ul>
    <li>
      <p>Hantering av trasiga bildlänkar: Om en bildlänk för ett djur är trasig, hanteras detta snyggt och korrekt i applikationen.</p>
    </li>
    <li>
      <p>Automatisk återställning av matningstid: När du går in på djurets sida igen kontrollerar applikationen om det har gått mer än tre timmar sedan senaste matningen. Om detta är fallet nollställs matningsstatusen och det blir möjligt att mata djuret igen.</p>
    </li>
    <li>
      <p>Notis om behov av matning: En liten notis visas på startsidan och på djursidan om det är mer än fyra timmar sedan djuret matades. Detta indikerar att djuret behöver matas.</p>
    </li>
    <li>
      <p>Användning av tjänster: Applikationen använder minst en tjänst för både hämtning av data och för gemensamma beräkningar.</p>
    </li>
  </ul>

## Installation och Körning:
 
- Klona projektet till din lokala dator.
- Öppna en terminal och navigera till projektmappen.
- Kör kommandot <code>npm install</code> för att installera alla nödvändiga paket.
- Kör kommandot <code>npm run dev</code> för att starta utvecklingsservern. Applikationen öppnas automatiskt i din webbläsare.

## Struktur

- `src/components`: Här hittar du olika komponenter som används i applikationen.
- `src/models`: Här finns modelldefinitioner, till exempel IAnimal för djur.
- `src/services`: Tjänster för att hämta data.
- `src/helpers`: Hjälpfunktioner och verktyg.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Prettier
- Eslint

## Demo 

<img src="/public/mobile (6).gif" width="40%" />