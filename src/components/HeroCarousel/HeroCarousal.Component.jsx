import React,{useState} from 'react';
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";


const HeroCarousal = () => {
const [images,setImages]=useState([
  
    {
      "adult": false,
      "backdrop_path": "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
      "genre_ids": [
        53
      ],
      "id": 985939,
      "original_language": "en",
      "original_title": "Fall",
      "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights Server : https://divedigital.vip/movie/985939/fall",
      "popularity": 7631.138,
      "poster_path": "/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
      "release_date": "2022-08-11",
      "title": "Fall",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 574
    },
    {
      "adult": false,
      "backdrop_path": "/1n7ZGr6WeDOW4rFiQKmFel8baWH.jpg",
      "genre_ids": [
        53,
        27
      ],
      "id": 760741,
      "original_language": "en",
      "original_title": "Beast",
      "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.Server : https://divedigital.vip/movie/760741/beast",
      "popularity": 6529.681,
      "poster_path": "/iRV0IB5xQeOymuGGUBarTecQVAl.jpg",
      "release_date": "2022-08-11",
      "title": "Beast",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 298
    },
    {
      "adult": false,
      "backdrop_path": "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      "genre_ids": [
        16,
        878,
        28
      ],
      "id": 610150,
      "original_language": "ja",
      "original_title": "ドラゴンボール超 スーパーヒーロー",
      "overview": "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
      "popularity": 3612.381,
      "poster_path": "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      "release_date": "2022-06-11",
      "title": "Dragon Ball Super: Super Hero",
      "video": false,
      "vote_average": 8,
      "vote_count": 1581
    },
    {
      "adult": false,
      "backdrop_path": "/skL7c4ZhZqo1IFbMcHNrol4fvkc.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 921360,
      "original_language": "en",
      "original_title": "Wire Room",
      "overview": "New recruit Justin Rosa must monitor arms-smuggling cartel member Eddie Flynn — and keep him alive at all costs. When a SWAT team descends on Flynn’s home, Rosa breaks protocol and contacts the gangster directly to save his life. As gunmen break into the Wire Room and chaos erupts, Mueller and Rosa make a final, desperate stand against the corrupt agents and officials who seek to destroy evidence and kill them both.",
      "popularity": 2746.083,
      "poster_path": "/b9ykj4v8ykjRoGB7SpI1OuxblNU.jpg",
      "release_date": "2022-09-02",
      "title": "Wire Room",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 49
    },
    {
      "adult": false,
      "backdrop_path": "/qaTzVAW1u16WFNsepjCrilBuInc.jpg",
      "genre_ids": [
        16,
        28,
        10751,
        878,
        35
      ],
      "id": 539681,
      "original_language": "en",
      "original_title": "DC League of Super-Pets",
      "overview": "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
      "popularity": 1902.25,
      "poster_path": "/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
      "release_date": "2022-07-27",
      "title": "DC League of Super-Pets",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 522
    },
    {
      "adult": false,
      "backdrop_path": "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
      "genre_ids": [
        16,
        12,
        35,
        14
      ],
      "id": 438148,
      "original_language": "en",
      "original_title": "Minions: The Rise of Gru",
      "overview": "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
      "popularity": 1551.214,
      "poster_path": "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
      "release_date": "2022-06-29",
      "title": "Minions: The Rise of Gru",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 1917
    },
    {
      "adult": false,
      "backdrop_path": "/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg",
      "genre_ids": [
        27,
        9648,
        878,
        53
      ],
      "id": 762504,
      "original_language": "en",
      "original_title": "Nope",
      "overview": "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
      "popularity": 1230.81,
      "poster_path": "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
      "release_date": "2022-07-20",
      "title": "Nope",
      "video": false,
      "vote_average": 7,
      "vote_count": 1413
    },
    {
      "adult": false,
      "backdrop_path": "/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 756999,
      "original_language": "en",
      "original_title": "The Black Phone",
      "overview": "Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
      "popularity": 1219.165,
      "poster_path": "/lr11mCT85T1JanlgjMuhs9nMht4.jpg",
      "release_date": "2022-06-22",
      "title": "The Black Phone",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 2461
    },
    {
      "adult": false,
      "backdrop_path": "/3VQj6m0I6gkuRaljmhNZl0XR3by.jpg",
      "genre_ids": [
        16,
        12,
        35,
        14
      ],
      "id": 585511,
      "original_language": "en",
      "original_title": "Luck",
      "overview": "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.",
      "popularity": 1106.796,
      "poster_path": "/1HOYvwGFioUFL58UVvDRG6beEDm.jpg",
      "release_date": "2022-08-05",
      "title": "Luck",
      "video": false,
      "vote_average": 8,
      "vote_count": 677
    },
    {
      "adult": false,
      "backdrop_path": "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 634649,
      "original_language": "en",
      "original_title": "Spider-Man: No Way Home",
      "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      "popularity": 1071.918,
      "poster_path": "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
      "release_date": "2021-12-15",
      "title": "Spider-Man: No Way Home",
      "video": false,
      "vote_average": 8,
      "vote_count": 15088
    },
    {
      "adult": false,
      "backdrop_path": "/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
      "genre_ids": [
        10749,
        18
      ],
      "id": 744276,
      "original_language": "en",
      "original_title": "After Ever Happy",
      "overview": "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for. Server : https://divedigital.vip/movie/744276/after-ever-happy",
      "popularity": 993.748,
      "poster_path": "/6b7swg6DLqXCO3XUsMnv6RwDMW2.jpg",
      "release_date": "2022-08-24",
      "title": "After Ever Happy",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 57
    },
    {
      "adult": false,
      "backdrop_path": "/8wwXPG22aNMpPGuXnfm3galoxbI.jpg",
      "genre_ids": [
        28,
        12,
        10751,
        35
      ],
      "id": 675353,
      "original_language": "en",
      "original_title": "Sonic the Hedgehog 2",
      "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
      "popularity": 989.497,
      "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
      "release_date": "2022-03-30",
      "title": "Sonic the Hedgehog 2",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 2973
    },
    {
      "adult": false,
      "backdrop_path": "/iGHFjqxH5c8zRibnZbh9qEYTBho.jpg",
      "genre_ids": [
        28
      ],
      "id": 1008779,
      "original_language": "es",
      "original_title": "La Princesa",
      "overview": "Refusing to marry a drug lord, Grecia is determined to pay her father's debt herself. To earn the money, she decides to bet in the Sinaloa palenques, where she meets Armando. He is immediately captivated by her beauty and fearless attitude. But, little does he know that falling for her will be his most dangerous endeavor. Based on the famous corrido hit \"La Princesa\", by Alfredo Ríos \"El Komander\".",
      "popularity": 832.096,
      "poster_path": "/ksxiXqwPuEjh3gct1zUpyzNoQFt.jpg",
      "release_date": "2022-08-05",
      "title": "The princess",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 58
    },
    {
      "adult": false,
      "backdrop_path": "/r26Qj2HfAv6rPXzULLpdDWrkwrT.jpg",
      "genre_ids": [
        53
      ],
      "id": 852448,
      "original_language": "en",
      "original_title": "I Came By",
      "overview": "A rebellious young graffiti artist, who targets the homes of the wealthy elite, discovers a shocking secret that leads him on a journey endangering himself and those closest to him.",
      "popularity": 817.846,
      "poster_path": "/856bLLUvEYu3dRDXCCoRE7oxO0V.jpg",
      "release_date": "2022-08-19",
      "title": "I Came By",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 195
    },
    {
      "adult": false,
      "backdrop_path": "/7Y3LdmsZukXhmwxtO0UF95BFBTt.jpg",
      "genre_ids": [
        18,
        9648,
        53
      ],
      "id": 682507,
      "original_language": "en",
      "original_title": "Where the Crawdads Sing",
      "overview": "Abandoned by her family, Kya raises herself all alone in the marshes outside of her small town. When her former boyfriend is found dead, Kya is instantly branded by the local townspeople and law enforcement as the prime suspect for his murder.",
      "popularity": 688.512,
      "poster_path": "/n1el846gLDXfhOvrRCsyvaAOQWv.jpg",
      "release_date": "2022-07-15",
      "title": "Where the Crawdads Sing",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 226
    },
    {
      "adult": false,
      "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 760161,
      "original_language": "en",
      "original_title": "Orphan: First Kill",
      "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
      "popularity": 1087.688,
      "poster_path": "/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg",
      "release_date": "2022-07-27",
      "title": "Orphan: First Kill",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 526
    },
    {
      "adult": false,
      "backdrop_path": "/fqw8nJLPRgKRyFSDC0xBsC06NGC.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 639933,
      "original_language": "en",
      "original_title": "The Northman",
      "overview": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
      "popularity": 610.515,
      "poster_path": "/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
      "release_date": "2022-04-07",
      "title": "The Northman",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 2349
    },
    {
      "adult": false,
      "backdrop_path": "/qViFGWCHaSmW4gP00RGh3xjMjsP.jpg",
      "genre_ids": [
        27,
        9648
      ],
      "id": 758724,
      "original_language": "en",
      "original_title": "The Cellar",
      "overview": "When Keira Woods' daughter mysteriously vanishes in the cellar of their new house in the country, she soon discovers there is an ancient and powerful entity controlling their home that she will have to face or risk losing her family's souls forever.",
      "popularity": 643.052,
      "poster_path": "/rtfGeS5WMXA6PtikIYUmYTSbVdg.jpg",
      "release_date": "2022-03-25",
      "title": "The Cellar",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 229
    },
    {
      "adult": false,
      "backdrop_path": "/fQ5sZ6frXiAZuufgkVJnDwFFUQ4.jpg",
      "genre_ids": [
        53
      ],
      "id": 948333,
      "original_language": "en",
      "original_title": "Into the Deep",
      "overview": "Follows a woman desperate to escape her town, she meets a stranger who promises a romantic escape, but it results in deceit, mistrust, and violence.",
      "popularity": 589.798,
      "poster_path": "/bPyBqGBYjGzyLVHJEIsCwlZejk.jpg",
      "release_date": "2022-08-26",
      "title": "Into the Deep",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 13
    },
    {
      "adult": false,
      "backdrop_path": "/ftGzl2GCyko61Qp161bQElN2Uzd.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 961484,
      "original_language": "en",
      "original_title": "Last Seen Alive",
      "overview": "After Will Spann's wife suddenly vanishes at a gas station, his desperate search to find her leads him down a dark path that forces him to run from authorities and take the law into his own hands.",
      "popularity": 567.86,
      "poster_path": "/qvqyDj34Uivokf4qIvK4bH0m0qF.jpg",
      "release_date": "2022-05-19",
      "title": "Last Seen Alive",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 286
    },
  
]);

const settingsLG={
  arrows:true,
  slidesToShow:1,
  infinite:true,
  speed:500,
  slideToScroll:1,
  nextArrow:<NextArrow/>,
  prevArrow:<PrevArrow/>,

};

const settings={
  arrows:true,
  slidesToShow:1,
  infinite:true,
  speed:500,
  slideToScroll:1,
  nextArrow: <NextArrow/>,
  prevArrow:<PrevArrow/>,

};



  return (
    <>
    <div className='lg:hidden'>
      <HeroSlider>
        {
          images.map((images)=> (
            <div className='w-full h-56 md:h-80 py-3'>
               <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} 
              alt='Hero Banner' 
              className='w-full h-full rounded-md object-cover'
              />
            </div>
             
          ))
        }
      </HeroSlider>
    </div>
    <div className='hidden lg:block'>
    <HeroSlider >
        {
          images.map((images)=> (
            <div className='w-full h-96 px-2 py-3'>
               <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} 
              alt='Hero Banner' 
              className='w-full h-full rounded-md object-cover'
              />
            </div>
             
          ))
        }
      </HeroSlider>
    </div>
    </>
  );
  
};

export default HeroCarousal;