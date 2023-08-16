import { useState } from 'react';
import '../App.css';
import { IAnimal } from '../models/IAnimal';

function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([
    {
      id: 1,
      name: 'Majsan',
      latinName: 'Felis catus',
      yearOfBirth: 2017,
      shortDescription:
        'Majsan tycker om att bli klappad, dock inte på magen. Hon tycker också om att klättra i träd.',
      longDescription:
        'Katt (Felis catus), även känd som tamkatt, är ett relativt litet, smygjagande rovdjur i familjen kattdjur och ett vanligt sällskapsdjur i stora delar av världen. Falbkatten (Felis silvestris lybica), en underart till vildkatten (Felis silvestris), blev tidigt domesticerad av människan som nyttodjur för att hålla efter skadedjur eller för sällskap, både på landet och i stadsmiljö. Till havs har man sedan gammalt haft skeppskatter som skyddade mot gnagarangrepp på tåg och i proviantförråd. Katter kan dessutom vara underhållande för många människor med sin tillgivenhet och används även i terapeutiskt syfte vid psykisk ohälsa. Dock begränsas användningen av att vissa människor får allergireaktioner mot ämnen i kattens saliv, urin eller talgkörtlar. På många platser runt om i världen, speciellt på öar, utgör introducerade katter ett stort hot mot andra djur, exempelvis markhäckande fåglar.',
      imageUrl:
        'https://www.hdnicewallpapers.com/Walls/Big/Cat/Cat_Eye_Twitching_Wonderful_Photo.jpg',
      medicine: 'Inga',
      isFed: false,
      lastFed: '2021-04-15T14:09:02.5912482',
    },
    {
      id: 2,
      name: 'Bojan',
      latinName: 'Canis lupus familiaris',
      yearOfBirth: 2014,
      shortDescription:
        'Bojan är en busig kille som älskar att hämta pinnar och springa långt. När han är trött ligger han gärna nära någon annan för att känna närhet.',
      longDescription:
        'Hund (Canis lupus familiaris eller Canis lupus domesticus, tidigare även Canis familiaris) är en domesticerad underart av varg (Canis lupus). Läran om hundar kallas kynologi. Hundar finns av många olika raser, vilka framavlats av människan sedan hunden domesticerades. Idag bestäms dessa raser utifrån vissa rasstandarder som internationellt fastställs av Fédération Cynologique Internationale (FCI). En hund av hankön kallas hund, hane eller hanhund och en hund av honkön kallas för tik eller hynda; dess avkomma kallas för valp.',
      imageUrl:
        'https://smashingtops.com/wp-content/uploads/2012/10/Medium-dog-breeds-03.jpg',
      medicine: 'Inga',
      isFed: false,
      lastFed: '2021-04-15T14:09:02.5941856',
    },
    {
      id: 3,
      name: 'Fluff',
      latinName: 'Cricetinae',
      yearOfBirth: 2020,
      shortDescription:
        'Fluff tycker om att äta, mycket. När han inte orkar äta springer han gärna runt i sitt hjul för att sedan kunna äta... mer...',
      longDescription:
        'Hamstrar (Cricetinae) är en underfamilj av gnagare i familjen Cricetidae som omfattar 18 arter uppdelade i sju släkten. Vissa auktoriteter placerar dem som en släktgrupp i underfamiljen sorkar. Vissa arter, främst guldhamster och dvärghamstrar är populära husdjur i stora delar av världen. Gemensamt för arterna inom familjen är att de har en grov och tjock kropp, korta ben, en mycket kort och tunnhårig svans samt mycket stora framtänder. Därutöver har de tre kindtänder i varje kindpåse. De förekommer vilt på fält i tempererade Europa och Asien. De gräver djupa hålor med flera kamrar där de om hösten samlar sina förråd.',
      imageUrl:
        'http://4.bp.blogspot.com/-CpZaO5XQCt4/UQgxb5yUBHI/AAAAAAAAA4Y/MXRHxFuPEQ4/s1600/Hamster_2.jpg',
      medicine: 'Inga',
      isFed: false,
      lastFed: '2021-04-15T14:09:02.5941954',
    },
  ]);

  return (
    <>
      <div>
        <h1>The Zoo</h1>
      </div>
    </>
  );
}

export default App;
