var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(
      `CREATE TABLE recipes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title text UNIQUE, 
          img text, 
          description text, 
          ingredients text,
          steps text
          )`,
      (err) => {
        if (err) {
          // console.log(err)
          // Uncomment above line if you want to see the error
        } else {
          // Fixture for first recipes
          var insert =
            'INSERT INTO recipes (title, img, description, ingredients, steps) VALUES (?,?,?,?,?)';
          db.run(insert, [
            'Spaghetti Carbonara',
            'spaghetti-carbonara-rick-stein-500.jpg',
            "#De geschiedenis van spaghetti carbonara.\n\nSpaghetti carbonara is een typisch Italiaans recept uit Lazio (de regio waarin Rome ligt) dat z’n herkomst zou vinden bij de armen. Bij de houthakkers/houtbranders die houtskool maakten (carbonari) om precies te zijn. Zij verzetten zwaar werk en aten vaak het bekende gerecht spaghetti carbonara om zichzelf kracht bij te zetten. De zwarte stipjes in de pasta zouden volgens deze theorie dan ook geen zwarte peper zijn, maar kleine vlokjes houtskool die op de saus zijn neergedaald.\n\nMaar er is nog een theorie rondom de herkomst van spaghetti carbonara. Zo schrijft culinair schrijver Richard Hoskin in zijn boek Eggs in Cookery dat het logischer zou zijn dat carbonara is uitgevonden in 1944. Het zou het resultaat zijn van de Amerikaanse bezetting, waardoor het Italiaanse gerecht pasta asciutta in combinatie met de Amerikaanse voorliefde voor eipoeder en spek samensmolt tot spaghetti carbonara. Italiaanse koks bedachten het recept met de Amerikaanse ingrediënten om de buitenlandse troepen tevreden te stellen. Een restaurant met de naam 'Carbonara' zou van het recept z’n specialiteit hebben gemaakt. In dit geval zou de naam 'carbonara' z’n oorsprong niet vinden bij de makers van houtskool, maar bij restaurant Carbonara. Gerespecteerd Romeins journalist Livio Jannattoni onderstreepte die laatste versie over het ontstaan van spaghetti carbonara.",
            JSON.stringify([
              { quantity: 150, unit: 'g', name: 'Parmazaanse kaas' },
              { quantity: 4, name: 'eieren' },
              { quantity: 150, unit: 'g', name: 'pancetta' },
              { quantity: 2, unit: 'teentjes', name: 'knoflook' },
              { name: 'peper' },
            ]),
            JSON.stringify([
              'Gooi een pan met water op het vuur en maak het water bijna zo zout als de zee.',
              'Hiermee zorg je ervoor dat de pasta die je afkookt de zoute smaak opneemt.',
              'Meng 4 eieren met wat pepper en je Parmezaanse kaas.',
              'Snij je pancetta in kleine blokjes en gooi ze zonder olie in een pan op medium vuur.',
              'Plet 2 knoflook-teentjes en pleur deze bij je pancetta.',
              'Wacht tot je pancetta is opgebakken en haal de knoflook uit de pan.',
              'Kook je pasta af in 2/3 min en pleur deze vanuit het water gelijk bij je pancetta.',
              'Zet je vuur uit! (Heel belangrijk!!)',
              'Gooi er nu vanuit de pan waar je je pasta ingekookt hebt, 5 eetlepels kookvocht bij je pasta/pancetta.',
              'Pak je eimengsel en gooi deze door je pasta heen.',
              'Goed mengen met elkaar tot er een romige saus ontstaat.',
              'Gelijk opvreten.',
              'Oh en gooi er nog wat kaas overheen.',
              'Eet ze!',
            ]),
          ]);
          db.run(insert, [
            'Holi Halloumiburger',
            '1070086.jpg',
            'Intro op het recept. Bacon ipsum dolor amet cupim leberkas drumstick pastrami venison.\n\nEn hier dan de rest! Strip steak meatball bacon, rump capicola shank pancetta alcatra pork belly flank. Drumstick sirloin pork belly beef ribs hamburger. Picanha pastrami sirloin, leberkas capicola salami beef ribs shoulder ball tip alcatra buffalo.\n\nCapicola salami cow jowl tail. Prosciutto capicola tail, shank ribeye pig boudin cupim alcatra ham short loin. Buffalo short ribs landjaeger spare ribs salami doner. Corned beef bacon beef ribs tongue pig ham hock jerky turkey filet mignon rump leberkas sirloin prosciutto.',
            JSON.stringify([
              { quantity: 1, unit: 'g', name: 'appel' },
              { quantity: 1, unit: 'ml', name: 'peer' },
              { quantity: 1, unit: 'mespunt', name: 'banaan' },
            ]),
            JSON.stringify([
              'Stap stap stap',
              'Hakkuh snije en menge',
              "Bakk'n",
              'Vrêtn',
            ]),
          ]);
          db.run(insert, [
            'Pulled Pork',
            'Smoked-Pulled-Pork-Texas-9.jpg',
            'Intro op het recept. Bacon ipsum dolor amet cupim leberkas drumstick pastrami venison.\n\nEn hier dan de rest! Strip steak meatball bacon, rump capicola shank pancetta alcatra pork belly flank. Drumstick sirloin pork belly beef ribs hamburger. Picanha pastrami sirloin, leberkas capicola salami beef ribs shoulder ball tip alcatra buffalo.\n\nCapicola salami cow jowl tail. Prosciutto capicola tail, shank ribeye pig boudin cupim alcatra ham short loin. Buffalo short ribs landjaeger spare ribs salami doner. Corned beef bacon beef ribs tongue pig ham hock jerky turkey filet mignon rump leberkas sirloin prosciutto.',
            JSON.stringify([
              { quantity: 1, unit: 'g', name: 'appel' },
              { quantity: 1, unit: 'ml', name: 'peer' },
              { quantity: 1, unit: 'mespunt', name: 'banaan' },
            ]),
            JSON.stringify([
              'Stap stap stap',
              'Hakkuh snije en menge',
              "Bakk'n",
              'Vrêtn',
            ]),
          ]);
          db.run(insert, [
            'Mexicaanse kapsalon',
            'mexicaanse_kapsalon-feat.jpg',
            'Intro op het recept. Bacon ipsum dolor amet cupim leberkas drumstick pastrami venison.\n\nEn hier dan de rest! Strip steak meatball bacon, rump capicola shank pancetta alcatra pork belly flank. Drumstick sirloin pork belly beef ribs hamburger. Picanha pastrami sirloin, leberkas capicola salami beef ribs shoulder ball tip alcatra buffalo.\n\nCapicola salami cow jowl tail. Prosciutto capicola tail, shank ribeye pig boudin cupim alcatra ham short loin. Buffalo short ribs landjaeger spare ribs salami doner. Corned beef bacon beef ribs tongue pig ham hock jerky turkey filet mignon rump leberkas sirloin prosciutto.',
            JSON.stringify([
              { quantity: 1, unit: 'g', name: 'appel' },
              { quantity: 1, unit: 'ml', name: 'peer' },
              { quantity: 1, unit: 'mespunt', name: 'banaan' },
            ]),
            JSON.stringify([
              'Stap stap stap',
              'Hakkuh snije en menge',
              "Bakk'n",
              'Vrêtn',
            ]),
          ]);
        }
      }
    );
  }
});

module.exports = db;
