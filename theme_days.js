const dateTextMap = new Map([
    ["1, 1", "Nyårsdagen"],
    ["3, 1", "J.R.R Tolkien-dagen"],
    ["4, 1", "Världshypnosdagen"],
    ["5, 1", "Trettondagen"],
    ["6, 1", "Trettondagen"],
    ["7, 1", "Temadagens dag"],
    ["13, 1", "Tjugondag jul"],
    ["15, 1", "Tulpanens dag"],
    ["19, 1", "Sten Stures ben-dagen"],
    ["20, 1", "Lösenordsbytardagen"],
    ["21, 1", "Kramens dag"],
    ["22, 1", "Vinets dag"],
    ["23, 1", "Elens dag"],
    ["24, 1", "Frufri-dagen"],
    ["25, 1", "Halvsnödagen"],
    ["27, 1", "Förintelsens minnesdag"],
    ["28, 1", "European Privacy & Data Protection-dagen"],
    ["29, 1", "Veganpizza-dagen"],
    ["30, 1", "Krama en bibliotekarie-dagen"],
    ["31, 1", "Världsdagen för leprasjuka"],
    ["1, 2", "Vegetariska dagen"],
    ["2, 2", "Murmeldjursdagen (Groundhog day)"],
    ["3, 2", "Andningens dag"],
    ["4, 2", "Världscancerdagen"],
    ["5, 2", "Runebergsdagen"],
    ["6, 2", "Samernas nationaldag"],
    ["7, 2", "Tankens Dag"],
    ["8, 2", "Ägghalvans dag"],
    ["11, 2", "Internationella 112-dagen"],
    ["12, 2", "Djurförsökens dag"],
    ["13, 2", "Världsradiodagen"],
    ["14, 2", "Alla Hjärtans Dag"],
    ["15, 2", "Internationella barncancerdagen"],
    ["18, 2", "Fotens dag"],
    ["20, 2", "Världsdagen för social rättvisa"],
    ["21, 2", "Internationella dagen för modersmål"],
    ["22, 2", "Alla scouters dag"],
    ["24, 2", "Internationella EBM-dagen"],
    ["25, 2", "Grapefruktens dag"],
    ["27, 2", "Internationella isbjörnsdagen"],
    ["28, 2", "Kalevaladagen"],
    ["29, 2", "Sällsynta dagen"],
    ["5, 3", "Ostbågsdagen (Cheese Doodle day)"],
    ["6, 3", "Europeiska logopeddagen"],
    ["7, 3", "Punschrullens dag (dammsugare)"],
    ["8, 3", "Internationella kvinnodagen"],
    ["9, 3", "Tomatsåsens dag"],
    ["10, 3", "V8:a-motorns dag"],
    ["11, 3", "World plumbing-dagen"],
    ["12, 3", "Världsdagen mot cybercensur"],
    ["13, 3", "Mazarindagen"],
    ["14, 3", "Pi-dagen"],
    ["15, 3", "Internationella dagen mot polisvåld"],
    ["17, 3", "Saint Patrick’s day"],
    ["18, 3", "Bussförarens dag"],
    ["19, 3", "Supporterns Dag"],
    ["20, 3", "Världsberättardagen"],
    ["21, 3", "Internationella dagen för avskaffande av rasdiskriminering"],
    ["22, 3", "Nordens dag"],
    ["23, 3", "Världsmeteorologidagen"],
    ["24, 3", "Europeiska dagen för hantverksmässigt tillverkad glass"],
    ["25, 3", "Våffeldagen"],
    ["26, 3", "Dialersystemens dag"],
    ["27, 3", "Världsteaterdagen"],
    ["30, 3", "Music Freedom-dagen"],
    ["1, 4", "Skojardagen"],
    ["2, 4", "Internationella barnboksdagen"],
    ["3, 4", "Kärlekens dag"],
    ["4, 4", "Morotens dag"],
    ["6, 4", "Barn på sjukhus-dagen"],
    ["7, 4", "Världshälsodagen"],
    ["8, 4", "Romernas internationella dag"],
    ["9, 4", "CSS-naked day"],
    ["10, 4", "Internationella syskondagen"],
    ["11, 4", "Internationella parkinsondagen"],
    ["12, 4", "Lakritsdagen"],
    ["14, 4", "Cultural Unity-dagen"],
    ["16, 4", "Världsröstdagen"],
    ["18, 4", "Amatörradions dag"],
    ["20, 4", "Internationella cannabisdagen"],
    ["21, 4", "Terrakottakrukans dag"],
    ["22, 4", "Internationella dagen för Moder Jord"],
    ["23, 4", "Sankt Georgsdagen"],
    ["24, 4", "Försöksdjurens dag"],
    ["25, 4", "Världsmalariadagen"],
    ["26, 4", "Promenadens dag"],
    ["27, 4", "Världstapirdagen"],
    ["28, 4", "Arbetsmiljödagen"],
    ["29, 4", "Internationella dansdagen"],
    ["30, 4", "Valborgsmässoafton"],
    ["1, 5", "Arbetarrörelsens dag"],
    ["2, 5", "Harry Potter-dagen"],
    ["3, 5", "Internationella dagen för pressfrihet"],
    ["4, 5", "Star Wars-dagen"],
    ["5, 5", "Internationella barnmorskedagen"],
    ["6, 5", "Inkontinensdagen (Philips födelsedag)"],
    ["7, 5", "Punkens dag"],
    ["8, 5", "Hågkomst och försoning för de som omkom under andra världskriget"],
    ["9, 5", "Europadagen"],
    ["10, 5", "Internationella SLE-dagen"],
    ["11, 5", "Chokladbollens dag"],
    ["12, 5", "Internationella fibromyalgidagen"],
    ["13, 5", "Barnens dag"],
    ["14, 5", "Teckenspråkets dag"],
    ["15, 5", "Kardemummabullens dag"],
    ["17, 5", "Internationella dagen mot homo- och transfobi"],
    ["18, 5", "Fascinerande växters dag"],
    ["21, 5", "Världsdagen för kulturell mångfald för dialog och utveckling"],
    ["22, 5", "Picknickens dag"],
    ["23, 5", "Internationella sköldpaddsdagen"],
    ["24, 5", "Nationalparkernas dag"],
    ["25, 5", "Geek Pride Day"],
    ["26, 5", "Muffinsdagen"],
    ["28, 5", "Den stressfria dagen"],
    ["29, 5", "Internationella fredssoldatdagen"],
    ["30, 5", "Botswanas nationaldag"],
    ["31, 5", "Internationella dagen mot tobak"],
    ["1, 6", "Mjölkens dag"],
    ["2, 6", "Internationella barnskyddsdagen"],
    ["3, 6", "Cykelns dag"],
    ["4, 6", "Assistansens dag"],
    ["5, 6", "Världsmiljödagen"],
    ["6, 6", "Sveriges nationaldag"],
    ["7, 6", "Punkens dag"],
    ["8, 6", "Världshavsdagen"],
    ["9, 6", "Internationella arkivdagen"],
    ["12, 6", "Internationella dagen mot barnarbete"],
    ["13, 6", "Stickningens dag"],
    ["14, 6", "Internationella blodgivardagen"],
    ["15, 6", "Internationella vindkraftsdagen"],
    ["16, 6", "Bloomsday"],
    ["17, 6", "Världsdagen för bekämpning av ökenutbredning och torka"],
    ["18, 6", "Pionens dag"],
    ["19, 6", "Internationella Sickle Cell-dagen"],
    ["20, 6", "Internationella surströmmingsdagen"],
    ["21, 6", "Musikens dag"],
    ["23, 6", "Världsdagen för offentlig service"],
    ["24, 6", "Midsommarafton"],
    ["25, 6", "Dragspelsdagen"],
    ["26, 6", "Internationella dagen mot droganvändning och olaglig narkotikahandel"],
    ["27, 6", "Dödas dag"],
    ["28, 6", "Frihandelsdagen"],
    ["29, 6", "Påfågelns dag"],
    ["30, 6", "Asterixdagen"],
    ["1, 7", "Kanadas nationaldag"],
    ["2, 7", "World UFO Day"],
    ["3, 7", "Internationella plastpåseskärningsdagen"],
    ["4, 7", "USA:s nationaldag"],
    ["5, 7", "Internationella Cooperdagen"],
    ["6, 7", "Embrace Your Geekness Day"],
    ["7, 7", "Internationella chokladkakans dag"],
    ["8, 7", "Afrobeatens dag"],
    ["9, 7", "Regnbyxans dag"],
    ["10, 7", "Internationella dagen för rätten till sanning om allvarliga brott och för de mänskliga offren"],
    ["11, 7", "Världsbefolkningsdagen"],
    ["12, 7", "Intervju-offret-dagen"],
    ["13, 7", "Rockens dag"],
    ["14, 7", "Frenologins dag"],
    ["15, 7", "Den engelska språkets dag"],
    ["16, 7", "Ormar i flygplan-dagen"],
    ["17, 7", "Världsdagen för rättvisa"],
    ["18, 7", "Internationella Nelson Mandela-dagen"],
    ["19, 7", "Internationella tjeckoslovakien-dagen"],
    ["20, 7", "Internationella vattenmelonens dag"],
    ["21, 7", "Internationella dagen för bilsporten"],
    ["22, 7", "Hjärtats dag"],
    ["23, 7", "Internationella hållbarhetshandelns dag"],
    ["24, 7", "Internationella rumsdagen"],
    ["25, 7", "Internationella jaktdagen"],
    ["26, 7", "Första tändsticksdagen"],
    ["27, 7", "Internationella hunddagen"],
    ["28, 7", "Internationella systerdagen (Adams födelsedag )"],
    ["29, 7", "Internationella dagen för biologisk mångfald"],
    ["30, 7", "Internationella dagen mot människohandel"],
    ["31, 7", "Internationella orgasmdagen"],
    ["1, 8", "Internationella mustaschdagen"],
    ["2, 8", "Internationella örn- och kondordagen"],
    ["3, 8", "Internationella vänortsdagen"],
    ["4, 8", "Internationella världsfarmarens dag"],
    ["5, 8", "Internationella vägarnas dag"],
    ["6, 8", "Rasande-roliga-rullstols-dagen"],
    ["7, 8", "Lighthouse Day"],
    ["8, 8", "Internationella kattens dag"],
    ["9, 8", "Internationella Världsdagen för ursprungsbefolkningar"],
    ["10, 8", "Internationella dagen för självmordsprevention"],
    ["11, 8", "Internationella dagen för minnet av slaveri och dess avskaffande (Andreas Födelsedag)"],
    ["12, 8", "Internationella ungdomsdagen"],
    ["13, 8", "Vänsterhäntas dag"],
    ["14, 8", "Internationella dagen för kärnvapenprovförbudet"],
    ["15, 8", "Internationella dagen för att hedra brottsoffer"],
    ["16, 8", "Bloomsday"],
    ["17, 8", "Världsdagen för bekämpning av ökenutbredning och torka"],
    ["18, 8", "Pionens dag"],
    ["19, 8", "Internationella Sickle Cell-dagen"],
    ["20, 8", "Internationella surströmmingsdagen"],
    ["21, 8", "Musikens dag"],
    ["23, 8", "Världsdagen för offentlig service"],
    ["24, 8", "Midsommarafton"],
    ["25, 8", "Dragspelsdagen"],
    ["26, 8", "Internationella dagen mot droganvändning och olaglig narkotikahandel"],
    ["27, 8", "Dödas dag"],
    ["28, 8", "Frihandelsdagen"],
    ["29, 8", "Påfågelns dag"],
    ["30, 8", "Asterixdagen"],
    ["1, 9", "Kinas nationaldag"],
    ["2, 9", "Lantbruksdjurens dag"],
    ["3, 9", "Tysklands nationaldag"],
    ["4, 9", "Djurens dag"],
    ["5, 9", "Internationella dagen för lärare"],
    ["6, 9", "Nationella anhörigdagen"],
    ["8, 9", "Vägledningens dag"],
    ["9, 9", "Världspostunionens dag"],
    ["10, 9", "Världsdagen för mental hälsa"],
    ["11, 9", "Internationella komma-ut-dagen"],
    ["12, 9", "Internationella reumatikerdagen"],
    ["13, 9", "International Suit Up Day"],
    ["14, 9", "Världsdagen för synskadade"],
    ["15, 9", "Brösthälsodagen"],
    ["16, 9", "Världshungerdagen"],
    ["17, 9", "Nationella mag-och tarmdagen"],
    ["18, 9", "Internationella slipsdagen"],
    ["19, 9", "Nationella dagen för Strävhårig Foxterrier"],
    ["20, 9", "Världsdagen för statistik"],
    ["22, 9", "INTERNATIONELLA CAPS LOCK-DAGEN"],
    ["23, 9", "Internationella moldagen"],
    ["24, 9", "FN-Dagen"],
    ["25, 9", "Internationella pasta-dagen"],
    ["26, 9", "Potatisens dag"],
    ["27, 9", "Alla svärmödrars dag"],
    ["28, 9", "Internationella animationens dag"],
    ["29, 9", "Internets dag"],
    ["30, 9", "Dennis Ritchie Day"],
    ["1, 10", "Kinas nationaldag"],
    ["2, 10", "Lantbruksdjurens dag"],
    ["3, 10", "Tysklands nationaldag"],
    ["4, 10", "Djurens dag"],
    ["5, 10", "Internationella dagen för lärare"],
    ["6, 10", "Nationella anhörigdagen"],
    ["8, 10", "Vägledningens dag"],
    ["9, 10", "Världspostunionens dag"],
    ["10, 10", "Världsdagen för mental hälsa"],
    ["11, 10", "Internationella komma-ut-dagen"],
    ["12, 10", "Internationella reumatikerdagen"],
    ["13, 10", "International Suit Up Day"],
    ["14, 10", "Världsdagen för synskadade"],
    ["15, 10", "Brösthälsodagen"],
    ["16, 10", "Världshungerdagen"],
    ["17, 10", "Nationella mag-och tarmdagen"],
    ["18, 10", "Internationella slipsdagen"],
    ["19, 10", "Nationella dagen för Strävhårig Foxterrier"],
    ["20, 10", "Världsdagen för statistik"],
    ["22, 10", "INTERNATIONELLA CAPS LOCK-DAGEN"],
    ["23, 10", "Internationella moldagen"],
    ["24, 10", "FN-Dagen"],
    ["25, 10", "Internationella pasta-dagen"],
    ["26, 10", "Potatisens dag"],
    ["27, 10", "Alla svärmödrars dag"],
    ["28, 10", "Internationella animationens dag"],
    ["29, 10", "Internets dag"],
    ["30, 10", "Dennis Ritchie Day"],
    ["31, 10", "Halloween"],
    ["1, 11", "Allhelgonadagen"],
    ["2, 11", "De dödas dag"],
    ["3, 11", "No hate day"],
    ["4, 11", "Kaninköttets dag"],
    ["5, 11", "Guy Fawkes Day"],
    ["6, 11", "Gustav Adolfsdagen"],
    ["7, 11", "Kladdkakans dag"],
    ["8, 11", "Infraservicedagen"],
    ["9, 11", "Världsdagen för vetenskap för fred och utveckling"],
    ["10, 11", "Mårtensafton"],
    ["11, 11", "Hågkomstens dag"],
    ["12, 11", "Alla krossade hjärtans dag"],
    ["13, 11", "Smörgåstårtans dag"],
    ["14, 11", "Världsdiabetesdagen"],
    ["15, 11", "Musikterapins dag"],
    ["16, 11", "Internationella dagen för tolerans"],
    ["17, 11", "Internationella prematurdagen"],
    ["18, 11", "Adoptionernas Dag"],
    ["19, 11", "Internationella mansdagen"],
    ["20, 11", "Internationella barndagen"],
    ["21, 11", "Världshejardagen"],
    ["22, 11", "Wienerbrödets dag"],
    ["23, 11", "Internationella hattdagen"],
    ["24, 11", "Black Friday"],
    ["25, 11", "Internationella dagen mot våld mot kvinnor"],
    ["26, 11", "Internationella dagen mot missbruk av och olaglig handel med narkotika"],
    ["27, 11", "Flaskmatardagen"],
    ["28, 11", "Albaniens nationaldag"],
    ["29, 11", "Vinylskivans dag"],
    ["30, 11", "Kåldolmens dag"],
    ["1, 12", "Internationella AIDS-dagen"],
    ["2, 12", "Internationella dagen för avskaffande av slaveri"],
    ["3, 12", "Internationella dagen för handikappade"],
    ["4, 12", "Lesothos nationaldag"],
    ["5, 12", "Kanadas nationaldag"],
    ["6, 12", "Finlands självständighetsdag"],
    ["7, 12", "Internationella civil luftfartsdagen"],
    ["8, 12", "Musikfri dag"],
    ["9, 12", "Pepparkakans dag"],
    ["10, 12", "Nobeldagen"],
    ["11, 12", "Internationella dagen för berg"],
    ["12, 12", "Julstjärnans dag"],
    ["13, 12", "Luciadagen"],
    ["14, 12", "Världsmiljödagen"],
    ["15, 12", "Internationella skogen-dagen"],
    ["16, 12", "Bahrain's nationaldag"],
    ["17, 12", "Bhutan's nationaldag"],
    ["18, 12", "Internationella migrationsdagen"],
    ["19, 12", "Internationella dagen för syd-syd-samarbete"],
    ["20, 12", "Internationella dagen för mänsklig solidaritet"],
    ["21, 12", "Skumtomtens dag"],
    ["22, 12", "Vintersolståndet"],
    ["23, 12", "Drottningens födelsedag"],
    ["24, 12", "Julafton"],
    ["25, 12", "Juldagen"],
    ["26, 12", "Annandag jul"],
    ["31, 12", "Nyårsafton"],
]);


function getThemeDay() {
    const now = new Date();
    const themeDayText = document.querySelector("#theme-day-div h1");
    themeDayText.textContent = dateTextMap.get(now.getDate() + ", " + (Number)(now.getMonth()+1))
}

getThemeDay()