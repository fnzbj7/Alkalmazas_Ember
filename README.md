# Alkalmazas_Ember

#1.0 Követelmény feltárása

  Egy Rendszer elkészítése, mely családi teendőket tart számon és az ahhoz tartozó adatokat (Bővebb leirását, kinek kell elvégeznie stb.)

###1.1 Célkitűzés

###1.2 Fogalom jegyzék

###1.3 Használati eset-diagramm
  //kép c9-on

###1.4 Szakterületi szabályszerűségek

###1.5 Nem funkcionális követelmények

  Fejlesztéshez felhasznált programok: c9.io és az ahhoz tartozó kezelői felület.

#2.0 Tervezés
  
###2.1 A program architechtúrája

  Legyen kettő adatbázis model, egy a teendőknek és egy a családtagoknak és kössük őket. Ezeknek az elemeit tudjuk megjeleníteni, módosítani, újat felvenni és törölni.
  Mindegyik modelt jelenítsük meg külön oldalon.
  

###2.2 Osztálymodel

###2.3 Adatbázis terv

  Teendők: id(String), todo(String), description(String), date(Date), status(String), familyID(familyMember)
  
  familyMember: id(String), firstname(String), lastname(String), age(String)
  
  Maga az adatbázis egy külön szerveren van megvalósítva, REST végponttal.

###2.4 Dinamikus működés

###2.5 Felhasználási felület modell

###2.6 Részletes programterv

#3.0 Implementáció

###3.1 Fejlesztő eszközök
  A program node.js alat fut. Felhasznál még ember.js-t és sok hozzátartozó rendszert pl. Bootstrap, Bootwatch, HBS kezelő rendszer, JQuery stb.
  
###3.2 Forráskód, Futtatható kód
  Az ide feltöltöt mappa tartalma lefedni az egész alkalmazás tartalmát.

###3.3 Alkalmazott kódolási szabványok



#4.0 Tesztelés

#5.0 Felhasználási dokumentáció



###5.1 Futtatáshoz ajánlott hardver- szofetver konfiguráció

  Az alkalmazás futtatásához szükségünk van olyan hardverre mely képes futtatni böngészőket, javascriptet és van internetkapcsolata.

###5.2 Telepítés

  Telepíteni nem kell, a linken keresztül egyből elérhető az alkalmazás

###5.3 Program használata

  A főoldalról el tudunk jutni a Teendők listájához és a Családtagok listájához. A jobb felső sarokban van egy menüpont, mely    segít a navigálásban.
  A családtagok listájánál tudunk felvenni új családtagot, módosíthatjuk a más meglévő családtagnak az adatait, csörülhetünk a   táblából családtagot és megtekinthetünk egy adott családtagot is.
  Egy családtag felvételéhez szükségünk van a  korára, kereszt- és vezetéknevére.
  Ugyan ilyen rendszerrel müködik a Teendők listája is, csak különböző adatokkal tölthetjük fel és módosíthatunk.
  

