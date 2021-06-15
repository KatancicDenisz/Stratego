import React from "react";
import logo from "../../assets/images/logo2.png";
import "../../assets/css/mainpage.css";

export function Mainpage({
  handleCreateGameclick,
  handleRoomCreateClick,
  handleGoToMainpage,
}) {
  return (
    <div className="pushable">
      <div className="ui huge top fixed text menu">
        <a className="item active" href="#home">
          Home
        </a>
        <a className="item" href="#jumpto">
          Játékszabály
        </a>
      </div>
      <div className="bgimagemain">
        <div className="ui text container">
          <h1 className="ui inverted header">
            <div className="ui container">
              <div className="ui huge image">
                <img
                  src={logo}
                  alt=""
                  className="ui centered large image"
                  id="home"
                />
              </div>
            </div>
          </h1>
          <div className="lowered">
            <div
              className="ui huge black button startgame wider"
              onClick={() => {
                handleCreateGameclick(true);
                handleGoToMainpage(false);
              }}
            >
              Új Játék kezdése!
            </div>
          </div>
          <div className="lowered">
            <h1 className="ui inverted header idtitle">
              Irja be a szoba azonosítóját
            </h1>
            <div className="ui huge input">
              <input
                type="text"
                className="connectgame"
                placeholder="Search..."
              />
            </div>
            <button
              className="ui primary huge button connectgame"
              onClick={() => {
                handleRoomCreateClick(true);
                handleGoToMainpage(false);
              }}
            >
              Csatlakozás a szobához
            </button>
          </div>
        </div>
      </div>
      <h1
        className="ui center aligned header strategoheader animated slideInDown"
        id="jumpto"
      >
        Stratego egy izgalmas stratégiai társasjáték
      </h1>
      <h2 className="ui center aligned header">
        A játékosok a hadvezérek szerepébe bújva eljátszhatják a történelem nagy
        csatáit. <br />
        A csapatok taktikus felállítása és a stratégiai manőverek megvalósítása
        <br />
        folyamatos döntésre készteti a játékosokat a csata megnyeréséért.
      </h2>
      <div className="ui three column internally celled grid">
        <div className="ui column">
          <div className="ui inverted header">
            <h3 className="subtitle">A játék menete</h3>
            <p className="content">
              A játékot a piros játékos kezdi. A játék további menetében a
              játékosok felváltva lépnek. A soron levô játékosnak lépnie kell
              egyet egy saját figurájával. A játékos figurájával egy üres mezôre
              léphet, vagy egy olyan mezôre, amin az ellenfél egyik figurája
              áll. Ezt nevezzük támadásnak. Az éppen soron lévô játékos mindig
              csak egy figurával léphet. Nem léphet olyan mezôre és nem ugorhat
              át olyan mezôt, amelyiken egy saját figurája áll!
            </p>
          </div>
        </div>
        <div className="ui column">
          <div className="ui inverted header">
            <h3 className="subtitle">Lépés</h3>
            <p className="content">
              A saját figurával egy mezôt lehet lépni tetszôleges irányba:
              jobbra, balra, elôre, hátra. Kivétel azonban ez alól a szabály
              alól a felderítô! A játékos egy figurával sem léphet átlós
              irányba, és nem ugorhat át másik figurát. Minden mezôn csak egy
              figura állhat. A játéktábla közepén lévô tavak mezôire lépni,
              illetve a tavakat átugrani nem lehet! Ugyanazon a két mezôn
              legfeljebb háromszor léptethetjük ide-oda a figurákat, függetlenül
              attól, hogy a figura veszélybe van-e vagy sem. Legkésôbb a
              negyedik lépés során egy harmadik mezôre kell lépni.
            </p>
          </div>
        </div>
        <div className="ui column">
          <div className="ui inverted header">
            <h3 className="subtitle">Ellenség megtámadása</h3>
            <p className="content">
              Ellenséges figurát csak valamelyik szomszédos mezôrôl támadhatunk
              meg (kivétel a felderítô). Ha a két mezônek csak a sarka
              érintkezik, akkor a támadás nem lehetséges. A magasabb rangú
              figura a gyôztes, az alacsonyabb rangú figurát le kell venni a
              tábláról. Ha a támadó nyer, akkor az ô figurája lép a legyôzött
              figura által elhagyott mezôre. Ha a megtámadott nyer, akkor
              figurája ott marad, ahol eddig állt. Ha a két figura azonos rangú,
              akkor mindketten elesnek, tehát mindkettôt le kell venni a
              tábláról.
            </p>
          </div>
        </div>
      </div>
      <div className="ui two column internally celled grid">
        <div className="ui column">
          <div className="ui inverted header">
            <h3 className="subtitle">Különgleges esetek</h3>
            <p className="content">
              1. TÁBORNAGY (10): A tábornagy (10) üti a tábornokot (9) és az
              összes alacsonyabb rangú figurát. Ám a kém (1) mégis ütheti! Rajta
              kívül csak a bombák okozhatják a tábornagy vesztét, ha véletlenül
              megtámad egyet. 2. BOMBÁK: A bombákat csak az aknászok (3) képesek
              ártalmatlanná tenni. Ha a támadó más figurával támad meg egy
              bombát, vereséget szenved, amit a bomba tulajdonosa „bumm!”
              kiáltással tudat vele. Ha az aknásznak sikerült ártalmatlanná
              tennie egy bombát, akkor leveszi a játéktábláról, és a helyére
              lép. 3. A KÉM (1): A kém (1) a legalacsonyabb rangú figura, ezért
              minden más figura üti. Van azonban egy különleges képessége: ha ô
              maga támadja meg a tábornagyot, akkor gyôz, és a legmagasabb rangú
              tiszt elesik. Vigyázat! Ha a tábornagy (10) támadja meg a kémet,
              akkor a kém (1) esik el. 4. A ZÁSZLÓ: A zászlót bármelyik mozgó
              figura megszerezheti, akár a nagy távokat átlépô felderítô is.
            </p>
          </div>
        </div>
        <div className="ui column">
          <div className="ui inverted header">
            <h3 className="subtitle">A csata</h3>
            <p className="content">
              A Csatában a játékosok az összes játékfigurával játszanak. A
              figurák felállításával a játékosok a játéktábla alsó 4 sorában
              mind a 40 mezôt elfoglalják. A csapatokat úgy kell felállítaniuk,
              hogy az ellenfél ne láthassa a figurák rangjelzéseit. A Csata
              célja, az ellenfél zászlójának megszerzése. Ezért célszerû a
              játékosoknak a Zászlóikat a hátsó sorok valamelyikében
              elrejteniük. Minden játékosnak 6 Bombája van, amivel a Zászlóját
              védheti. A figurák rangjelzése egy számot is tartalmaz: a
              legmagasabb rangú a Tábornagy száma a 10-es, a Tábornok a 9-es, és
              így tovább az 1-es számot viselô Kémig. Csak a Bombáknak és a
              Zászlónak nincsen számuk, mivel ezeknek a figuráknak külön
              feladatuk van a játék során. Az alacsonyabb és a magasabb
              rangjelzésû figurák taktikus elhelyezése nagyon fontos a játék
              késôbbi menete szempontjából. A figurák lehelyezésekor ügyelni
              kell arra, hogy az ellenfelek ne hatolhassanak be könnyedén egymás
              területeire, de nehezen nyerheti meg az a játékot, aki csak
              védekezési taktikát folytat.
            </p>
          </div>
        </div>
      </div>
      <div className="ui grid">
        <div className="ui column">
          <div className="ui inverted header">
            <h3 className="endgame">A játék vége</h3>
            <p className="end">
              A játék akkor ér véget, ha az egyik játékos megszerzi az ellenfele
              zászlóját, illetve mozgásképtelenné teszi az ellenséget. Amelyik
              csapatból már csupán a bombák és a zászló maradt meg, kénytelen
              megadni magát. <br />
              <br />
              <span>A részletesebb játékszabály itt található:</span>
              <a href="http://www.ketaklub.hu/letoltes/Stratego%20Aoriginal%20Piatnik.pdf">
                Játékszabályzat
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
