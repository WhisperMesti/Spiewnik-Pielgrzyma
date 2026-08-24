
const songs = [
  {
    number: 0,
    title: "!!!Ogłoszenia!!!!",
    lyrics: `Nie ma żadnych ogłoszeń i już nie będzie. 
Wszystkie ogłoszenia bedą podawane na bieżąco`
  },
  {
    number: 1,
    title: "Abba,Ojcze",
    lyrics: `Ty wyzwoliłeś nas Panie
Z kajdan i samych siebie
A Chrystus stając się bratem
Nauczył nas wołać do Ciebie:

Abba Ojcze!/x4 

2. Bo Kościół jak drzewo życia
W wieczności zapuszcza korzenie
Przenika naszą codzienność
I pokazuje nam Ciebie
3. Bóg hojnym Dawcą jest życia
On wyswobodził nas z śmierci
I przygarniając do siebie
Uczynił swoimi dziećmi.
4. Wszyscy jesteśmy braćmi
Jesteśmy jedną rodziną.
Tej prawdy nic już nie zaćmi
I teraz jest jej godzina.`
  },
  {
    number: 2,
    title: "Alleluja, chwalcie Pana",
    lyrics: `1.Alleluja, chwalcie Pana u świątyni bram,
Chwalcie Go na niebiosach pośród gwiazd.
Chwalcie Go za wielkie dzieła Jego rąk,
Chwalcie Go, bo króluje pośród nas.

Wszystko, co żyje, niech chwali Go, alleluja!
Wszystko, co żyje, niech chwali Go, alleluja!

2.Chwalcie Pana dźwiękiem rogu, chwalcie Go,
Chwalcie Go na cytrze i na harfie.
Chwalcie Go na bębnach, chwalcie tańcem,
Dźwięczcie struny, niech zaśpiewa flet.

3.Na cymbałach dźwięcznych chwalcie Pana,/
Na cymbałach brzmiących chwalcie Go/x2`
  },
  {
    number: 3,
    title: "Alleluja, hosanna",
    lyrics: `A–a–a–alleluja, ho–ho–ho–hosanna
Mój Pan kocha mnie,
Jego radość jest w sercu mym`
  },
  {
    number: 4,
    title: "Alleluja, On jest Światłem",
    lyrics: `A–a–a–alleluja. / x2
On jest Światłem, On jest Drogą
Prawdą, Życiem, Jezus Panem jest!`
  },
  {
    number: 5,
    title: "Amen, Amen Alleluja",
    lyrics: `Ref: Alleluja, alleluja, amen, amen, alleluja/x2
Pokłońmy się przed Nim /
On naszym Panem jest   /3x 
Amen Amen, Alleluja!  
2. Radujmy się bracia On naszym 
3. Jezus Chrustus zmartwychwstał
4. Posyła nam Ducha 
5. Chrystus do nas powróci 
6. Śpiewajmy mu pieśni`
  },
  {
    number: 6,
    title: "Barka",
    lyrics: `1. Pan kiedyś stanął nad brzegiem,
Szukał ludzi gotowych pójść za Nim,
By łowić serca Słów Bożych prawdą.

Ref.:O Panie, to Ty na mnie spojrzałeś,
Twoje usta dziś wyrzekły me imię.
Swoją barkę pozostawiam na brzegu,
Razem z Tobą nowy zacznę dziś łów.

2. Jestem ubogim człowiekiem,
Moim skarbem są ręce gotowe
Do pracy z Tobą I czyste serce.
   3. Ty, potrzebujesz mych dłoni,
   Mego serca młodego zapałem
   Mych kropli potu I samotności.
4. Dziś wypłyniemy już razem
Łowić serca na morzach dusz ludzkich
Twej prawdy siecią I słowem życia.`
  },
  {
    number: 7,
    title: "Bądź pochwalony",
    lyrics: `1. Bądź pochwalony, bądź pochwalony. /4x 
Bądź pochwalony na niebie,
bądź pochwalony na ziemi
Bądź pochwalony w świątyni Twej,
Jezu, Jezu pochwalony bądź.
2. Wielbię Cię, Panie. /4x
Wielbię Cię wraz z aniołami,
wielbię Cię z całego serca,
Wielbię Cię, Panie, w świątyni Twej,
Jezu, Jezu, pragnę wielbić Cię.`
  },
  {
    number: 8,
    title: "Będę śpiewał Tobie Mocy moja",
    lyrics: `Będę śpiewał Tobie Mocy moja
Ty Panie jesteś mą nadzieją
Tobie ufam i bać się nie będę`
  },
  {
    number: 9,
    title: "Blisko, blisko jesteś",
    lyrics: `Blisko, blisko, blisko Jesteś Panie mój
Blisko tak, że czuję tchnienie Twe
I przychodzisz do mnie, już dotykasz mnie,
Łaską przebaczenia karmisz moją duszę`
  },
  {
    number: 10,
    title: "Błogosławieni miłosierni-Hymn ŚDM 2016",
    lyrics: `1. Wznoszę swe oczy ku górom, skąd
Przyjdzie mi pomoc;
Pomoc od Pana, wszak Bogiem On
Miłosiernym jest!
2. Kiedy zbłądzimy, sam szuka nas,
By w swe ramiona wziąć,
Rany uleczyć Krwią swoich ran,
Nowe życie tchnąć!

Błogosławieni miłosierni,
albowiem oni miłosierdzia dostąpią!

3. Gdyby nam Pan nie odpuścił win,
Któż ostać by się mógł?
Lecz On przebacza, przeto i my
Czyńmy jak nasz Bóg!`
  },
  {
    number: 11,
    title: "Błogosławione jest imię Twe",
    lyrics: `Błogosławione jest Imię Twe /
Błogosławione jest Imię Twe /
I wywyższone nad wszelką chwałę i cześć. /
Tyś jedynie Panem jest / 2x

Powstań i Pana chwal 
Chwal Go na wieki 
Powstań – chwal Boga wciąż
On jedynie jest Panem
Powstań i Pana chwal
Chwal Go na wieki
Powstań chwal Boga wciąż
On Panem wszechświata jest.`
  },
  {
    number: 12,
    title: "Bo nikt nie ma z nas",
    lyrics: `Bo nikt nie ma z nas, tego, co mamy razem
Każdy wnosi ze sobą to, co ma najlepszego.
Zatem aby wszystko mieć potrzebujemy siebie razem.
Bracie, siostro! Ręka w rękę z nami idź!`
  },
  {
    number: 13,
    title: "Boża radość jak rzeka",
    lyrics: `1.Boża radość jak rzeka, Boża radość jak rzeka,
Boża radość wypełnia duszę mą (alleluja).
Boża radość jak rzeka, Boża radość jak rzeka,
Boża radość wypełnia duszę mą (alleluja).
2.Boża miłość...
3.Boża ufność...
4.Boży pokój...`
  },
  {
    number: 14,
    title: "Boże Twa łaska",
    lyrics: `Boże Twa łaska nad nami jest,
Twoja miłość przychodzi wciąż,
Działa w mocy pośród nas,
Przenika serca, gładzi grzech.
Ref: My chcemy, więcej Ciebie,
więcej łaski Twej,
Pragniemy, więcej mocy,
więcej miłości Twojej.`
  },
  {
    number: 15,
    title: "Bóg kocha mnie",
    lyrics: `Bóg kocha mnie takiego jakim jestem,
Raduje się każdym moim gestem.
Alleluja! Boża radość mnie rozpiera!`
  },
  {
    number: 16,
    title: "Bóg nasz Pan",
    lyrics: `Bóg nasz Pan jest dobry cały czas/x2 
więc uwielbij Go/x4`
  },
  {
    number: 17,
    title: "Bóg nie umarł, Jezus żyje",
    lyrics: `Bóg nie umarł, Jezus żyje /x3
Daj mu ręce swe, daj mu serce swe,
Daj mu nogi swe, daj mu duszę swą.
On twoim Panem jest.`
  },
  {
    number: 18,
    title: "Bóg tak umiłował świat",
    lyrics: `Bóg tak umiłował świat,
że Syna Swego Jednorodzonego dał,
aby każdy kto w Niego wierzy,
nie zginął, ale życie wieczne miał.
O, Jezus, Jezus, Jezus! /x2`
  },
  {
    number: 19,
    title: "Braciszkowie skrzydlaci",
    lyrics: `1.Do kogo mówisz, do kogo się uśmiechasz
Święty Franciszku?
Tu ludzi nie ma, las szumi jak rzeka,
Ptaki świergocą i słychać Twój głos.

Ref.: Braciszkowie skrzydlaci, chwalcie Boga, chwalcie Boga,
Bo czym my, stworzenia zdołamy odpłacić,
Jeśli nie piosenką ubogą. 
Za słońce jasne, Niebo czyste 
i łąki zieleń i łąki zieleń.

2.Coś podniósłszy w dłonie tłumaczysz,
gestami rąk zaciekawiasz.
Aż zasłuchały się wszystkie drzewa, 
liście umilkły i słychać Twój głos.
3.Żarnowce rozsiadły się na polanie 
tworząc złocistą plamę.
A Ciebie jakby tłum otaczał 
w katedrze wspaniałej i słychać Twój głos.
4.Umilkł Święty, zabrzmiał świergot jak dzwonki. /x3`
  },
  {
    number: 20,
    title: "Była cicha i piekna jak wiosna",
    lyrics: `1. Była cicha i piękna jak wiosna,
Żyła prosto, zwyczajnie, jak my.
Ona Boga na świat nam przyniosła
I na ziemi wśród łez nowe dni zajaśniały.

Ref.: Matka, która wszystko rozumie,
Sercem ogarnia każdego z nas.
Matka zobaczyć dobro w nas umie,
Ona jest z nami w każdy czas.

2. Dzisiaj światu potrzeba dobroci,
By niepokój zwyciężyć i zło.
Trzeba ciepła, co życie ozłoci,
Trzeba Boga, więc ludziom nieśmy Go, tak jak Ona
3. Życie niesie ze sobą cierpienie,
Zewsząd krzyże, zawody i ból.
Serce ludzkie wśród męki, udręczenia,
Ma nadzieję, że wciąż Ona czuwa i kocha.`
  },
  {
    number: 21,
    title: "Chcę przestąpić Jego próg",
    lyrics: `Chcę przestąpić Jego próg
z dziękczynieniem w sercu mym,
I w przedsionki Pana wejść, chwaląc Go.
Bo kolejny nadszedł dzień, 
który dał nam Bóg,
Chcę śpiewać Mu, bo Pan radością mą.

Pan radością mą, Pan radością mą,
Chcę śpiewać Mu, bo Pan radością moją jest.
Pan radością mą, Pan radością mą,
Chcę śpiewać Mu, bo Pan radością mą`
  },
  {
    number: 22,
    title: "Chcę wywyższać Imię Twe",
    lyrics: `Chcę wywyższać Imię Twe 
Chcę zaśpiewać Tobie chwałę 
Panie dziś raduję się 
Bo przyszedłeś, by mnie zbawić.

Ref.: Z Nieba zstąpiłeś i chcesz prowadzić mnie 
Na krzyżu zmarłeś, by mój zapłacić dług
Z grobu wstałeś i dziś Nieba Królem jesteś Ty 
Chcę wywyższać Imię Twe.`
  },
  {
    number: 23,
    title: "Chlebie najcichszy",
    lyrics: `Ref.: Chlebie najcichszy, otul mnie swym milczeniem.
Ukryj mnie w Twojej bieli, wchłoń moją ciemność.
1.Przemień mnie w siebie, bym jak Ty stał się chlebem
Przemień mnie w siebie, bym jak Ty stał się chlebem
Pobłogosław mnie, połam, rozdaj łaknącym braciom
Pobłogosław mnie, połam, rozdaj łaknącym braciom
2.A ułomki chleba, które zostaną 
A ułomki chleba, które zostaną
Rozdaj tym, którzy nie wierzą w swój głód, 
Rozdaj tym, którzy nie wierzą w swój głód.`
  },
  {
    number: 24,
    title: "Chodziłem w grzechu całe dnie",
    lyrics: `1.Chodziłem w grzechu całe dnie,
Ty ukochałeś mnie. 
Nadałeś memu życiu sens,
więc śpiewam Tobie pieśń.

Ref. Pieśnią niech me życie się stanie, 
Pieśnią ku Twej chwale, o Panie. 
Pieśnią tą przemieniasz działanie w modlitwę
Panie mój, dla Ciebie chcę śpiewać,
Serca Twą radością ogrzewać,
Miłość nieść każdemu, kto na mojej drodze. 
2.Z radością w sercu idę wciąż,
gdyż Pana w sercu mam.
Problemy, smutki giną gdzieś,
gdy śpiewam Bogu pieśń.
3.Ty bracie, siostro, otwórz się
na Boga głośny zew
I Ewangelię bliźnim nieś
śpiewając Bogu pieśń.
4. Jezus swoją Matkę dał
Jej chwała hołd i cześć
I nigdy już nie będę sam
więc śpiewam Tobie pieśń.
5. Do Ciebie Matko idę tu
W pielgrzymim szklaku dziś
Z Koziegłówkami razem znów
Upaść do Jej stóp.
Więc śpiewam tobie pieśń`
  },
  {
    number: 25,
    title: "Chodziłeś Panie po ziemi",
    lyrics: `1.Chodziłeś Panie po ziemi jak człowiek.
Jak człowiek serce i dwie ręce miałeś.
To wielkie serce dzieliłeś dla ludzi,
Jak chleb powszedni dawałeś.

I ludzie biorą ten chleb z Twoich dłoni,
Bo one dają wciąż tak jak dawały,
Więc w swoje ręce weź mnie, o Panie,
Jak dar, bo Twój jestem cały.

Ref.: Daję Ci serce moje, Panie,
Daję Ci silne ręce moje.
Dodawaj sił im nieustannie,
By udźwignęły świat ku Tobie/ x2 
(by udźwignęły świat.)

2.Chodziłeś, Panie, po ziemi jak człowiek (...) 
O Panie, naucz człowieka tej sztuki,
By sercem patrzył, miłował i bronił,
Bo Ty do świata wyciągasz ramiona
I miłość podajesz na dłoni.`
  },
  {
    number: 26,
    title: "Chrystus Pan karmi nas",
    lyrics: `Ref.: Chrystus Pan karmi nas 
swoim świętym Ciałem,
Chwalmy Go na wieki!

1.Duchem całym wielbię Pana, 
Boga, Zbawcę jedynego,
Bo w Nim samym odnajduję 
wszystką radość życia mego.
   2.Wielbię, bo chciał wejrzeć z nieba 
   na swą sługę uniżoną, 
   By mnie odtąd wszyscy ludzie 
   mogli zwać Błogosławioną.
3.Sprawił we mnie wielkie dzieła, 
w swej dobroci niepojętej. 
On Wszechmocny, On Najwyższy, 
On sam jeden zawsze Święty.
   4.On, który przez pokolenia 
   pozostaje miłosierny 
   Wobec tego, kto Mu służy 
   i chce zostać Jemu wierny.
5.On, który swą moc objawia, 
gdy wyniosłość serc uniża, 
Każdy zamiar może zburzyć, 
który pychą Mu ubliża.
   6.W mocy Jego odjąć władzę, 
   a wydźwignąć pokornego, 
   Wszystkich głodnych zaspokoić, 
   głodem wstrząsnąć bogatego.
7.On się ujął za swym ludem, 
dziećmi wiary Abrahama, 
Pomny na swe miłosierdzie, 
obietnicy swej nie złamał`
  },
  {
    number: 27,
    title: "Chwalcie Pana Niebios",
    lyrics: `Ref.: Chwalcie Pana niebios, chwalcie go na cytrze / 
Chwalcie Króla świata, bo on Bogiem jest. / x2

1.Chwal duszo moja Pana mego Króla,
Chcę chwalić Pana jak długo będę żył,
Chcę śpiewać memu Bogu póki będę istniał,
Chcę Go wysławiać, śpiewać Alleluja!
2.Szczęśliwy ten, któremu Pan jest pomocą,
Kto ma nadzieję w Panu Bogu swym,
W Bogu, który stworzył niebo i ziemię,
Wszystko co żyje śpiewa Alleluja!
3.Pan Bóg króluję, wesel się ziemio,
Bóg twój Syjonie przez pokolenia
On dał Ci życie, On dał Ci wszystko,
Śpiewaj Mu, wysławiaj Go Alleluja.`
  },
  {
    number: 28,
    title: "Chwalę Ciebie Panie i uwielbiam",
    lyrics: `Chwalę Ciebie Panie i uwielbiam,
Wznoszę w górę swoje ręce
Uwielbiając Imię Twe ! 

Ref: Bo wielkiś Ty !
 Wielkie dzieła czynisz dziś
 Nie dorówna Tobie nikt ! / x2
 
2.Jesteś mą nadzieją,Wiarą, życiem.
Daj mi poznać swoje drogi,
Bym nie zbłądził nigdy już !
3.Jesteś świata Panem i Opoką.
W Tobie składam troski swoje,
Daję Tobie serce swe !`
  },
  {
    number: 29,
    title: "Chwała Ojcu",
    lyrics: `oooooooo
Chwała Ojcu i Synowi i Duchowi Świętemu
Jak była na początku teraz i zawsze
i na wieki wieków Amen`
  },
  {
    number: 30,
    title: "Ci, którzy Jahwe ufają",
    lyrics: `Ci, którzy Jahwe ufają,
są jak góra Syjon,
Co się nigdy nie porusza, /
ale trwa na wieki. / x2
Góry otaczają Jeruzalem, 
tak Jahwe otacza swój lud.
I teraz i na wieki. I teraz i na wieki.

O! Góry otaczają Święte Miasto Jeruzalem, 
tak Jahwe otacza swój lud.
I teraz i na wieki. I teraz i na wieki.`
  },
  {
    number: 31,
    title: "Cieszcie się weselcie się",
    lyrics: `Ref.: Cieszcie się, weselcie się
śpiewajcie i grajcie Mu. / x2

1.Zagrajcie Panu nową pieśń,
albowiem cuda nam uczynił
On zbawił nas, objawił się
On wierny jest dla Izraela.

2.Rozraduj cała Ziemio się,
śpiewajcie Mu przy wtórze cytry,
Przy dźwięku harfy weselcie się,
wobec Boga On jest naszym Królem.

3.Zaklaszczcie rzeki w dłonie swe,
niechaj góry wołają radośnie.
Przychodzi Pan, by sądzić nas,
On okaże swoja sprawiedliwość`
  },
  {
    number: 32,
    title: "Cieszę się, Jezus zbawił mnie",
    lyrics: `Cieszę się, Jezus zbawił mnie /x3
Śpiewam Chwała Alleluja,
Jezus zbawił mnie 
2.Kiedy byłem grzesznym, Jezus... x3
Śpiewam Chwała Alleluja,
Jezus zbawił mnie
3.Chcę powiedzieć wszystkim, Jezus… x3
Śpiewam Chwała Alleluja,
Jezus zbawił mnie
4. Będę Go uwielbiał, Jezus zbawiłx3`
  },
  {
    number: 33,
    title: "Czarna Madonna",
    lyrics: `Jest zakątek na tej ziemi,
Gdzie powracać każdy chce,
Gdzie króluje Jej Oblicze,
Na Nim cięte rysy dwie.
Wzrok ma smutny, zatroskany,
Jakby chciała prosić cię,
Byś w matczyną Jej opiekę oddał się.

Ref. Madonno, Czarna Madonno,
Jak dobrze Twym dzieckiem być!
O, pozwól, Czarna Madonno,
W ramiona Twoje się skryć!

2.W Jej ramionach znajdziesz spokój
I uchronisz się od zła,
Bo dla wszystkich swoich dzieci
Ona serce czułe ma.
I opieką cię otoczy,
Gdy Jej serce oddasz swe,
Gdy powtórzysz Jej z radością słowa 

3. Dziś, gdy wokół nas niepokój,
Gdzie się człowiek schronić ma,
Gdzie ma pójść, jak nie do Matki,
Która ukojenie da?
Więc błagamy, o Madonno,
Skieruj wzrok na dzieci swe
I wysłuchaj, jak śpiewamy prosząc Cię:`
  },
  {
    number: 34,
    title: "Czasem bywa gorzej",
    lyrics: `Ref: Boże, mój Boże
tańcem spiewem chwalę Ciebie
Boże, mój Boże to pomoże mi x2

1. Czasem bywa gorzej
O Boże, mój Boże
wtedy ja niebożę
głośno śpiewam Ci
Chwalić Ciebie będę
czy lepiej, czy gorzej
chwalić nie przestanę
póki będę żył

2. Dzień się już nachylił
O Boże, mój Boże
głowę pora schylić
podziękować Ci
A ja z Tobą tańczę
raz lepiej, raz gorzej
śpiewem i tańczeniem
błogosławisz mi

3. Widzę ciebie wszędzie
O Boże, mój Boże
ludzie co to będzie
wszystko zmieni się
Czuję, że znów żyję
O Boże, mój Boże
chyba się upiję
Twoim duchem, hej!`
  },
  {
    number: 35,
    title: "Czcijmy Jezusa",
    lyrics: `Czcijmy Jezusa, czcijmy Go! /4x
Powstał z martwych, /x2
I On żyje na wieki już.
Powstał z martwych,/x2
Więc razem się radujmy 
świętując zmartwychwstania ten dzień.`
  },
  {
    number: 36,
    title: "Czekam na Ciebie dobry Boże",
    lyrics: `1.Czekam na Ciebie Dobry Boże,
Przyjdź do mnie Panie, pospiesz się.
Niechaj mi łaska Twa pomoże,
Chcę czystym sercem przyjąć Cię.

Ref.: Przyjdź do mnie Panie, mój Dobry Boże,
Przyjdź i nie spóźniaj się.
Przyjdź do mnie Panie, przyjdź z łaską swoją,
Przyjdź i nie spóźniaj się.

2.Wśród licznych trosk i niepokojów, 
kiedy już sił nie starcza nam, 
Karmisz nas Panie swoim Ciałem, 
Tyś nasza moc, nasz Bóg i Pan.

Ref.: Przyjdź do nas Panie, nasz Dobry Boże...`
  },
  {
    number: 37,
    title: "Daj mi, proszę, dobry Boże",
    lyrics: `Daj mi, proszę, dobry Boże,
Zamiast drogi - to bezdroże,
Które prosto poprowadzi
Poprowadzi mnie w nieznane.
Innym, dobry Boże, zostaw
Wstęgi ulic i autostrad,
A ja niech już na manowcach pozostanę!
Pozwól mi się, Boże, błąkać
Po gęstwinach i po łąkach,
W niepewności wydeptywać tysiąc ścieżek.
Nie bój się, że gdzieś przepadnę,
Dokąd iść mam - nie odgadnę...
Uwierz we mnie, jak ja w ciebie, Boże, wierzę!
2.Spełnij, proszę, o czym marzę!
Niech pod tęczy twej ołtarzem
Wyspowiadam gorzkie żale, słodkie grzechy!
I niech sercu siły doda
Darowana mi swoboda,
Co nie szczędzi mi ni smutku, ni pociechy!
Choć niejeden dasz mi, Boże,
Do zgryzienia twardy orzech,
Daj też iskrę, żeby radość z niej rozniecić!
I nadzieję mi pozostaw,
Że gdy drodze swej nie sprostam,
Ty, mój dobry Boże, wyjdziesz mi naprzeciw!`
  },
  {
    number: 38,
    title: "Despacito-Tak, razem ruszamy w trudną drogę",
    lyrics: `Tak, razem ruszamy w trudną drogę tę
Do Maryi w górę wciąż.
Tak, razem ruszamy w trudną drogę tę
Bo pragnienie serca ciągnie nas.
Tu, tu jest miejsce, tu jest pora, tu jest czas
Niech Twa łaska, siła Boże, rośnie w nas, 
by owocny był pielgrzymi szlak. 
Pan nieustannie swoich sił dodaje nam
Królów Król i Panów Pan prowadzi nas, 
daje wiarę i nadzieję. 

Nie tak szybko, krok po kroku do Maryi 
nie tak szybko
Matka Boża będzie z tobą zawsze blisko
gdy jej szczerze oddasz wszystko/x2 

Zdrowaś Maryjo, Łaski pełna, Pan jest z Tobą 
Błogosławionaś Ty/ x2 

Szybko, tak szybko, blisko bardzo blisko
Jezus i Maryja zrobią dla mnie wszystko/ x4`
  },
  {
    number: 39,
    title: "Do Maryi z nami udaj się! (Numa, numa yey)",
    lyrics: `Do Maryi z nami udaj się!
Ona nigdy nie zawiedzie Cię,
nie zapomni Cię, nigdy nie opuści Cię.x2
Maryja tu, Maryja tam,
Bo Ona tam na Ciebie czeka.
Maryja tu………
Pielgrzymuj z nią! I nie narzekaj!`
  },
  {
    number: 40,
    title: "Dobra Matko i Królowo",
    lyrics: `Dobra Matko i Królowo z Jasnej Góry,
Z wdzięcznym sercem dziś ku Tobie wznoszę wzrok.
Nie potrafię podziękować za Twe serce,
Którym wspierasz każdy czyn mój, każdy krok.

Ref.:Jesteś tuż obok mnie, jesteś ze mną
W rannej mgle, w słońcu dnia i w noc ciemną.
Wspierasz mnie, chronisz mnie w swych ramionach,
Jesteś tuż obok mnie w każdy dzień.

2.Gdy upadam, Ty wyciągasz do mnie ręce,
Gdy mi ciężko, Ty oddalasz to, co złe.
Twą obecność czuję zawsze, czuję wszędzie,
Z Tobą Matko tak radosne serce me.
3. Choćby chmury przysłoniły Cię, Maryjo,
I zginęła gdzieś za nimi Twoja twarz,
Wiem, że serce Twe i oczy zawsze żyją,
Wiem, że jesteś przy mnie blisko, wiem, że trwasz.`
  },
  {
    number: 41,
    title: "Dotknij, Panie, moich oczu",
    lyrics: `Dotknij, Panie, moich oczu, 
Abym przejrzał.
Dotknij, Panie, moich warg,
Abym przemówił – z uwielbieniem.
Dotknij, Panie, mego serca i oczyść je.
Niech Twój Święty Duch dziś ogarnia mnie.`
  },
  {
    number: 42,
    title: "Drzewo (Małe TGD)",
    lyrics: `Nie ma tak wysokiego drzewa
Na które byś się nie wspiął
Żeby ratować mnie
Nie ma takiej głębokiej wody
Do której byś nie wskoczył
Żeby ratować mnie

Kto Cię zna, ten już wie!

Nie zatrzyma Ciebie nic
Żadna siła nie pokona
Nikt nie kocha mnie jak Ty
Tak mi dobrze w Twych ramionach!

Nie ma tak gorącego piasku
Po którym byś nie przeszedł
Żeby ratować mnie
Nie ma takiej wichury śnieżnej
Której byś nie przetrzymał
Żeby ratować mnie

Kto Cię zna, ten już wie!

Nie zatrzyma Ciebie nic
Żadna siła nie pokona
Nikt nie kocha mnie jak Ty
Tak mi dobrze w Twych ramionach

Za wysokie drzewo? (Nie ma)
Za głęboka woda? (Nie ma)
Drzewo? (Nie ma)
Woda? (Nie ma)
Drzewo, woda? (Nie ma, nie ma)
Za gorący piach? (Nie ma)
Lub za zimny wiatr? (Nie ma)
Piach? (Nie ma)
Wiatr? (Nie ma)
Piach, wiatr? (Nie ma, nie ma)
Za wysokie drzewo? (Nie ma)
Za głęboka woda? (Nie ma)
Drzewo? (Nie ma)
Woda? (Nie ma)
Drzewo, woda? (Nie ma, nie ma)
Za gorący piach? (Nie ma)
Lub za zimny wiatr? (Nie ma)
Piach? (Nie ma)
Wiatr? (Nie ma)

Nie zatrzyma Ciebie nic
Żadna siła nie pokona
Nikt nie kocha mnie jak Ty
Tak mi dobrze w Twych ramionach!

Nie ma tak wysokiego drzewa
Na które byś się nie wspiął
I to zdarzyło się
Było jedno samotne drzewo
Ratunek dla każdego
Uratowałeś mnie`
  },
  {
    number: 43,
    title: "Duchu Ogniu",
    lyrics: `Ref.: Duchu Ogniu, Duchu Żarze,
Duchu Światło, Duchu Blasku,
Duchu Wichrze i Pożarze,
Ześlij promień Twojej łaski!

1. Chcesz – rozpalisz i rozognisz
Serca wzniesiesz na wysokość.
W ciemność rzucisz blask pochodni
I rozproszysz grzechu mroki.
2.Naszą nicość odbudujesz 
w najpiękniejsze znów struktury, 
Tchnieniem swoim świat przesnujesz 
w szeleszczących modlitw sznury.
3.Z mgieł konkretny kształt wywodzisz 
i z chaosu piękno ładu, 
Tyś spokojem wśród niezgody, 
w bezradności Tyś jest Radą.
4.Twe zbliżenie zaróżowi 
pulsem życia, wzrostu drżeniem 
Narodzimy się na nowo, 
ciemność stanie się promieniem.`
  },
  {
    number: 44,
    title: "Duchu Święty przyjdź",
    lyrics: `Duchu Święty przyjdź / x2 
Niech wiara zagości 
Nadzieja zagości
niech miłość zagości w nas.`
  },
  {
    number: 45,
    title: "Duchu Święty wołam przyjdź",
    lyrics: `Duchu Święty wołam przyjdź,/
bądź jak ogień w duszy mej,/
bądź jak ogień w ciele mym,/
rozpal mnie! /2x

Wszechmogący Bóg jest pośród nas,
miłosierdzie Jego wielkie jest. 
Okazuje dobroć swoją dziś,
dla tych, którzy chcą miłować Go`
  },
  {
    number: 46,
    title: "Duchu Święty, powiej wiatrem",
    lyrics: `1.Duchu Święty, powiej wiatrem
i z mocą na nas zstąp.
Bądź miłością w naszych sercach, 
światłem ogarnij nas. 

Ref. Daj nowe oczy, ześlij swój ogień
I jedność z Tobą daj. 
 
2.Z czterech wiatrów, powiej Duchu, 
przybądź z mocą, ożyw nas.
Bądź wolnością w naszych sercach, 
życiem wypełnij nas.`
  },
  {
    number: 47,
    title: "Duszo ma Pana chwal",
    lyrics: `Ref. Duszo ma Pana chwal 
Oddaj Bogu cześć 
Świętemu śpiewaj pieśń
Z mocą wywyższaj Go Duszo ma 
Uwielbiam Boże Cię 
1.Nowy dzień wraz ze wschodem słońca 
Znów nadszedł czas by Ci śpiewać pieśń 
Cokolwiek jest już za mną 
i to wszystko co przede mną
Wiem, będę śpiewać gdy nadejdzie zmrok
2. Bogaty w miłość gniew oddalasz Panie
Twe serce miłe wielbię imię Twe
Ze względu na Twą dobroć 
będę śpiewać Tobie pieśni
Wiele powodów by uwielbiać Cię.
3. Przyjdzie dzień gdy bez sił zostanę
Nadejdzie czas mego końca tu
Dusza ma będzie 
już na zawsze Cię uwielbiać
W wieczności z Tobą piękna zabrzmi pieśń`
  },
  {
    number: 48,
    title: "Dzieckiem Bożym",
    lyrics: `Ref. Dzieckiem Bożym jestem ja, la la.../
Dzieckiem Bożym jestem ja, la la la /x2
1.Ojciec Bóg kocha nas, 
miłość swą zsyła nam,
Któż jak On wielki jest, 
któż jak On miłość ma.
Święty Bóg, Ojciec nasz, 
co dzień ma hojną dłoń,
Kocha nas, dzieci swe, 
mimo grzechów oraz wad.
2.Ojciec Bóg Syna dał,
jako dar grzesznym nam,
Jezus - Bóg zniżył się,
Jezus - Brat zbawił nas.
Poprzez krzyż grzechy starł,
życie dał, radość wniósł.
Zmartwychwstał jako Pan,
On jedyną drogą nam.
3. Słońce mam w sercu swym, 
bowiem Pan kocha mnie,
Cieszę się, śpiewam wciąż,
bowiem Pan kocha mnie.
Któż mi dał tyle łask,
przyjaźń swą, szczęścia moc,
Któż jak Bóg, któż jak Pan,
tak pokochał pięknie mnie.`
  },
  {
    number: 49,
    title: "Dzielmy się wiarą",
    lyrics: `Ref.:Dzielmy się wiarą jak chlebem 
Dajmy świadectwo nadziei.
Bóg ofiarował nam siebie,
I my mamy się Nim z ludźmi dzielić.

1. Chleba tego nie zabraknie, 
rozmnoży się podczas łamania. 
Potrzeba tylko rąk naszych
I gotowości dawania.
2. Nikt nie zapala lampy,
by potem ją schować pod korcem. 
Skoro nas Bóg światłem natchnął, 
trzeba z tym światłem iść w drogę.
3. Odrzućmy zwątpienie i trwogę,
i choć świat się śmieje z proroków. 
Musimy świadczyć odważnie
W służbie ludziom i Bogu.`
  },
  {
    number: 50,
    title: "Dzięki Jezu, dzięki Jezu",
    lyrics: `1. Dzięki Jezu, dzięki Jezu 
Dzięki Ci, o dzięki Ci, że kochasz mnie.
Dzięki Jezu, dzięki Jezu 
Dzięki Ci, o dzięki Ci, że kochasz mnie.
2. Tam na Golgocie umarłeś za mnie – dzięki Ci...
3. Zmartwychwstałeś, żyjesz we mnie – dzięki Ci...
4. Wkrótce przyjdziesz, stąd mnie weźmiesz – dzięki Ci...
5. Alleluja, alleluja – dzięki Ci...`
  },
  {
    number: 51,
    title: "Flaga - w miom sercu mieszka",
    lyrics: `W moim sercu mieszka Król,/ 
a Jego flagą miłość jest./ x2
A Jego flagą radość jest.

Podniosę flagę wysoko, wysoko. / x2
Niech pozna Boga cały świat. / x2
Niech wszyscy ludzie zobaczą, zobaczą. / x2
Niech pozna, Boga cały świat. / x2`
  },
  {
    number: 52,
    title: "Gdy idziemy poprzez świat",
    lyrics: `1.Gdy idziemy poprzez świat chwalmy Boga,
W każdym miejscu w każdy czas chwalmy Boga.
Nie ma w życiu zbędnych dni,
każda chwila ważna jest,
w każdej zobacz Bożą myśl.

Ref. Bo Bóg naszym Ojcem,
bo Bóg kocha nas.
On szlak nam wyznacza
i sam prowadzi nas. 

2. Gdy nam szumi górski las –
Gdy widzimy dobry film -
Gdy przychodzą miłe dni,
to radosne dobro chwal,
Które Bóg przeznaczył ci.
3. Gdy cierpienia przyjdzie czas –
Kiedy wszystko złości nas -
Gdy przychodzą smutne drzwi, 
przyjmij trudne dobro też.
Które Bóg przeznaczył Ci.`
  },
  {
    number: 53,
    title: "Gdy kiedyś Pan",
    lyrics: `1. Gdy kiedyś Pan - powróci znów, 
Gdy kiedyś Pan powróci znów, 
Abyśmy też tam byli,
Gdy kiedyś Pan powróci znów.
2. Gdy święci swój... opuszczą grób...
3. Gdy Boga tron... otoczą wkrąg...
4. Gdy księgę swą... otworzy Bóg...
5. Gdy po imieniu... wezwie Pan...
6. Gdy ucztę nam... zgotuje Bóg...
7. Gdy zabrzmi pieśń... Alleluja...`
  },
  {
    number: 54,
    title: "Gdy klęczę przed Tobą",
    lyrics: `1.Gdy klęczę przed Tobą,
modlę się i składam hołd,
Weź ten dzień, uczyń go Twym,
i we mnie miłość wznieć.

Ref.: Ave Maria, gratia plena,
Dominus tecum, benedicta tu. /2x

2.Wszystko Tobie daję,
każdy sen i każdą myśl.
Matko Boga, Matko moja,
wznieś je przed Pana tron!
   3.Gdy klęczę przed Tobą,
   widzę Twą radosną twarz.
   Każda myśl, każde słowo,
   niech spocznie w dłoniach Twych.`
  },
  {
    number: 55,
    title: "Gdy serce Twoje",
    lyrics: `1.Gdy serce twoje napełni się trwogą,
I ciężar ogromny przygniata do ziemi,
Gdy nogi nie chcą lub iść już nie mogą –
To pomyśl, że jest ktoś, kto wszystko to zmieni:

Ref.: To Matka ukoić może twe serce,
Przytulić tak mocno jak tuli Jezusa,
Wziąć wszystko co twoje we własne swe ręce
I zanieść ten skarb do Syna – Chrystusa.

2.Lecz musisz się zdobyć na trud jeszcze jeden, 
By poprzez wędrówkę w upale i znoju, 
Zobaczyć twarz Matki promienną i jasną,
By tam się z Nią spotkać i zaznać pokoju.
3.A jeśli ma w serce nadzieja powrócić, 
I nadać życiu nowe wartości,
Sprawić to może Panienka Przeczysta, 
Patrząc na ludzi oczyma miłości.`
  },
  {
    number: 56,
    title: "Gdyby wiara twa",
    lyrics: `Gdyby wiara twa  /
była wielka jak gorczycy ziarno, /
Te słowa mówi ci Pan. /x2

I z taką wiarą rzekłbyś do góry: /
Przesuń się, przesuń się. /x2

A góra posłusznie przesunie się,
Przesunie się, przesunie się.
W imię Jezusa przesunie się,
Przesunie się, przesunie się.
I chromy stanie na nogi swe,
Na nogi swe, na nogi swe.
I kto łzy leje, otrze je,
Otrze je, otrze je
I chory odzyska zdrowie swe,
Zdrowie swe, zdrowie swe.
l kto jest smutny, ucieszy się, 
ucieszy się, ucieszy się.

Spływa, spływa, spływa Duch Święty. /x2

Duch Święty swą mocą dotyka mnie,
Dotyka mnie, dotyka mnie,
Od czubka głowy po stopy me.
Po stopy me, po stopy me.`
  },
  {
    number: 57,
    title: "Gdzie jesteś, Panie Boże, Ojcze mój?",
    lyrics: `1. Gdzie jesteś, Panie Boże, Ojcze mój?
W skrytości serca szukam Twoich dróg.
O, usłysz głos wołania duszy mej,
Odpowiedz mi miłością wielką swą.

Ref.:Bo kiedy idę w życiu sam, jest mi źle,
Tylko Bóg, znając mnie, o tym wie.
Napełnij dziś od nowa, Panie, głębią Swą, Bym z 
radością innym ludziom dawał ją.

2. Gdy jesteś przy mnie, Panie, Boże mój,
To czuję się tak lekko, niby ptak.
Chcę odtąd dawać ludziom miłość Twą, Po to, by 
brata kochał zawsze każdy brat.`
  },
  {
    number: 58,
    title: "Głosem Twoim zostać chcę",
    lyrics: `1. Pamiętam dzień w którym znalazłeś mnie
Włożyłeś w usta nową pieśń
Że treścią życia mądrość siła jest
Dziś głosem Twoim zostać chcę
 
 Ref.:Głosem Twoim zostać chcę
 mówić Imię Jezus
 Głosem Twoim zostać chcę
 o miłości Twej opowiadać ludziom chcę
 
2. Każdego dnia pomnażasz siły me,
Twe Słowo Ciałem stało się,
Chlebem mej duszy wodą życia jest
Dziś głosem Twoim zostac chcę
3. Ty Apostołom dałeś swoją moc
Twym głosem Jezu stali sie
Uświęcaj serce me napełnij je
By głosem Twoim stalo się`
  },
  {
    number: 59,
    title: "Godzien jesteś",
    lyrics: `1.Godzien jesteś, godzien jesteś, 
Panie i Boże nasz,
Godzien jesteś przyjąć chwałę, 
chwałę, cześć i moc.
Ponieważ Ty wszystko stworzyłeś w swej Mocy
Wszystko stworzyłeś Ty sam,
I z woli Twojej zostało stworzone
Godzien jesteś wziąć cześć.

2.Godzien jesteś, godzien jesteś, 
Zbawco, Baranku nasz. 
Godzien jesteś przyjąć chwałę, 
chwałę, mądrość, moc.
Ponieważ zostałeś zabity za lud Twój, 
wszystkich zbawiłeś Ty sam, 
I przez Krew Twoją nabyłeś ich Bogu, 
godzien jesteś wziąć cześć.

3.Godzien jesteś, godzien jesteś, 
Panie i Boże nasz. 
Godzien jesteś, godzien jesteś, 
Zbawco, Baranku nasz.
Odebrać dziś chwałę i mądrość i wdzięczność, 
błogosławieństwo i moc; 
Bóg nasz niech przyjmie potęgę na wieki. 
Amen. Amen.`
  },
  {
    number: 60,
    title: "GODZINKI O NIEPOKALANYM POCZĘCIU NAJŚWIĘTSZEJ MARYI PANNY",
    lyrics: `NA JUTRZNIĘ
Zacznijcie wargi nasze, chwalić Pannę świętą,
Zacznijcie opowiadać cześć Jej niepojętą.
Przybądź nam miłościwa Pani, ku pomocy,
A wyrwij nas z potężnych nieprzyjaciół mocy.
Chwała Ojcu, Synowi Jego Przedwiecznemu
I równemu Im w Bóstwie Duchowi Świętemu.
Jak była na początku i zawsze i ninie,
Niech Bóg w Trójcy Jedyny na wiek wieków słynie.

HYMN
Zawitaj Pani świata, niebieska Królowa,
Witaj, Panno nad panny, gwiazdo porankowa!
Zawitaj, pełna łaski, prześliczna światłości,
Pani, na pomoc świata śpiesz się, zbaw nas z złości.
Ciebie Monarcha wieczny od wieków Swojemu,
Za Matkę obrał Słowu Jednorodzonemu,
Przez które ziemi okrąg i nieba ogniste,
I powietrze, i wody stworzył przezroczyste.
Ciebie, Oblubienicę przyozdobił sobie,
Bo przestępstwo Adama nie ma prawa w Tobie.

K. Wybrał Ją Bóg i wywyższył ponad wszystko.
W. I wziął Ją na mieszkanie do przybytku Swego.
K. Pani, wysłuchaj modlitwy nasze.
W. A wołanie nasze niech do Ciebie przyjdzie.


Módlmy się: Święta Maryjo, Królowo Niebieska, 
Matko Pana naszego Jezusa Chrystusa i Pani świata, która nikogo nie opuszczasz i nikim nie gardzisz, 
wejrzyj na nas, Pani nasza, łaskawym okiem miłosierdzia Swego i uproś nam u Syna Swego miłego odpuszczenie wszystkich grzechów naszych, 
abyśmy, którzy teraz święte Twoje Niepokalane Poczęcie nabożnym sercem rozpamiętywamy, 
wiecznego błogosławieństwa zapłatę w Niebie otrzymać mogli, co niechaj da Ten, któregoś Ty Panno, porodziła, Syn Twój, a Pan nasz Jezus Chrystus, 
który z Ojcem i Duchem Świętym żyje i króluje w Trójcy Świętej Jedyny, Bóg na wieki wieków.

W. Amen.
K. Pani, wysłuchaj modlitwy nasze.
W. A wołanie nasze niech do Ciebie przyjdzie.
K. Błogosławmy Panu.
W. Bogu chwała.
K. A dusze wiernych zmarłych przez miłosierdzie Boże niech odpoczywają w pokoju.
W. Amen.

-------------------------------------

NA PRYMĘ
Przybądź nam, miłościwa Pani, ku pomocy,
A wyrwij nas z potężnych nieprzyjaciół mocy.
Chwała Ojcu, Synowi Jego Przedwiecznemu,
I równemu Im w Bóstwie Duchowi Świętemu.
Jak była na początku i zawsze i ninie,
Niech Bóg w Trójcy Jedyny na wiek wieków słynie.

HYMN
Zawitaj, Panno mądra, domie poświęcony,
Siedmioma kolumnami pięknie ozdobiony.
Od wszelakiej zarazy świata ochroniona,
Pierwej święta w żywocie matki, niż zrodzona.
Tyś Matką wszech żyjących, Tyś jest Świętych drzwiami.
Nowa gwiazdo z Jakuba, Tyś nad Aniołami.
Ogromna czartu jesteś, w szyku obóz silny,
Bądź chrześcijan ucieczką i port nieomylny.

K. Sam Ją stworzył w Duchu Świętym.
W. I wyniósł Ją nad wszystkie dzieła rąk Swoich.
K. Pani, wysłuchaj modlitwy nasze.
W. A wołanie nasze niech do Ciebie przyjdzie.
K. Błogosławmy Panu.
W. Bogu chwała.
K. A dusze wiernych zmarłych przez miłosierdzie Boże niech odpoczywają w pokoju.
W. Amen.

---------------------------------------

NA TERCJĘ
Przybądź nam, miłościwa Pani, ku pomocy,
A wyrwij nas z potężnych nieprzyjaciół mocy.
Chwała Ojcu, Synowi Jego Przedwiecznemu,
I równemu Im w Bóstwie Duchowi Świętemu.
Jak była na początku i zawsze i ninie,
Niech Bóg w Trójcy Jedyny na wiek wieków słynie.

HYMN
Witaj Arko przymierza, tronie Salomona,
Tęczo wszechmocną ręką z pięknych farb złożona.
Tyś krzak Mojżeszów, Boskim ogniem gorejąca,
Tyś różdżka Aaronowa, śliczny kwiat rodząca.
Bramo rajska zamkniona, runo Gedeona,
Tyś niezwyciężonego plastr miodu Samsona.
Przystało, aby Cię Syn tak zacny od winy
Pierworodnej zachował i zmazy Ewinej.
Który Ciebie za Matkę obierając Sobie,
Chciał, by przywara grzechu nie postała w Tobie.

K. Ja mieszkam na wysokościach.
W. I tron Mój w słupie obłoku.
K. Pani, wysłuchaj modlitwy nasze.
W. A wołanie nasze niech do Ciebie przyjdzie.
K. Błogosławmy Panu.
W. Bogu chwała.
K. A dusze wiernych zmarłych przez miłosierdzie Boże niech odpoczywają w pokoju.
W. Amen.

------------------------------------------

NA SEKSTĘ
Przybądź nam, miłościwa Pani, ku pomocy,
A wyrwij nas z potężnych nieprzyjaciół mocy.
Chwała Ojcu, Synowi Jego Przedwiecznemu,
I równemu Im w Bóstwie Duchowi Świętemu.
Jak była na początku i zawsze i ninie,
Niech Bóg w Trójcy Jedyny na wiek wieków słynie.

HYMN
Witaj Świątynio Boga w Trójcy Jedynego,
Tyś raj Aniołów, pałac wstydu panieńskiego!
Pociecho utrapionych, ogrodzie wdzięczności,
O palmo cierpliwości, o cedrze czystości!
Ziemia jesteś kapłańska i błogosławiona,
Święta i pierworodną zmazą niedotkniona.
Miasto Pańskie i brama na wschód wystawiona,
Wszelkąś łaską, jedyna Panno, wypełniona.

K. Jak lilia między cierniem.
W. Tak przyjaciółka moja między córkami Adamowymi.
K. Pani, wysłuchaj modlitwy nasze.
W. A wołanie nasze niech do Ciebie przyjdzie.
K. Błogosławmy Panu.
W. Bogu chwała.
K. A dusze wiernych zmarłych przez miłosierdzie Boże niech odpoczywają w pokoju.
W. Amen.

------------------------------------------

NA NONĘ
Przybądź nam, miłościwa Pani, ku pomocy,
A wyrwij nas z potężnych nieprzyjaciół mocy.
Chwała Ojcu, Synowi Jego Przedwiecznemu,
I równemu Im w Bóstwie Duchowi Świętemu.
Jak była na początku i zawsze i ninie,
Niech Bóg w Trójcy Jedyny na wiek wieków słynie.

HYMN
Witaj, miasto ucieczki, wieżo utwierdzona
Dawidowa, basztami i bronią wzmocniona.
Tyś przy Poczęciu ogniem miłości pałała,
Przez Cię władza piekielnych mocarzów stajała.
O mężna białogłowo, Judyt wojująca.
Od niewoli okrutnej lud Swój ratująca.
Rachel ożywiciela Egiptu nosiła,
Nam Zbawiciela świata Maryja powiła.

K. Wszystka piękna jesteś, Przyjaciółko moja.
W. A zmaza pierworodna nigdy w Tobie nie postała.
K. Pani, wysłuchaj modlitwy nasze.
W. A wołanie nasze niech do Ciebie przyjdzie.
K. Błogosławmy Panu.
W. Bogu chwała.
K. A dusze wiernych zmarłych przez miłosierdzie Boże niech odpoczywają w pokoju.
W. Amen.

------------------------------------------

NA NIESZPORY
Przybądź nam, miłościwa Pani, ku pomocy,
A wyrwij nas z potężnych nieprzyjaciół mocy.
Chwała Ojcu, Synowi Jego Przedwiecznemu,
I równemu Im w Bóstwie Duchowi Świętemu.
Jak była na początku i zawsze i ninie,
Niech Bóg w Trójcy Jedyny na wiek wieków słynie.

HYMN
Witaj, światło z Gabaon, coś zwycięstwo dało,
Z Ciebie Słowo przedwieczne w ciało się przybrało.
Aby człowiek z padołu powstał wywyższony,
Niewiele od Aniołów jest on umniejszony.
Słońca tego promieńmi Maryja jaśnieje,
W poczęciu Swym, jak złota zorza, światłem sieje.
Między cierniem lilija kruszy łeb smokowi,
Piękna, jak w pełni księżyc, świeci człowiekowi.

K. Jam sprawiła na niebie, aby wschodziła światłość nieustająca.
W. I jako mgła okryłam wszystką ziemię.
K. Pani, wysłuchaj modlitwy nasze.
W. A wołanie nasze niech do Ciebie przyjdzie.
K. Błogosławmy Panu.
W. Bogu chwała.
K. A dusze wiernych zmarłych przez miłosierdzie Boże niech odpoczywają w pokoju.
W. Amen.

-----------------------------------------

NA KOMPLETĘ
Niech nas Syn Twój, o Pani, do Siebie nawróci,
A swoje zagniewanie niech od nas odwróci.
Przybądź nam, miłościwa Pani, ku pomocy,
A wyrwij nas z potężnych nieprzyjaciół mocy.
Chwała Ojcu, Synowi Jego Przedwiecznemu,
I równemu Im w Bóstwie Duchowi Świętemu.
Jak była na początku i zawsze i ninie,
Niech Bóg w Trójcy Jedyny na wiek wieków słynie.

HYMN
Witaj, Matko szlachetna, w panieńskiej czystości,
Gwiazdami uwieńczona, Pani łaskawości.
Niepokalana, czystsza niźli Aniołowie,
Po prawej stronie Króla stoisz w złotogłowie.
O Rodzicielko łaski, nadziejo grzeszących,
O jasna gwiazdo morska, o porcie tonących.
Bramo rajska, niemocnych zdrowie w Twej obronie,
Niech Boga oglądamy na górnym Syjonie.

K. Jako olej wylany, o Maryjo, Imię Twoje.
W. Słudzy Twoi zakochali się bardzo w Tobie.
K. Pani, wysłuchaj modlitwy nasze.
W. A wołanie nasze niech do Ciebie przyjdzie.
K. Błogosławmy Panu.
W. Bogu chwała.
K. A dusze wiernych zmarłych przez miłosierdzie Boże niech odpoczywają w pokoju.
W. Amen.

----------------------------------------

OFIAROWANIE GODZINEK
Z pokłonem, Panno Święta, ofiarujem Tobie
Te Godzinki, ku większej czci Twej i ozdobie.
Prosząc, byś nas zbawienną drogą prowadziła,
A przy śmierci nam słodką Opiekunką była.

ANTYFONA
Tać to różdżka, w której ani pierworodnej, ani uczynkowej winy skaza nie postała.

K. W poczęciu Swoim, Panno, niepokalanaś była.
W. Módl się za nami do Ojca, któregoś Syna porodziła.

Módlmy się: Boże, któryś przez Niepokalane Poczęcie Najświętszej Panny godny Synowi Swemu przybytek zgotował, Ciebie prosimy, abyś przez wstawiennictwo Tej, którąś dla przewidzianej śmierci tegoż Syna od wszelkiej zmazy zachował, nam niepokalanymi przyjść do Siebie dozwolił. Przez tegoż Chrystusa Pana naszego, który z Tobą żyje i króluje na wieki wieków.

W. Amen.`
  },
  {
    number: 61,
    title: "Góry do góry (Małe TGD)",
    lyrics: `1. Piękny świat przemierzasz po maleńku.
Nagle STOP! Jakiś mur, groźny cień.
Ach to strach, to wielka góra lęku.
Ale ty nie bój się, tylko wierz!

Jeśli takich gór nie da się przeskoczyć,
jeśli takich gór obejść nie da się:

Ref.: No to góry do góry, dziecięca wiara,
może je w morze powrzucać zaraz.
Góry do góry, morze nie może się doczekać
na wielkie plum

2. Piękny świat przemierzasz po malutku.
Nagle STOP! Znowu mur i ten cień.
Ach to żal, to wielka góra smutku
Ale ty otrzyj łzy, mocno wierz!

Jeśli takich gór nie da się przeskoczyć
Jeśli takich gór obejść nie da się

Ref2.: No to góry do góry, dziecięca wiara,
może je w morze powrzucać zaraz.
Góry do góry morze nie może się doczekać, 
nie może się doczekać!
No to góry do góry, dziecięca wiara,
może je w morze powrzucać zaraz.
Góry do góry morze nie może się doczekać
na wielkie plum!

Bridge:
Tam wielka góra złości, tam wielki ból.
Tam góra wątpliwości, wystarczy już!
Na góry już się nie gap, powyżej spójrz,
bo moc pochodzi z Nieba!

Ref2.:...`
  },
  {
    number: 62,
    title: "Gwiazdo Zaranna",
    lyrics: `1.Gwiazdo Zaranna, obleczona w Słońce 
módl się za nami. 
Chwały Ikono, Dziewico Posłuszna 
módl się za nami. 
2.Gwiazdo Przewodnia, Służebnico Pańska 
módl się za nami.
Matko Żyjących, Początku Kościoła 
módl się za nami.
3.Bogurodzico, Córo Twego Syna, 
módl się za nami.
Znaku Nadziei, Mieszkanie Mądrości 
módl się za nami.`
  },
  {
    number: 63,
    title: "Hej, Jezu, Królem Tyś",
    lyrics: `1. Hej, Jezu, Królem Tyś /x2,
życie Twe uwalnia mnie /x2
Będę sławił cały dzień, /x2
doskonałe drogi Twe. /x2
2. Hej, Jezu, Panem Tyś,
chcę słuchać Twoich słów.
Twe Królestwo ujrzeć chcę,
wola Twa niech spełni się.
3. Chwała Barankowi, Cześć!
Weź mnie do Ziemi Swej. 
Zwyciężymy w Imię Twe,
ogłosimy rządy Twe.
4. Hej, o hej, o Lwie Judy,
Jak potężny jesteś Ty.
Hej, o hej, o Lwie Judy,
Jak wspaniały jesteś Ty.`
  },
  {
    number: 64,
    title: "Hosanna na niebiosach",
    lyrics: `1 Hosanna, Hosanna! Hosanna na niebiosach! /x2
 Sławić chcemy Cię wciąż /x2
 Z radością i czcią, /x2
 Wywyższony bądź Boże nasz, 
 Hosanna niechaj ciągle brzmi! 
2 Chwała, chwała, Królowi królów chwała, cześć!
 Sławić chcemy Cię wciąż
 Z radością i czcią,
 Wywyższony bądź Boże nasz,
 Królowi królów chwała, cześć.
3 Jezus, Jezus, Jezus Królem królów jest!
 Sławić chcemy Cię wciąż
 Z radością i czcią,
 Wywyższony bądź Boże nasz,
 Jezus Królem królów jest!`
  },
  {
    number: 65,
    title: "Idzie Jezus",
    lyrics: `1.Idzie Jezus, spójrz jak kroczy On po wodzie,
Podnosi Cię i pomaga Ci wstać.
Idzie Jezus, On jest Panem tych spienionych fal,
Idzie Jezus – On kocha cię
2. Idzie Jezus ... – On karmi cię.
3. Idzie Jezus ... – On przenika cię.
4. Idzie Jezus ... – On zbawia cię.
5. Idzie Jezus ... – On pociesza cię.
6. Idzie Jezus ... – On uświęca cię.`
  },
  {
    number: 66,
    title: "Idzie mój Pan",
    lyrics: `Idzie mój Pan, idzie mój Pan,
On teraz biegnie, by spotkać mnie.

Mija góry, łąki, lasy, by komunii stał się cud.
On chce chlebem nas nakarmić, by nasycić życia głód.`
  },
  {
    number: 67,
    title: "1.Idziemy razem trzymamy się za ręce",
    lyrics: `Idziemy razem trzymamy się za ręce,
Codzienniej głębiej poznając Boży szlak.
A kiedy miłośc zakwitnie w sercach naszych,
Jakże cudowny jest wtedy ten świat.

Ref.:Raz,dwa,trzy cały świat,
Niech cały świat śpiewa z nami.
Bogu dziękując za słońce i nieba aksamit.
Ja i ty Boga chwal.
Dziękuj za życie za wszystko,
Ile masz w piersi tchu
Śpiewaj dziś z nami,dziękując Mu.

2.Idziemy razem,trzymamy się za ręce,
Jak wielu ludzi codziennie mija nas.
Nie widząc innych,zapatrzeni w siebie,
Spójrzcie na bliżnich,juz najwyższy czs.
3.Idziemy razem,trzymamy się za ręce,
Codziennie głębiej poznając Boży szlak,
A kiedy miłość dojrzała w sercach naszych,
Jakże miłością wypiękniał ten świat.`
  },
  {
    number: 68,
    title: "Idź ogłoś to po górach",
    lyrics: `Ref.:Idź, ogłoś to po górach,
Wszystkim dolinom ogłoś rad!
Idź, ogłoś to po górach,
Że Zbawca przyszedł na świat.

1. Gdy byłem jeszcze grzeszny
Modliłem się, by Bóg
Ukazał mi Swą drogę,
Sprowadził z błędnych dróg.
2. Zacząłem szukać Zbawcy,
Szukałem dzień i noc,
On widział me pragnienia,
Okazał swoją moc.
3. Bóg zrobił mnie strażnikiem,
Bym murów miasta strzegł.
Gdy skończę swoją pracę,
Na drugi przejdę brzeg`
  },
  {
    number: 69,
    title: "Ja wierzę, że to Jezus",
    lyrics: `1.Ja wierzę, że to Jezus, 
wierzę, że On Synem Boga jest.
On zmarł i powstał, aby żyć 
i z cenę śmierci życie dał.
Wierzę, że jest tu teraz (On tu teraz jest), 
stoi pośród nas
Ma moc nas teraz uzdrawiać (uzdrowienia moc), 
ma przebaczenia dar.
2.Ja wierzę Tobie, Panie, 
wierzę, że Tyś Synem Boga jest. 
Zmarłeś i powstałeś, aby żyć 
i za cenę śmierci życie dać. 
Wierzę, że tutaj jesteś (Ty jesteś tu), 
stoisz pośród nas.
Masz moc nas teraz uzdrawiać (uzdrowienia moc), 
masz przebaczenia dar.`
  },
  {
    number: 70,
    title: "Jak Cię zrozumieć Tajemnico",
    lyrics: `1.Jak Cię zrozumieć Tajemnico,
Co spełniasz się każdego dnia?
Po stokroć i po razy tysiąc,
Bóg nam w ofierze siebie dał.

Ref.: Myśmy niegodni ofiary tej, myśmy niegodni
Boże, chcąc pojąć, zrozumieć Cię trzeba się modlić,
Trzeba się modlić, trzeba się modlić.

2.Tyś wybrał drogę pełną cierni, 
choć miałeś tron u nieba bram, 
I stałeś się, jak my – śmiertelny, 
by życie swoje oddać nam.
3.Za nasze grzechy i niestałość 
Ty, Boży Syn, Przedwieczna Myśl, 
Wciąż nam oddajesz Krew i Ciało, 
byśmy na wieki mogli żyć.
4.Więc, czy to w pracy, czy w spoczynku, 
będziemy z Ciebie czerpać wzór 
Dziękując Tobie, Boży Synu 
za mękę Twoją i za ból.`
  },
  {
    number: 71,
    title: "Jak Dawid kiedyś",
    lyrics: `1.Jak Dawid kiedyś przed Bogiem swym
Będę tańczyć ze wszystkich sił
Przed Panem, Królem mym.
Jak Miriam grała na bębnie swym. 
Będę klaskać ze wszystkich sił 
Przed Panem, Królem mym.

Ref.: Pokłońmy się przed Bogiem, 
Oddajmy Jemu cześć!
Wielbijmy Imię Jego,
Śpiewajmy Jemu pieśń!

2.Jak Judejczycy przed bitwą swą
Zawierzmy Panu i chwalmy Go, 
Pobity będzie wróg. 
Jak Jozue wznieśmy bojową pieśń,
Oddajmy Panu chwałę i cześć, 
A wróg ucieknie wnet.`
  },
  {
    number: 72,
    title: "Jak dobrze jest dziekować Ci",
    lyrics: `Jak dobrze jest dziękować Ci, Panie,
I śpiewać psalm Twojemu Imieniu,
I opowiadać rano Twoje miłosierdzie,
A w nocy wierność Twoją
Przy dziesięciostrunnej harfie
I lutni, i dźwięcznej cytrze`
  },
  {
    number: 73,
    title: "Jak łania",
    lyrics: `Jak łania pragnie wody ze strumieni,
moja dusza pragnie Cię.
Tylko Ty jesteś moim pragnieniem,
zawsze chcę uwielbiać Cię.

Tylko Ty jesteś mocą mą. 
Twoja wola, wolą mą,
Tylko Ty jesteś moim pragnieniem,
Zawsze chcę uwielbiać Cię.`
  },
  {
    number: 74,
    title: "Jak mi dobrze",
    lyrics: `1.Jak mi dobrze, że jesteś tu, Panie, /x2
Trzymaj mnie mocno dziś, zawsze chcę przy Tobie być./x2 
Panie. 
2.Boża miłość wypełnia mnie...
3.Boży pokój wypełnia mnie...
4.Boża radość wypełnia mnie...
5. Boża cisza wypełnia mnie...`
  },
  {
    number: 75,
    title: "Jak Szczęśliwa Polska",
    lyrics: `1. Jak szczęśliwa Polska cała,
W niej Maryi kwitnie chwała.
Od Bałtyku po gór szczyty,
Kraj nasz płaszczem Jej okryty.

Ref. Matko Boska, Królowo Polska. 
O Pani nasza, Częstochowska.

2. W Częstochowie tron Swój wzniosła, 
Wielka, można i wyniosła. 
Lecz najczulsza z Matek ziemi,
Cierpi razem z dziećmi Swymi.
3, Tyś cudami zajaśniała
swoje serce nam oddała
ludu Polski dziecię drogie
Masz tu Matkę serce błogie
3. Do Twych stóp się Polska ściele,
W Jasnogórskim Twym kościele.
Skąd opieka na kraj płynie,
Z Tobą Polska nie zaginie.`
  },
  {
    number: 76,
    title: "Jest jedno Ciało, jest jeden Pan",
    lyrics: `Jest jedno Ciało, jest jeden Pan, 
Jednoczy nas w Duchu, byśmy razem szli. 
Usta głoszą chwałę Mu, 
W ręku Słowa Jego miecz. 
W moc odziani tak idziemy, 
Zdobywamy ziemię tę.

Jesteśmy ludem Króla Chwał, 
Jego świętym narodem, 
Wybranym pokoleniem, 
by objawiać Jego cześć.
Jesteśmy ludem Króla Chwał,
Jego świętym narodem,
Wielbimy Jezusa, 
On jest Królem całej ziemi tej.`
  },
  {
    number: 77,
    title: "Jest na świecie Miłość",
    lyrics: `1. Jest na świecie Miłość,
Której imię srebrzystym promieniem obiegło ziemię.
Gdy ci będzie smutno
Imię to wypowiedz, 
a przy tobie Ona zjawi się.

Ref.: Matka z radością poda dłoń
Gdy powiesz: Mario w Tobie ufność mam.
Kiedy jesteś przy mnie znika ból i w oczach łzy,
Pragnę z Tobą iść – Ty dodaj sił.

2. Jest w Niej tyle ciepła,
a w spojrzeniu Jej dobroć i troska matczyna gości.
Otwórz swoje serce, 
Schowaj Ją głęboko 
i jak dziecko powiedz: „Kocham Cię”.
3. Wtul się w Jej ramiona,
A pokochasz Ją mocno i nie będziesz chciał odejść od Niej.
Daj Jej swoje ręce,
A zobaczysz słońce
i nadzieję, Mario kochaj mnie`
  },
  {
    number: 78,
    title: "Jestem dzieckiem Twym",
    lyrics: `Kimże jestem, by nieba Król
Chciał przyjąć mnie
Dzięki Niemu dziś jestem tu
On pokochał mnie On pokochał mnie

Kto zaufa Ci Może wolnym być
Jestem dzieckiem Twym Ufam Ci

2.Łaską swą On odkupił mnie
W Nim wolność mam
Kiedy więził mnie strach i grzech
Jezus za mnie zmarł
Tak, On za mnie zmarł

Kto zaufa Ci Może wolnym być
Jestem dzieckiem Twym Ufam Ci
Swego domu drzwi Otworzyłeś mi
Jestem dzieckiem Twym Ufam Ci

Ty mnie kochasz, Nie opuszczasz
Nazwałeś mnie dzieckiem swym
Jesteś ze mną, Tobie ufam
Nazwałeś mnie dzieckiem swym
Ty mnie kochasz, Nie opuszczasz
Nazwałeś mnie dzieckiem swym
Jesteś ze mną, Tobie ufam
Nazwałeś mnie dzieckiem swym 

Kto zaufa Ci Może wolnym być
Jestem dzieckiem Twym Ufam Ci
Swego domu drzwi Otworzyłeś mi
Jestem dzieckiem Twym Ufam Ci
Swego domu drzwi Otworzyłeś m
Jestem dzieckiem Twym Ufam Ci

Ty mnie kochasz
Nie opuszczasz
Nazwałeś mnie dzieckiem swym
Jesteś ze mną Tobie ufam
Nazwałeś mnie dzieckiem swym`
  },
  {
    number: 79,
    title: "Jestem Twój",
    lyrics: `Jestem Twój, na wieki Twój,
Nikt i nic nie rozerwie już
więzów miłości Twej.
Jesteś mój, na wieki mój,
Twoja miłość złączyła nas, Twój krzyż.`
  },
  {
    number: 80,
    title: "Jesteś blisko podtrzymujesz mnie",
    lyrics: `1.Jesteś blisko podtrzymujesz mnie
Z Tobą wszystko jasne jest jak w dzień
krok za krokiem idę za światłem Twym
by przed zmrokiem dotrzeć do nieba drzwi

Ref. Tobie dziś z całych sił będę śpiewał i
aniołowie niech wznoszą mnie w górę
Cały świat wokół mnie tak uwielbia Cię 
Jezu Jezu

2.Światło świata Jezu to właśnie Ty
w Tobie brata mam do końca swych dni
poprzez ciemność Ty przeprowadź mnie
światło ciepło już nie boję się

koda: Chodzić chcę w Twoim świetle Panie
 ja chodzić chcę tak jak w jasny dzień
 chodzić chcę w Twoim świetle Panie
 chodzić jak w jasny dzień`
  },
  {
    number: 81,
    title: "Jesteś Królem, Jesteś Królem",
    lyrics: `Jesteś Królem, Jesteś Królem,
Królem jest Bóg. X2 
Podnieśmy wszyscy nasze serca,
podnieśmy wszyscy nasze dłonie,
stawajmy przed obliczem Pana 
wielbiąc Go.`
  },
   {
    number: 82,
    title: "Jesteś Panie winnym krzewem",
    lyrics: `1. Jesteś Panie winnym krzewem,
a my jego latorośle,
Moc czerpiemy tylko z Ciebie,
Ty w nas żyjesz Swą miłością.
Ref. Panie, Panie, naucz nas w miłości Twojej 
trwać. /x2
2. Cóż trwałego poza Tobą,
człowiek zdziała sam ze siebie?
Któż potrafi własne dobro
oblec w kształty nieśmiertelne?
3. Ty przyjaźnią nas ogarniasz,
tak wspaniałą i szeroką,
że wyzwala pełną radość w sercu,
które Ciebie kocha.
4. Wejdź, o Jezu, w nasze życie
głębią łaski, mocą Słowa,
byśmy mogli owoc przynieść,
cześć i chwałę Ojcu oddać.`
  },
  {
    number: 83,
    title: "Jesteś radością mojego życia",
    lyrics: `1.Jesteś radością mojego życia, o–o–o Panie mój. /x2

Ref.: Ty jesteś moim Panem, /x2
Ty jesteś moim Panem, na zawsze jesteś Panem mym.

2. Jesteś miłością mojego życia…
3. Jesteś pokojem mojego życia…
4. Jesteś nadzieją mojego życia…
5. Jesteś Władcą mojego życia`
  },
  {
    number: 84,
    title: "Jesteś wszystkim",
    lyrics: `1. Jesteś życiem, jesteś siłą,
Mą nadzieją dziś jedyną.
I pokarmem, i napojem,
Pokonujesz życia znoje.

Ref. Gdy widzę Ciebie,
Uśmiecham się szeroko.
Podnoszę ręce, kieruję je wysoko
Ty, mój Jezu, jesteś Bogiem,
Którego noszę w sobie.
Jesteś wszystkim, o Panie mój.

2. Jesteś źródłem i natchnieniem,
Moim sensem i spełnieniem.
Wypełnieniem obietnicy,
Ja na Ciebie mogę liczyć.
3. Jezu Chryste, dziś wyznaję,
Że Ty jesteś moim Panem!
Całe życie Ci oddaję,
Chcę je przeżyć w Twojej chwale.
4. Kiedy umrę, zmartwychwstanę,
I żyć nigdy nie przestanę.
Miłosierdziu Twemu dzięki,
Będę słyszeć Nieba dźwięki!`
  },
  {
    number: 85,
    title: "Jesteś życiem mym, więc każdy ruch",
    lyrics: `Jesteś życiem mym, 
więc każdy ruch robię w Tobie Jezu
Ty pozwalasz wciąż oddychać mi.
Jesteś droga mą, 
więc każdy krok stawiam w Tobie Jezu
Ty pozwalasz wciąż oddychać mi.

Fale Twojej łaski Panie,
gdzie nie spojrzę tam wciąż widzę Cię,
Twa miłość mnie uwiodła,
Jezu jakże to możliwe jest?`
  },
  {
    number: 86,
    title: "Jesteśmy Twymi dziećmi",
    lyrics: `1.Jesteśmy Twymi dziećmi,
Potrzebujemy Ciebie
Miłości, która trwa
Dobroci nieskończonej,
łaski i nadziei na wybawienie

Ref: Zbawiciel, On porusza góry
On może wybawić mnie
Może wybawić mnie
Na zawsze sprawca odkupienia
Zmartwychwstał, pokonał śmierć
Jezus pokonał śmierć

2.Weź mnie jakim jestem
z mym grzechem i mym lękiem
Wypełnij życie me
Ja Tobie się oddaję,
Całą moją wiarę oddaję Tobie
3. Chcę być światłem, aby poznał świat - Ciebie
Wielki Królu, Zbawicielu nasz – Jezu`
  },
  {
    number: 87,
    title: "Jeśli radość w sercu chcesz mieć",
    lyrics: `1.Jeśli radość w sercu chcesz mieć,
Radość, która wiecznie ma trwać,
Przed tron Boga przyjdź i głoś Jego chwałę, /x3 
I moc, głoś chwałę i moc, głoś chwałę i moc.
2. Jeśli miłość...
3. Jeśli pokój...
4. Jeśli dobro...
5. Jeśli ciszę...`
  },
  {
    number: 88,
    title: "Jezu Tyś wszystkim dla mnie jest",
    lyrics: `Jezu Tyś wszystkim dla mnie jest
jak żyć bez miłości Twej.
Jezu otwórz me oczy,
Bym ujrzeć mógł Twej miłości cud. 
Przyjdź i napełnij nas
Mocą Bożą co dnia
Tyś pokoju księciem, lekarzem dusz 
Jesteś światłem co w ciemnościach nie gaśnie`
  },
  {
    number: 89,
    title: "Jezus Chrystus",
    lyrics: `Jezus Chrystus Bóg i Człowiek, Odkupiciel 
Wczoraj,dziś na wieki`
  },
  {
    number: 90,
    title: "Jezus daje nam zbawienie",
    lyrics: `Jezus daje nam zbawienie
Jezus daje pokój nam
Jemu składam dziękczynienie
Chwałę z serca mego dam

Ref. Jezus siłą mą,
Jezus pieśnią mego życia
Królem wiecznym On
niepojęty w mocy swej
W nim znalazłem to
czego szukałem do dzisiaj
Sam mi podał dłoń
bym zwyciężał każdy dzień

2.W Jego ranach uzdrowienie
W Jego śmierci życia dar
Jego krew to oczyszczenie
Jego życie chwałą nam`
  },
  {
    number: 91,
    title: "Jezus i ja-Gdy szedłem raz sam",
    lyrics: `1.Gdy szedłem raz sam, po drodze życia w dal
Me brzemię ciążyło, zmęczony duch łkał
Tak chciałem, by ktoś
był ze mną wśród bied
Nie wiedząc, że On naprzeciw mi szedł

Ref. I odtąd Jezus i ja
wciąż ręka w rękę 
Dzielimy razem trudności wszelkie 
Czy radość, smutek, czy łzy
Czy deszcz, czy słońce lśni 
Po wszystkie me dni, mój Jezus i ja

2.Ach, długi to szlak,
do niebios jasnych bram
Choć wąski lecz prosty,
tak przyrzekł mój Pan
Nie martwię się już, wszak drogę On zna
Idziemy we dwóch, mój Jezus i ja.
3.Wciąż będę Go czcił, za ten miłości dar
Wciąż będę w krąg głosić,
Bóg kocha bez miar
Chcę przy Nim wciąż trwać,
On szczęście mi da
Na wieki wśród chwał, mój Jezus i ja.`
  },
  {
    number: 92,
    title: "Jezus jest mym Przyjacielem",
    lyrics: `1. Jezus przez życie mnie wiedzie, 
daje mi silne swe dłonie, 
Kroczy przede mną na przodzie 
i drogę wskazuje mi wciąż. 
Ref.: Jezus jest mym Przyjacielem, 
Jezus jest Obrońcą mym, 
Jezus jest mym Zbawicielem, 
zawsze chcę przebywać z Nim. 
2. On mnie obdarzył pokojem, 
duszę nieczułą poruszył, 
Miłość i radość dał swoją 
i w serce nadzieję mi wlał. 
3. Krzyża ciężkiego ramiona
gniotły Mu barki straszliwie,
Potem za grzechy me skonał,
bym jeszcze zbawienie mógł mieć.`
  },
  {
    number: 93,
    title: "Jezus jest z nami tu",
    lyrics: `Jezus jest z nami tu /x4
A Jego moc działa dziś, By uwolnić Cię.
A Jego moc działa dziś, By uzdrowić Cię.
A Jego moc działa dziś, Aby zbawić Cię.
Jezus jest z nami tu`
  },
  {
    number: 94,
    title: "Jezus najwyższe Imię",
    lyrics: `Ref.: Jezus, najwyższe Imię,
Nasz Zbawiciel, Książę Pokoju.
Emanuel, Bóg jest z nami,
Odkupiciel, Słowo Żywota.
1. Święty Bóg, Mesjasz Prawdziwy,
Jedyny Ojca Syn umiłowany.
Zgładził grzech, Baranek na wieki,
Królów Król i panów Pan..
2. Księciem Pokoju jest Wszechmogący Bóg,
On źródłem wszelkich łask, Odwieczny Ojciec nasz. 
Cała władza jest w Jego ramieniu,
Królestwo Pokoju wiecznie będzie trwać.`
  },
  {
    number: 95,
    title: "Jezus swoją Matkę pozostawił",
    lyrics: `1.Jezus swoją Matkę pozostawił, 
Byś w swym życiu miał do kogo iść, 
Ona swą opieką Cię otoczy, 
Jeśli nie zwlekając pójdziesz dziś.

Ref.: Do Jej stóp, do Jej stóp pochyl się 
I pozostaw swoje troski Jej.
Ona z sercem Swym matczynym nieustannie czeka,
Abyś wyznał to, co gnębi cię.

2. Nikt tak serca Twego nie zrozumie,
Nikt tak kochać nie potrafi też.
Nikt w miłości wytrwać tak nie umie
Jak Madonna - zresztą o tym wiesz.

Ref.: Wybierz się, wybierz się razem z nami
Na wspaniały pielgrzymkowy szlak!
Jeśli będziesz szedł wytrwale, to na Jasnej Górze
W Jej obliczu ujrzysz Boga znak.

3. Wielu ludzi tutaj przybywało,
By odszukać biegu życia treść,
A Maryja zawsze to sprawiała,
Że Krzyż Pana łatwiej było nieść.`
  },
  {
    number: 96,
    title: "Jezus zwyciężył",
    lyrics: `Jezus zwyciężył, to wykonało się
Szatan pokonany, Jezus złamał śmierci moc 
Jezus jest Panem, o Alleluja 
Po wieczne czasy Królem Królów jest 

Jezus jest Panem x4 
Tylko Jezus jest Panem x2 
On jest Panem ziemi tej`
  },
  {
    number: 97,
    title: "Każdy spragniony",
    lyrics: `Każdy spragniony i słaby dziś 
Niech przyjdzie do źródła 
W wodzie życia zanurzy się 
Ból i cierpienie niech odpłyną w dal
W morzu miłości
serca uleczy dzisiaj Pan /x2
(Panie Jezu przyjdź) 
Duchu Święty przyjdź /x4`
  },
  {
    number: 98,
    title: "Każdy Twój wyrok przyjmę twardy",
    lyrics: `Każdy Twój wyrok przyjmę twardy.
Przed mocą Twoją się ukorzę. 
Ale chroń mnie Panie od pogardy.
Od nienawiści strzeż mnie Boże.

Wszak Tyś jest niezmierzone dobro. 
Którego nie wyrażą słowa. 
Więc mnie od nienawiści obroń. 
I od pogardy mnie zachowaj.

Co postanowisz niech się ziści. 
Niechaj się wola Twoja stanie. 
Ale zbaw mnie od nienawiści. 
Ocal mnie od pogardy Panie.`
  },
  {
    number: 99,
    title: "Każdy wschód słońca",
    lyrics: `Ref.: Każdy wschód słońca Ciebie zapowiada,
Nie pozwól nam przespać poranka.

1.My, którzy wszystko liczymy – 
Ciebie mamy za darmo,
Dajesz nam Siebie w całości 
i jesteś taki rozrzutny.
2.Mało, że do nas przyszedłeś – 
co dzień dajesz nam Siebie, 
Zostałeś z nami w tym chlebie, 
który bierzemy do ręki.
3.Dałeś nam Siebie za darmo, 
Twoja hojność zdumiewa, 
Naucz nas liczyć dni nasze, 
niech człowiek już nie umiera.
4.Ty jesteś pełnią życia, 
daj nam Twojego chleba,
Daj nam oddychać wiecznością, 
Twój oddech odżywia i wspiera.
5.Przyjdź Panie, przyjdź nareszcie, 
jak przyszedłeś już kiedyś,
A co dzień niech nowy wschód słońca, 
niech Ciebie nam zapowiada.
`
  },
  {
    number: 100,
    title: "Kiedy nowy wstaje dzień",
    lyrics: `Kiedy nowy wstaje dzień 
I gdy Słońce w cień kładzie się,
Boże Imię wielbić chcę.

Niech Imię to chwalą dziś 
wszyscy ludzie, których znam - 
chwalcie Imię Jego - Pan.
Błogosławcie odtąd więc Imię to, 
teraz i na wieki już 
chwalcie Imię Jego - Pan.`
  },
  {
    number: 101,
    title: "Kiedy ranne wstają zorze",
    lyrics: `1.Kiedy ranne wstają zorze,
Tobie ziemia, Tobie morze,
Tobie śpiewa żywioł wszelki:
Bądź pochwalon, Boże wielki!
2.A człowiek, który bez miary, 
obsypany Twymi dary, 
Coś go stworzył i ocalił, 
a czemuż by Cię nie chwalił?
3.Ledwie oczy przetrzeć zdołam, 
wnet do mego Pana wołam, 
Do mego Boga na niebie 
i szukam Go wkoło siebie.
4.Wielu snem śmierci upadli, 
co się wczoraj spać pokładli, 
My się jeszcze obudzili, 
byśmy Cię, Boże, chwalili
5.Boże w Trójcy niepojęty, 
Ojcze, Synu, Duchu Święty, 
Tobie chwałę oddajemy, 
niech dla Ciebie dziś żyjemy.`
  },
  {
    number: 102,
    title: "Kocham, więc nie muszę się bać",
    lyrics: `Kocham, więc nie muszę się bać; 
zabierz mój strach!/3x 
Kocham, więc nie muszę się bać;
zabierz mój strach./3x
Jezus mówi ci, że miłość ta
zabiera strach./3x
2. Jezus daje Ci miłość swą
Nie lękaj się/3x`
  },
  {
    number: 103,
    title: "Kochany bracie",
    lyrics: `1. Kochany bracie, kochana siostro,
Nie wiem, kim jesteś,
Nie wiem, gdzie żyjesz,
Lecz chcę dla ciebie poświęcić wszystko,
Chcę dać ci siebie.

Ref.: Takie jest prawo miłości, które dał Pan.
Takie jest prawo miłości, jest kluczem do nieba bram.
Takie jest prawo miłości i jego strzeżmy,
I miłość wszystkim dokoła ze sobą nieśmy.

2. Gdziekolwiek jesteś,
Skądkolwiek przyjdziesz,
Na jakiejkolwiek spotkam cię drodze,
Zawsze otwarte moje ramiona przygarną ciebie.`
  },
  {
    number: 104,
    title: "Królów Król, panów Pan",
    lyrics: `Królów Król, panów Pan, chwała Alleluja! /x2
Jezus, Książę Pokoju, chwała Alleluja! /x2`
  },
  {
    number: 105,
    title: "Lud twój Panie",
    lyrics: `Ref.: Lud Twój, Panie, lud pielgrzymi
Prosi, byś był Światłem,
Byś na drodze do królestwa
Wzmacniał serca swoim Ciałem.
Zostań, zostań wśród nas, o Panie.

1.Chlebie Życia, Tyś sam jest naszą siłą,
I czynisz trudną drogę tak bezpieczną.
Jeśli siły na tym szlaku w nas osłabną,
Ręka Twoja niech obdarza wciąż nadzieją.
2.Twoja Krew niechaj jest napojem mocy 
I kieruje zapał kroków w Twoje ślady. 
Jeśli radość gaśnie w sercach od słabości,
Twój głos sprawi, że obudzi się w nas świeżość.
3.Twoje Ciało, o Jezu, rodzi Kościół, 
Bo uczysz, żeśmy braćmi w pyle drogi.
Jeśli krzywdy niszczą światło Twej Miłości, 
Z Twego serca płynie nowe przebaczenie.`
  },
  {
    number: 106,
    title: "Łaską jesteśmy zbawieni",
    lyrics: `Łaską jesteśmy zbawieni, z łaski możemy tu stać.
Łaską usprawiedliwieni i przez Baranka krew.
Wzywasz nas Panie do siebie,
Przed Twój w niebie tron
My łaską obdarzeni
Tobie składamy hołd. / x2`
  },
  {
    number: 107,
    title: "Mama Królowa (Arka Noego)",
    lyrics: `Mama czuwa Mama wie 
Czego każde dziecko chce 
Mama kocha Mama wie najlepiej 
Czego mi brakuje 
Czego potrzebuję 
Mama kocha Mama wie najlepiej 

Nie potrzebne Mamie 
Brylanty złoto i korona 
Ona piękna jest bez tego 
I Błogosławiona 

Można Ciebie namalować 
Można o Tobie śpiewać 
Bo Ty jesteś najpiękniejsza 
Bo Ty jesteś Królową Nieba.`
  },
  {
    number: 108,
    title: "Maryjo Matko mojego wezwania",
    lyrics: `1. Maryjo, Matko mojego wezwania
chcę i pragnę idąc za Twym słowem,
czynić wszystko co powie mi Jezus,
miłować Jego wolę, a wszystko inne 
ze względu na niego samego.

Ref: Bo tak jest z tymi, 
którzy z Ducha narodzili się,
nikt nie wie dokąd pójdą za wolą Twą. /x2

2. Słuchać słowa całym sercem
i w Duchu Świętym je wypełnić. Amen. Amen. Amen`
  },
  {
    number: 109,
    title: "Maryjo śliczna Pani",
    lyrics: `1.Maryjo, śliczna Pani,
Matko Boga i ludzi na ziemi.
Tyś świata Królową,
Tyś gwiazdą na niebie,
Ty nas wiedziesz przed Jezusa wieczny tron.

Ref. Maryja, Ave Maryja,
U Boga nam wybłagaj zdroje łask,
By świat lepszy był, by w miłości żył,
O Maryjo, miej w opiece dzieci swe.

2.Maryjo, śliczna Pani,
Świat dziś czuje na swych ustach gorzkie łzy,
W sercu ból, smutek, żal,
a w oczach wciąż strach,
Usłysz Pani błaganie, pomóż nam.`
  },
  {
    number: 110,
    title: "Maryjo weź mnie za rękę",
    lyrics: `Maryjo weź mnie za rękę 
Podprowadź pod Twego syna, 
Przyciśnij mnie do drewna, 
Niech spłynie Krew i mnie oczyści.`
  },
  {
    number: 111,
    title: "Maryjo,Maryjo,Maryjo idziemy do ciebie",
    lyrics: `Maryjo,Maryjo,Maryjo 
idziemy do ciebie, co tchu. 
Dżdżownica i ślimak nas mija. 
Lecz którzby przejmował się tym. 

Idziemy polami, łąkami, lasami 
I złemu się nie damy o nie... /x2`
  },
  {
    number: 112,
    title: "Matka czeka dniami i nocami",
    lyrics: `Matka czeka dniami i nocami x2
Czeka z otwartymi namionami x2`
  },
  {
    number: 113,
    title: "Matka, która pod krzyżem stała",
    lyrics: `1.Jeśli masz chwile smutne w swym życiu, 
powierz się Matce
Kiedy rozpacz rozdziera Twe serce
ofiaruj się Jej

Ref. Matce która pod krzyżem stała 
Matce która się z Synem żegnała
Która uczyć cię będzie pokory
Cierpienie znieść ci pomoże 
Ona Matka która pod krzyżem stała
Matka która się z Synem żegnała
Ona uczyć cię będzie pokory
Cierpienie znieść ci pomoże

2.Kiedy ruszasz w daleką wędrówkę......
Gdy na szlaku zaskoczy cię burza.......
3.Jeśli zgubisz swą drogę do Boga....
Gdy w twym sercu znów gości trwoga......`
  },
  {
    number: 114,
    title: "Matko Boga Królowo Świata",
    lyrics: `Ref.: Matko Boga, Królowo świata,
Matko ludzi - módl się za nami.
Matko Boga, Królowo świata,
Matko ludzi - prowadź nas.
1. O Maryjo, Ty w mój każdy dzień -
prowadź mnie, kieruj mną, ze mną bądź! 
Chciej, o Pani, dziś modlitwy przyjąć te: 
Za siostrę, brata i za mnie też.
2. O Maryjo, każdy człowiek powie Ci: 
Prowadź mnie, kieruj mną, ze mną bądź! 
Chciej, o Pani, dziś modlitwy przyjąć te: 
Za biednych, samotnych i głodnych też.`
  },
  {
    number: 115,
    title: "Matko Częstochowska",
    lyrics: `1. My idziemy do swej Pani
My jej słudzy i poddani
My idziemy by Królowej Oddać cześć
My pielgrzymi Matki Boskiej
naszej Pani Częstochowskiej
My w jej progi zanosimy naszą pieśń:

Ref. Matko Częstochowska
ratuj nas w potrzebie
może ostatni raz idziemy do Ciebie.

2. My idziemy do swej Pani 
i polami i lasami, dla nas szumią drzewa 
i zaśpiewa ptak.
I czy deszcz nam smaga oczy 
i czy słońce z nami kroczy 
my idziemy i śpiewamy do Niej tak:
3. Z dawna Polski Tyś Królowa 
Naszym celem Częstochowa 
I z tej drogi nie zawróci nas już nikt
Gdy o wiarę wciąż trwa bitwa, 
naszą bronią jest modlitwa 
my idziemy i prosimy Ciebie dziś:
4. Kiedy Polska jest w potrzebie, 
naród modli się do Ciebie 
Tylko serce Matki zniesie każdy cios.
My padamy na kolana 
Ratuj Matko ukochana 
weź Maryjo w swoje ręce Polski los.`
  },
  {
    number: 116,
    title: "Matko ja wielbię Cię",
    lyrics: `1. Bądź pozdrowiona, łaski pełna,
Maryjo, Matko ma.
Przyjmij dzięki, Matko moja,
Bo wielka dobroć Twa.

Ref.: Matko, ja wielbię Cię,
Matko, ja kocham Cię,
O Matko spójrz, pobłogosław
Wszystkie dzieci swe.
Matko, ja wielbię Cię,
Matko, ja kocham Cię,
O Matko spójrz, pobłogosław mnie.

2. Dziś do Ciebie przychodzimy,
Ty witasz dzieci swe.
Biednym, smutnym, zrozpaczonym
Ty dajesz łaski swe.`
  },
  {
    number: 117,
    title: "Matko, która nas znasz",
    lyrics: `Ref.: Matko, która nas znasz,
z dziećmi Twymi bądź, 
na drogach nam nadzieją świeć, 
z Synem Twym z nami idź!
1. Z wszystkich niewiast wybrana -
przyjdź i drogę wskaż! 
Córko ludu Bożego
do Syna Twego nas prowadź. 
Służebnico pokorna, 
pokój światu daj. 
2. Królowo ognisk rodzinnych,
Dziewico, wzorze prostoty,
Oblubienico cieśli.
3. Królowo narodu naszego,
uciśnionych nadziejo,
Światło łaknących prawdy. 
4. Pociecho ludu biednego,
Pani wszelkiej radości,
Matko tkliwego serca.
5. Dziewico, Matko Chrystusa,
Dziewico, Matko Kościoła,
Dziewico, Matko ludzi.
6. Matko, przez Syna nam dana,
Matko, która nas słuchasz,
Ty nas zawsze rozumiesz.
7. Dziewico z nami idąca,
historii świata promieniu,
Pośredniczko najlepsza.`
  },
  {
    number: 118,
    title: "Miłość Twa od najwyższych gór",
    lyrics: `Miłość Twa od najwyższych gór
wyższa jest, 
wielka jest wierność Twa, 
do nieba sięga wzwyż. 
Miłość Twa głębsza niż ocean
bez dna, wielka jest wierność Twa,
gdy do mnie zbliżasz się.`
  },
  {
    number: 119,
    title: "Mój Jezu mój Zbawco",
    lyrics: `Mój Jezu, mój Zbawco, 
Któż jest tak wielki jak Ty ? 
Przez wszystkie dni 
Wysławiać chcę 
Wspaniałe dzieła Twoich rąk.
Mój Panie, Obrońco,
Źródło mych natchnień i sił .
Niech cały świat
Wszystko co jest
Zawsze wielbi imię Twe!

Ref. Krzycz na cześć Pana 
Rozraduj się w Nim 
Ogłaszaj wszędzie, że on Panem jest 
Góry ustąpią na dźwięk jego słów 
Gdy przemówi Stwórca ziem!
Patrzę z podziwem na dzieła twych rąk
Zawsze chce kochać Cię
Przy Tobie być
Co może równać się z tym
Co u ciebie mam !`
  },
  {
    number: 120,
    title: "Mój Jezus",
    lyrics: `Mój Jezus Królem królów jest,
mój Jezus władać będzie wciąż, 
Królestwo Jego wiecznie trwa.
On zbawił dusze mą
i teraz we mnie mieszka już

1. On dał mi całkiem nowe życie, 
uczynił mnie dzieckiem światłości, 
Dziedzictwem swym obdarzył mnie, 
bo umiłował mnie mój Ojciec Bóg. 
2.On wziął na siebie moje winy,
On wyrwał mnie z królestwa ciemności,
Choroby wszystkie wziął na siebie
i już nie muszę się niczego bać.`
  },
   {
    number: 121,
    title: "Mój Zbawiciel",
    lyrics: `Mój Zbawiciel, On bardzo kocha mnie,
Ja nie wiem, czemu miłością darzy mnie. 
On mi nowe życie dzisiaj ofiarować chce, 
Będę, będę mieszkał razem z Panem mym`
  },
  {
    number: 122,
    title: "Murarz wielkie domy stawia",
    lyrics: `1. Murarz wielkie domy stawia, by gdzie mieszkać było. 
Muzyk gra na instrumencie, by się lepiej żyło 
Piekarz musi zaś pracować, by nie brakło chleba. 
Anioł Stróż pilnuje duszy, by poszła do nieba 

Ref.: Aniele, Aniele niebieski posłańcu Przy mnie 
stój, przy mnie stój w tańcu i w różańcu 
Aniele, Aniele wysłanniku Boga 
Czuwaj bo, czuwaj bo niebezpieczna droga 

2. Górnik węgiel wydobywa, rybak łowi ryby, 
Pan czarodziej coś czaruje, ale tak na niby, 
Żołnierz nam pilnuje granic, bo pilnować trzeba, 
Anioł Stróż pilnuje duszy, by poszła do nieba 
3. Nauczyciel uczy dzieci, aby mądre były, 
Chemik mydło produkuje, by się dzieci myły, 
Pan ogrodnik sieje trawę, aby sobie rosła, 
Anioł Stróż pilnuje duszy, by do nieba poszła`
  },
  {
    number: 123,
    title: "My chcemy Boga",
    lyrics: `1.My chcemy Boga, Panno święta!
O, usłysz naszych wołań głos.
Miłości Bożej dźwigać pęta,
To nasza chluba, to nasz los.

Ref. Błogosław słodka Pani, 
błogosław wszelki stan!
My chcemy Boga, my poddani, /
On naszym Królem, On nasz Pan! /x2

2. My chcemy Boga w rodzin kole,
W troskach rodziców, w dziatek snach,
My chcemy Boga w książce, w szkole,
W godzinach wytchnień, w pracy dniach!
3. My chcemy Boga w naszym kraju,
Wśród starodawnych polskich strzech. 
W polskim języku i zwyczaju,
Niech Boga wielbi Chrobry Lech.`
  },
  {
    number: 124,
    title: "My chcemy życia",
    lyrics: `W naszej braterskiej gromadzie,
Nic nie stoi na zawadzie
Na ustach uśmiech,
wszędzie słychać śpiew.

Ref. My chcemy życia,
Bez palenia i bez picia.
Z czystym sumieniem 
iść przez ten świat, 
Choćby iść wciąż pod wiatr.
A po wędrówce,
Nasze młode zwarte hufce,
Staną u szczęścia bram
Gdzie nas czeka Pan.

2. Przyjdźcie do nas przyjaciele, 
Przyjdźcie będzie nam weselej. 
Będzie nas cieszył świat,
Jak za dawnych lat. 
3. Będziesz szedł sprężystym krokiem, 
Będziesz patrzył jasnym wzrokiem.
I poznasz życia czar,
Bez tych złudnych mar.`
  },
  {
    number: 125,
    title: "My Jego dzieci zrodzone z cierpienia",
    lyrics: `1.My Jego dzieci zrodzone z cierpienia 
Krwią swoją odkupił nas
chce mieć nas świętym światłem narodów 
w miłość i moc przyodział nas.

Ref. W Jego Imię idź Jezusa władzę głoś /
oto, kościele jest czas, abyś powstał /
I głosił: Jezus nasz Odkupiciel i Pan./2x 

2.Tak wiele istnień co gubią się w mroku
czy mając światło chcesz spać
Jezus nakazał nam iść, czynić uczniów
to jest nasz cel, a walka trwa.`
  },
  {
    number: 126,
    title: "Na drugi brzeg (Arka Noego)",
    lyrics: `1.Tak jest mało czasu, mało dni, 
serce bije tylko kilka chwil
Niespokojne czeka wierci się, 
kiedy w końcu Ty przytulisz je 
Tak jest mało czasu mało dni, 
serce bije tylko kilka chwil
Nie wiem czy Cię poznam, ale wiem, 
że na pewno Ty rozpoznasz mnie

Ref: Zabierzesz mnie na drugi brzeg
Za tobą będę do nieba biegł

2.Nie jest wcale ciężko kiedy wiem, 
że na końcu drogi spotkam Cię 
Chociaż było tyle trudnych dni, 
codziennie bliżej nieba – warto żyć! 
Tak jest mało czasu, mało dni, 
serce bije tylko kilka chwil.
Nie wiem czy Cię poznam, ale wiem, 
że na pewno Ty rozpoznasz mnie.
3.Mijają godziny, mija czas, 
szukam Cię na niebie pośród gwiazd,
Nie wiem, czy Cię poznam, ale wiem, 
że na pewno Ty rozpoznasz mnie.`
  },
  {
    number: 127,
    title: "Nasz Bóg jest potężny w mocy swej",
    lyrics: `1.Nasz Bóg jest potężny w mocy swej 
Króluje nad nami dziś 
Z nieba rządzi w Mocy, 
Mądrości, Miłości swej `
  },
  {
    number: 128,
    title: "Nic ci nie wyjdzie bez Chrystusa",
    lyrics: `1. Człowiek jest dobry i silny,
miłość chce nieść po świecie.
Lecz posłuchajcie tej prawdy,
prawdy, o której już wiecie.

Ref. Nic Ci nie wyjdzie bez Chrystusa,
nic się bez Niego nie uda.
On ciągle podaje Ci rękę,
dla Ciebie, wciąż czyni cuda.
Nic Ci nie wyjdzie bez Maryi,
nic się bez Niej nie uda.
Ona ciągle podaje Ci rękę,
dla Ciebie, wciąż prosi Syna.

2. Mówisz, że zawsze masz siłę,
że wciąż sobie radę dajesz.
Lecz Ktoś Ci chyba pomaga,
ten Ktoś pyta, czy Go poznajesz.
3. Odchodzisz daleko, daleko,
już we mgle wzrok Twój zgubiłem.
Gdy będziesz za górą, za rzeką,
pamiętaj, co Ci mówiłem.`
  },
  {
    number: 129,
    title: "Nic nie musisz",
    lyrics: `Nic nie musisz mówić nic /
Odpocznij we mne /
Czuj sie bezpiecznie /x2 

Ref. Pozwól kochać się /
Miłość pragnie Ciebie refren / 2x`
  },
  {
    number: 130,
    title: "Nie boję się (Arka Noego)",
    lyrics: `Ref.: Nie boję się, gdy ciemno jest
Ojciec za rękę prowadzi mnie. / x2

1.Dziękuję Ci tato za wszystko, co robisz,
Że bawisz się ze mną, na rękach mnie nosisz
Dziękuję Ci tato i wiem to na pewno
Przez cały dzień czuwasz nade mną.
2.Czasem się martwię i czegoś nie umiem 
Ty mnie pocieszasz i mnie rozumiesz 
Śmieję się głośno, kiedy żartujesz
Bardzo Cię kocham i potrzebuję.
3.Nasz Ojciec mieszka w niebie,
Kocha mnie i Ciebie
On kocha, kocha, kocha mnie i Ciebie.

Zak.: Sanki są w zimie, rower jest w lato,
Mama to nie jest to samo, co tato.`
  },
  {
    number: 131,
    title: "Nie bój się bo jestem z tobą",
    lyrics: `Nie bój się, bo jestem z Tobą /x3 /
Mówi Pan //x2
Odkupiłem cię, dałem ci Imię Swe,
Moim jesteś więc już
Nie utoniesz, gdy będziesz po wodzie szedł,
Ogień nie strawi cię.
Nie, nie, nie utoniesz
Nie, nie, nie spłoniesz
Bo ja jestem z Tobą– mówi Pan`
  },
  {
    number: 132,
    title: "Nie bój się wypłyń na głębię",
    lyrics: `Nie bój się wypłyń na głębię
Jest przy Tobie Chrystus`
  },
  {
    number: 133,
    title: "Nie lękajcie się",
    lyrics: `Nie lękajcie się
lecz idźcie powiedzieć mym braciom
niech oni idą do Galilei
tam mnie zobaczą.`
  },
  {
    number: 134,
    title: "Nie lękajcie się, Ja jestem z wami",
    lyrics: `Nie lękajcie się, Ja jestem z wami.
Nie lękajcie się, Ja jestem z wami.
Nie lękajcie się, Bóg jest Miłością. 
Nie lękajcie się, trwajcie mocni w wierze.

1. Ty Jesteś Skałą Zbawienia,
Jedyną naszą ostoją
przychodzimy do ciebie po światło
ulecz nasze serca zmartwychwstać daj
2.Pomóż nam wytrwać przy tobie
Być wiernym w wierze przez życia czas
tylko w tobie cala nasza nadzieja
milosierdziem swoim uzdrawiaj nas
3.Przekażcie swiatu mój ogień
Pokoju i miłosierdzia
Nieście wszystkim orędzie nadziei
Moje światło niech świeci wśród Was.`
  },
  {
    number: 135,
    title: "Nie ma takiego jak Jezus",
    lyrics: `Nie ma takiego jak Jezus
Nie ma takiego jak On! /X2
Szukam, szukam – nie ma, nie ma
Patrzę, patrzę – ale nie ma, nie ma
Krążę, krążę – nie ma, nie ma
Nie ma takiego jak On!`
  },
  {
    number: 136,
    title: "Niebo jest w sercu mym",
    lyrics: `Ref.: Ooooo... Niebo jest w sercu mym
Ooooo... Niebo jest w sercu mym

1.Królestwo Boga tutaj jest – Niebo jest w sercu mym 
Majestat jego wokół nas – Niebo jest w sercu mym 
I w nim radości pełnia jest – Niebo jest w sercu mym 
Świętości światło bije w krąg – Niebo jest w sercu mym
2.Swe cenne życie za mnie dał...
By w sobie wieczne życie miał... 
W Chrystusie moja światłość jest...
Nadzieja na dziedzictwo me...
3.Świątynią Jego tronu my...
A Jezus fundamentem jest... 
Powróci wkrótce by nas wziąć...
Przez Ducha swego woła przyjdź...`
  },
  {
    number: 137,
    title: "Niech Twój Święty Duch",
    lyrics: `Niech Twój Święty Duch
 Dziś przenika mnie 
 I niech zawsze już 
 Gości w duszy mej 
 
Ref. I niech spadnie deszcz 
 Błogosławieństw Twych 
 Ojcze obmyj mnie 
 Duchu święty przyjdź 
 
2. Duchu święty przyjdź
 Działaj z mocą w nas
 Duchu święty przyjdź
 Przemień smutku czas`
  },
  {
    number: 138,
    title: "Niechaj zstąpi Duch Twój",
    lyrics: `Niechaj zstąpi Duch Twój
i odnowi ziemię
Życiodajny spłynie deszcz,
na spragnione serce
Obmyj mnie i uświeć mnie,
uwielbienia niech popłynie pieśń. /x2
Chwała Jezusowi, ktory za mnie życie dał,
Chwała temu który pierwszy umiłował mnie
Jezus, tylko Jezus Panem jest.`
  },
  {
    number: 139,
    title: "Niepokalana daj mi tylko swoje imię",
    lyrics: `1.Wiedząc, że dzieckiem jestem
I że słabe moje dłonie,
Ona kazała, abym miłość światu niósł.
A ja poszedłem za Nią,
Aby kochać tak, jak Ona,
Widząc w Jej płaszczu moją siłę, moją moc.

Ref.Niepokalana, daj mi tylko swoje imię,
Niepokalana, tylko serce moje chwyć. 
Niepokalana, Tyś mocą mą i siłą, 
Niepokalana, z Tobą odwagę mam do wszystkich iść.

2.W Twe Imię zasłuchani,
Tylko małe serca mając,
Aby łagodzić zawiść, kłamstwo, gorzkie łzy.
Wyciągam ufnie dłonie,
Bowiem żyć - to umieć prosić,
Byś w ludzkie drogi chciała wpisać imię swe.`
  },
  {
    number: 140,
    title: "O Matko z Częstochowskiego wizerunku",
    lyrics: `Ref.:O Matko z Częstochowskiego wizerunku, 
Pani Jasnogórska, Jutrzenko Wolności, 
źródło Światła i Życia dla nas, 
bądź Matką, bądź Matką naszego zawierzenia. 
1. Wraz z Tobą, Matko, chcemy dziś się zanurzyć 
w jedynym świetle, którym jest Jezus, 
aby moc Zmartwychwstałego była uzdrowieniem. 
2. Spraw, aby w sercach Twoich synów i córek
dotkniętych ogniem Bożego światła
wytrysnęło źródło życia, dar miłości Ojca.
3. Pomóż nam, Matko, przyjąć całą Prawdę
i za Jezusem pójść drogą krzyża,
by w ciemności nikt nie chodził,
lecz miał światło Życia.`
  },
  {
    number: 141,
    title: "O najwyższy nasz",
    lyrics: `1.Przeogromna ziemio, wyszłaś z Bożych rąk,
Wykrzykuj radośnie, śpiewaj mu i graj.
Świetlisty księżycu, niebo pełne gwiazd
I ogromne słońce przed Panem swym tańcz!

Ref.: O Najwyższy nasz, na dłonie wzniesione me spójrz,
Niech płynie chwała jak kadzideł dym.

2.Niech morze swym szumem Pana niebios czci, 
Potoki niech huczą, jezior tafla lśni.
A szczytów majestat sięgający chmur,
Niech kornie przyklęknie, psalmy nucąc Mu.
3.Sam długo błądziłem, szukając Twych dróg, 
Patrzyłem na piękno – Twoich palców cud.
Aż wreszcie odkryłem, żeś Ty stworzył nas, 
Że ludzie to owce, a Tyś – Pasterz nasz.`
  },
  {
    number: 142,
    title: "O Panie Ty nam dajesz",
    lyrics: `1.O Panie, Ty nam dajesz Ciało swe i Krew./ x2 
Do Ciebie więc idziemy wciąż, radosną nucąc pieśń:

Ref.: Ty jesteś Bogiem wiernym na wieczny czas.

2.Przez dar Twojego Chleba, dobry Boże nasz./x2 
Rodzinę bratnią czynisz z nas, miłować uczysz nas.
3.To Twoje miłowanie dało wolność nam./x2 
Chwalimy Święte Imię Boga, jak uczyłeś nas.
4.Tyś nam wyznaczył drogę wiodącą na Twój szlak./x2 
Idziemy więc, by radość nieść tam, gdzie jej światu brak.`
  },
  {
    number: 143,
    title: "O Piękności niestworzona",
    lyrics: `O Piękności niestworzona 
kto Ciebie raz poznał 
ten nic innego kochać nie może 
Czuję, że tonę w Tobie jako 
jedno ziarenko piasku 
w bezdennym oceanie 
Czuję, że nie ma ani jednej 
kropli krwi we mnie, która 
by nie płonęła miłością ku Tobie 
Ref. Miłosierdzie Boże /x3`
  },
  {
    number: 144,
    title: "Oddajmy cześć",
    lyrics: `Oddajmy cześć /x2 wiecznemu Panu chwał /x2 
Pokłońmy się /x2 Temu, który /x2 
Rozpostarł niebiosa /x2 i utwierdził ziemi krąg./x2
Jego chwała /x2 wznosi się ponad szczyty gór,/x2
Jego łaska /x2 
nad nami jest, a niebo Jego tron.
Bóg to nasz Pan /x2 i tylko On! /x2
Bóg to nasz Pan i tylko On`
  },
  {
    number: 145,
    title: "Ofiaruje Tobie Panie mój",
    lyrics: `Ofiaruje Tobie Panie mój
całe życie me cały jestem Twój aż na wieki
oto moje serce przecież wiesz 
Tyś miłością mą jedyną jest`
  },
  {
    number: 146,
    title: "Ogrody",
    lyrics: `Już teraz we mnie kwitną Twe ogrody 
Już teraz we mnie Twe królestwo jest`
  },
  {
    number: 147,
    title: "On i ja, On jest moim Bogiem",
    lyrics: `Ref.:On i ja, On jest moim Bogiem,
On i ja, każdy Mu odpowie.
On i ja, On jest taki dobry,
On i ja świat jest z Nim cudowny.

1.Jezus moim jest przyjacielem,
moje życie jest z Nim radosne,
Wiem, że mnie kocha i nie opuści,
na Niego zawsze liczyć mogę.
2. Kiedy mi smutno, kiedy mi źle, 
kiedy mnie trapią różne zmartwienia. 
Wtedy do Niego,Zbawcy przychodzę, 
bo On jest źródłem mego istnienia.`
  },
  {
    number: 148,
    title: "On tu jest",
    lyrics: `ref. On tu jest jest tu 
 On tu jest Jezus /x2 
1.Jezus Zbawiciel, mój jedyny Pan 
przychodzi tu by uzdrowić mnie. 
I choć zakrył swej potęgi blask
Wierzę że On 
2. Okryty szatą białego chleba
przychodzi by nam siebie dać
dzisiaj otwieram dla niego serce
Wierzę że On`
  },
  {
    number: 149,
    title: "Oto są baranki młode",
    lyrics: `Oto są baranki młode.
Oto ci, co zawołali: Alleluja! 
Dopiero przyszli do zdrojów, 
światłością się napełnili. Alleluja, alleluja

1.Na Baranka Pańskich godach
W szat świątecznych czystej bieli,
Po krwawego morza wodach
Nieśmy Panu pieśń weseli.
2. W Swej miłości wiekuistej
On nas Swoją Krwią częstuje.
Nam też Ciało Swe przeczyste 
Chrystus Kapłan ofiaruje.
3. Chwała Ojcu i Synowi,
który z martwych żywy wstaje,
I Świętemu też Duchowi
niech na wieki nie ustaje`
  },
  {
    number: 150,
    title: "Otwórz me oczy, o Panie",
    lyrics: `Otwórz me oczy, o Panie, 
otwórz me oczy i serce. 
Chcę widzieć Ciebie. /x2

Wywyższonego widzieć chcę,  
ujrzeć Ciebie w blasku Twej chwały. 
Wylej swą miłość i moc, 
gdy śpiewam "święty, święty, święty".

||:Święty, święty, święty! :||x3
Chcę widzieć Ciebie.`
  },
  {
    number: 151,
    title: "Pan jest pasterzem moim",
    lyrics: `Pan jest Pasterzem moim, niczego mi nie braknie,
Na niwach zielonych pasie mnie,
Nad wody spokojne mnie prowadzi.`
  },
  {
    number: 152,
    title: "Pan wywyższony",
    lyrics: `Pan wywyższony, 
nasz Król wywyższony wśród chwał,
Uwielbiajmy Go. 
Pan wywyższony, 
nasz Król wywyższony, 
Oddajmy Jemu cześć. 

On Królem jest, Jego łaska na wieki trwa. 
Niebi i ziemia raduje się Jego imieniem 
Pan wywyższony, nasz Król wywyższony 
Wśród chwał.`
  },
  {
    number: 153,
    title: "Pana wielbić chce",
    lyrics: `Pana wielbić chcę, Pana wielbić chcę
Dać Mu chwałę, cześć, dać Mu chwałę, cześć
Opowiadać o potężnych dziełach Jego. (Alleluja)
Ludziom Boga dać, ludziom Boga dać
W Nim też zawsze trwać, w Nim też zawsze trwać
Aby była w nas chwała i moc.

Ref. Chwała Mu, chwała Mu,
Chwała, chwała, chwała Jezusowi zawsze
Chwała Mu, chwała niechaj brzmi (Jezusowi). /2x`
  },
  {
    number: 154,
    title: "Panie mój przychodzę dziś",
    lyrics: `Panie mój, przychodzę dziś 
Serce me skruszone przyjm 
Skłaniam się przed świętym tronem twym
 
Wznoszę ręce moje wzwyż 
Miłość mą wyznaje Ci 
Uwielbiam Ciebie w duchu 
Uwielbiam w prawdzie Cię 
Życie me oddaje Tobie, uświęć je.`
  },
  {
    number: 155,
    title: "Panie my Twoje dzieci",
    lyrics: `Panie my Twoje dzieci 
zebrane w imieniu Twym.
Jedno serce i cel nas gromadzi,
by wielbić Cię i śpiewać hymn: 

Ref.Tylko Ty Panie jesteś fundamentem,
nie musimy się bać.
Gdy nadejdą burze my będziemy trwać, 
bo Ty zbawiłeś nas./X2`
  },
  {
    number: 156,
    title: "Panie proszę przyjdź",
    lyrics: `1. Panie proszę przyjdź, serce Ci otworzę, 
Chcę byś mieszkał w nim, ze mną zawsze był. 
Tyś największy skarb, mojej wiary płomień. 
Pragnę z Tobą Iść, kochać tak jak Ty. 

Ref. Tak wiele dałeś mi, a ja nie umiem przyjść. 
By przez grzechu mrok podać Ci swą dłoń. 
Cóż mogę Tobie dać za tyle w życiu łask. 
Więc serce Jezu weź, chcę by kochało Cię. 

2. Biegnę ścieżką gwiazd, szukam Twojej twarzy,
I nie widzę jak obok cierpi brat. 
Panie pomóż mi, przyjm modlitwę moją. 
Chcę, by miłość Twa napełniła mnie.`
  },
  {
    number: 157,
    title: "Panie światło miłości Twej świeci",
    lyrics: `1.Panie, światło miłości Twej świeci,
Pośród wszelkiej ciemności świeci.
Oświeć nas, Jezu Światłości świata,
Wyzwól prawdą, którą przynosisz,
Oświeć mnie, oświeć mnie.

Ref.: Świeć, Jezu świeć, chwałą Ojca napełnij ziemię,
Płoń, Duchu płoń, w sercach ogień złóż,
Płyń, rzeko płyń, zalej łaską narody całe,
Ślij słowo Twe, Światłość niech stanie się.

2.Panie, wchodzę w Twą obecność, 
cień ustąpi przed Twoim blaskiem. 
Dzięki krwi Twojej żyję w światłości,
Badaj mnie, wypal, pochłoń ciemności, 
oświeć mnie, oświeć mnie.
3.Widzę Twoją królewską jasność, 
która twarze nam rozjaśnia, 
Potem prowadzi od chwały do chwały,
Życiem naszym o Tobie opowie, 
oświeć mnie, oświeć mnie.`
  },
  {
    number: 158,
    title: "Pastwisko",
    lyrics: `1.Przez ciemne doliny,
przez skalne urwiska 
Prowadzi mnie Pasterz
do swego pastwiska. 
Ochrania przed bólem,łzy moje ociera,
W ramiona swe bierze,
Swą bramę otwiera.

Ref.I niesie na rękach, przytula do siebie
I mówi spokojnie już jesteś w niebie
I nic się nie bój, przyszedłem po ciebie. 
Tęskniłem za tobą, brakuje cię w niebie. 

2. Choć owiec jest wiele,
ogromne pastwisko
Już bać się nie musisz o żadne urwisko.
Zagroda z miłości i z wiary mieszkania,
To owoc całego ziemskiego czekania.`
  },
  {
    number: 159,
    title: "Pewnej nocy łzy z oczu mych",
    lyrics: `1. Pewnej nocy łzy z oczu mych
otarł dłonią swą Jezus
I powiedział mi: Nie martw się,
jam przy boku jest twym.
Potem spojrzał na grzeszny świat
pogrążony w ciemności
I zwracając się do mnie pełen smutku tak rzekł.:

Ref.: Powiedz ludziom, że kocham ich,
że się o nich wciąż troszczę.
jeśli zeszli już z moich dróg,
powiedz, że szukam ich. /x2

2. Gdy na wzgórzu Golgoty
za nich życie oddałem.
To umarłem za wszystkich aby każdy mógł żyć.
Nie zapomnę tej chwili,
gdy mnie spotkał mój Jezus.
Wtedy byłem jak ślepy on przywrócił mi wzrok.`
  },
  {
    number: 160,
    title: "Pielgrzymkowe Ale jazz",
    lyrics: `Na Jasną Górę dziś postanowiłam iść
Św. Antoni także towarzyszy mi
Matko dodaj sił aby dalej iść
by hołd oddać Ci
Szczyt Jasnogórski przed oczami teraz mam
i pielgrzymować będę do Maryi bram
kilometrów dość, żeby mocno dostać w kość
pielgrzym to jest gość

Ref. ooooo ale jazz
na pielgrzymce fajnie jest
wszyscy bracia są the best
każda siostra uśmiechnięta
śpiewam dziś i będziemy razem iść
aby pokłon oddać Ci
nasza Matko Częstochowska
ooooooooooooo
aby pokłon oddać Ci
Nasza Matko Częstochowska.

2.Godzina szósta rano i poranna Msza
karmieni Słowem Bożym, które wartość ma
choć zmęczenie czuć, negatywy rzuć
i chodź dalej i chodź dalej`
  },
  {
    number: 161,
    title: "Pomódl się Miriam",
    lyrics: `Pomódl się Miriam, aby Twój Syn żył we mnie. 
Pomódl się, by Jezus we mnie żył. 
Gdzie Ty jesteś, zstępuje Duch Święty. 
Gdzie Ty jesteś, niebo staje się. 

Miriam, Tyś jest bramą do nieba, 
moim niebem jest Twój Syn 
Weź mnie, weź mnie do Swego łona 
bym bóstwem Jezusa zajaśniał jak Ty.`
  },
  {
    number: 162,
    title: "Pozdrawiam Ciebie Matko",
    lyrics: `1.Pozdrawiam Ciebie, Matko,
Mistrzyni moich dróg.
Pozdrawiam Ciebie, Pani,
Nadziejo moich próśb.
Pozdrawiam Cię, Królowo,
W swe dłonie weź nasz los.
I wspieraj, byśmy zawsze
Nieśli miłości ton.

Ref. Ave Maryja, woła cały świat, /
Ave Maryja, Matko Boga i nas. /2x

2.Niech w sercach naszych zabrzmi
Dla Ciebie Ave pieśń.
Niech maj trwa dla nas zawsze,
W nim wzrasta Twoja cześć.
Niech nigdy nie ustanie
Pozdrowień Ave moc.
Ty naszym hymnem stań się,
Pragnieniem naszym bądź.`
  },
  {
    number: 163,
    title: "Pozwól mi przyjść do Ciebie",
    lyrics: `Ref.: Pozwól mi przyjść do Ciebie, 
takim zwyczajnym, jakim jestem. 
Pozwól mi przyjść do Ciebie 
jednym łaskawym Twoim gestem. 

1.Ty jesteś, Mario, taka czysta 
jak łza grzesznika, gdy żałuje. 
Ty jesteś, Mario, taka dobra, 
to moje ludzkie serce czuje. 
Więc się ośmielam przyjść do Ciebie.
Tak jak przed Matką dziecko staje.
Więc się ośmielam paść przed Tobą
i całą nędzę Ci wyznaję.
2. Patrzysz łaskawym na mnie wzrokiem,
uczysz miłości, uczysz wiary.
Patrzysz łaskawym na mnie sercem,
uczysz wdzięczności i ofiary.
Zanim odejdę od stóp Twoich,
pozwól, że skończę na pytaniu,
które dotyczy mego życia:
„Co znaczy trwać w ofiarowaniu”.`
  },
  {
    number: 164,
    title: "Pójdę do nieba piechotą",
    lyrics: `1.Jak jest po tamtej stronie snu,
czy duchy widzą Wielki Wóz,
Czy duchy widzą Ziemi kształt,
jak znoszą szybkość świetlnych lat.
Czy rozróżniają biel i czerń? 
Dobro od zła od nocy dzień?
Czy między sobą żrą jak psy? 
Czy toczą wojny tak jak my?

Ref. Pójdę do nieba piechotą,
Przez wodę, przez błoto,
nie pytaj mnie po co?
Pójdę ze Stróżem Aniołem,
Tak pójdę jak stoję,
nie zabiorę z sobą nic.

2. Na powitanie wielki bal,
duchy tańczące w tysiąc par.
Anioł wodzirej daje znak,
Bóg ze wszystkimi za pan brat.
Wnet Anioł Stróż przedstawił mnie, duchom, 
aniołom, Bogu też. 
Znasz może Polskę, piekny kraj,
oto jej syn, rękę mu daj.`
  },
  {
    number: 165,
    title: "Póki mego życia",
    lyrics: `Póki mego życia Panu śpiewać chcę,
Grać memu Bogu — póki życia starczy mi.
Niech miła Ci będzie Panie moja pieśń,
Będę radował się w Panu Bogu mym.

Ref.: Błogosław duszo moja Pana — Alleluja
Błogosław duszo moja Pana — Alleluja./x2

2.Bogu memu ufam, On prowadzi mnie,
Jak pasterz owce swoje — Pan Bóg wiedzie mnie.
Głosić chcę, O Panie miłosierdzie Twe,
Niech wszystkie ludy ujrzą chwały Twojej blask.`
  },
  {
    number: 166,
    title: "Pragnę Tobie dziś wyśpiewać",
    lyrics: `1. Pragnę Tobie dziś wyśpiewać
całą moją duszę
lecz Ty, o Ty Panie wiesz. 
Wiesz, że w niej
już na zawsze jesteś Ty, mój Bóg, 
i tak kochasz mnie, jak żaden człowiek.

Ref.:Panie, jak odpłacić mam za miłość Twoją,
Panie, czy zapomnisz to co złe, 
chcę odnaleźć drogi Twe 
Panie mój, kocham Cię, kocham Cię.

2. Czym bez Ciebie ja mały okruch 
w wielkim świecie,
Ty dajesz siły znak - 
to Twój Krzyż. 
On ochrania moje dni, a Ty wciąż
kochasz mnie jak żaden człowiek.`
  },
  {
    number: 167,
    title: "Prawda jedyna",
    lyrics: `Prawda jedyna słowa Jezusa z Nazaretu 
że swego syna posłał z niebios Bóg na świat.
Aby niewinnie cierpiąc zmarł za nasze grzechy
I w pohańbieniu przyjął winy wszystkich nas.

Ref.: Dzięki Ci Boże mój za ten krzyż
Który Jezus cierpiał za mnie,
Jezus cierpiał za mnie.

2. Uwierz w Jezusa przecież On za ciebie umarł
Z miłości do nas przyszedł z nieba na ten świat
Błogosławiony ten kto wierzy choć nie widział
Zaufaj dziś Bogu a na wieki będziesz żył.`
  },
  {
    number: 168,
    title: "Przed obliczem Pana uniżmy się",
    lyrics: `Przed obliczem Pana uniżmy się. (2x) 
Pan sam wywyższy nas. 
/Jego jest ziemia i czas, 
Pan sam wywyższy nas./2x 
2. Wszystkie swoje troski oddajmy Mu. (2x)
Pan sam wywyższy nas...`
  },
  {
    number: 169,
    title: "Przybądź Święty Niepojęty",
    lyrics: `1.Języku ognia przyjdź i płoń w naszych sercach
Duchu Miłości przemieniaj nas
Swe pocieszenie nam daj i nim wypełniaj
Duchu Nadziei umacniaj nas

Ref. Przybądź Święty Niepojęty, 
z Nieba na nas tchnięty Duchu
Rozpal Świętą, Niepojętą, 
z Nieba na nas tchniętą miłość
Nią ogarnij nas, Amen
Nią ogarnij nas, Amen

2. Obłoku jasny ochroń nas przed gniewem złego
Daj soli smak i światłu blask
Nie daj się ukryć miastu Boga przedwiecznego
Osłaniaj je, strzeż jego bram
3. Pocieszycielu radość Swą ześlij z Nieba
Wszak Dobry ją obiecał nam
Przerwij milczenie w Imię Syna Słowa Chleba
Najświętsze tchnienie wołaj w nas`
  },
  {
    number: 170,
    title: "Przychodzisz, Panie, mimo drzwi",
    lyrics: `Przychodzisz, Panie, mimo drzwi
zamkniętych,
Jezu Zmartwychwstały, ze śladami męki.
Ty jesteś z nami, poślij do nas Ducha!
Panie nasz i Boże, uzdrów nasze życie!`
  },
  {
    number: 171,
    title: "Przyjaciela mam, co pociesza mnie",
    lyrics: `Przyjaciela mam, co pociesza mnie.
Gdy o Jego ramię, oprę się. 
W nim nadzieję mam, uleciał strach. 
On najblizej jest, zawsze troszczy się. 
Królów Król, z nami Bóg /2x 
Jezus /4x`
  },
  {
    number: 172,
    title: "Przyjdź Duchu Święty",
    lyrics: `1. Przyjdź Duchu Święty, ja pragnę,
O to dziś błagam Cię.
Przyjdź w swojej mocy i sile, 
Radością napełnij mnie.
2. Przyjdź jako mądrość do dzieci, 
Przyjdź jak ślepemu wzrok.
Przyjdź jako moc w mej słabości, 
Weź wszystko, co moje jest.
3. Przyjdź jako źródło pustyni,
Z mocą swą do naszych dusz.
O niech twa moc uzdrowienia, 
Dotknie, uleczy mnie już.`
  },
  {
    number: 173,
    title: "Przyjdź jak deszcz ożyw dziś",
    lyrics: `1.Przyjdź jak deszcz ożyw dziś
suchą ziemię naszych serc
Przyjdź jak deszcz na spragniony świat
Dotknij nas tak jak wiatr
rozpędź smutek, otrzyj łzy
zabierz tam, gdzie się w radość zmienia strach

Ref:
Wszystko dziś nowe staje się
Panie, przyjdź i napełnij mnie!

Przyjdź jak deszcz do spragnionych serc
tak pragniemy Ciebie, Panie
niech Twa moc dziś objawi się
pokaż swoją chwałę!

2.Przyjdź jak deszcz Panie nasz
obmyj gorycz, żal i ból
Pozwól dziś niech nadzieja kwitnie w nas.
To, co złe zniknie gdzieś
nowy dzień nastaje już
Jesteś jak słońca blask w pochmurny czas`
  },
  {
    number: 174,
    title: "Psalm 148 - Niech zabrzmi Panu",
    lyrics: `Ref.: Alleluja! /x4
1.Niech zabrzmi Panu chwała w niebiosach, 
Na wysokościach cześć niech oddadzą. 
Wielbijcie Pana Duchy niebieskie,
Wielbijcie Pana Jego zastępy!
2.Słońce, księżycu, wielbijcie Pana 
gwiazdy świecące, wielbijcie Pana. 
Niebiosa niebios, wielbijcie Pana 
wody podniebne, wielbijcie Pana!
3.Niech wszyscy wielbią Imię Pana, 
bo Jego Słowo stwarza wciąż wszystko,
bo tylko Jego Imię jest wzniosłe 
niechaj na wieki brzmi Jego chwała!
4.On daje siły swemu ludowi 
z prochu podnosi swoich przyjaciół. 
Jest Bogiem bliskim dla Izraela 
swoich wybranych On sam umacnia!
5.Niech zabrzmi chwała Ojcu, co stwarza, 
Jego Synowi, który jest Panem.
Duchowi, który w nas zamieszkuje
przez wszystkie wieki wieków! Amen!`
  },
  {
    number: 175,
    title: "Raduję się dusza ma",
    lyrics: `Raduje się dusza ma
wielbi Pana swego.
Będę Ci śpiewał z całej siły.
Sławić Cię będę za Twe dzieła.
Będę Ci śpiewał z całej siły. 
Błogosławić będę Twoje imię.
Jest miłosierny Pan zastępów.
Moc Jego ramienia nad swym ludem. 
Pan mój zbawca.`
  },
  {
    number: 176,
    title: "ROZMOWA ZE ŚW. JÓZEFEM",
    lyrics: `Powiedz, co czułeś, Józefie święty
w godzinę twego zwiastowania,
kiedy Bóg odebrał Ci wszystko,
i wszystko dał Ci w zamian.

Ref. Jest taka miłość,
która godzi ogień z wodą,
i wolność taka, 
co dla swej woli zamyka drogę.
Jest taka radość,
która pulsuje milczeniem,
i pewność taka, 
co się upewnia nierozumieniem.

2. Powiedz, co czułeś, Józefie święty
gdy uszy twe ciągle słyszały,
jak synem cieśli był nazywany
Król Chwały nieskończonej.
3.Powiedz, co czułeś, Józefie święty,
gdyś siadał wraz z Miriam przy stole
i zwykłym chlebem Jezusa karmił -
Chleb Żywy wszech pokoleń`
  },
  {
    number: 177,
    title: "Ruszaj",
    lyrics: `Ruszaj, ruszaj, ruszaj tam,
Gdzie Ziemię Obiecaną daje ci Pan. 
Ruszaj, ruszaj, ruszaj tam,
Gdzie Ziemia Obiecana jest.

1. Wyruszył kiedyś tam
Abram ze swego Ur Chaldejskiego, 
Bo wierzył, bo wierzył, bo wierzył, że 
Przyjdzie taki dzień i usłyszysz
2. Już czekasz tyle lat,
By raz chociaż przeżyć wraz z Bogiem chwilę.
Czy wierzysz, czy wierzysz, czy wierzysz, że 
Będzie taki czas – i usłyszysz.
3.I wątpisz w życia sens, 
masz dość świata, ludzi, samego siebie,
Czy wierzysz, czy wierzysz, czy wierzysz, że 
będzie taki czas i usłyszysz:
4.Więc szukaj Boga wciąż, 
niech On będzie szansą dla ciebie wielką 
I uwierz, i uwierz, i uwierz, że 
będzie taki czas, gdy usłyszysz:`
  },
  {
    number: 178,
    title: "Sandały",
    lyrics: `Gdy uczniów swych posyłał Pan,
By nieśli wieść radosną,
Żegnając ich dał swoją moc
I mówił tak z miłością:

Ref. Nie warto na drogę tę
Sandałów i płaszcza zabierać.
Nie trzeba wam srebra brać
O dach nad głową zabiegać.

2.Nowinę tę głosili więc
Po czterech stronach świata.
Bogaci tak, nie mając nic,
Bo miłość jest tak bogata.

3.Gdy ukończyli żniwo swe,
W ostatnią drogę ruszyli.
Patrzyli w niebo na Ojca dom
I tak z ufnością śpiewali:`
  },
  {
    number: 179,
    title: "Schowaj mnie pod skrzydła Swe",
    lyrics: `1.Schowaj mnie pod skrzydła Swe,
ukryj mnie w silnej dłoni Swej. /x2

Ref. Kiedy fale mórz chcą porwać mnie,
Z Tobą wzniosę się, podniesiesz mnie,
Panie, Królem Tyś spienionych wód,
ja ufam Ci, Ty jesteś Bóg. x2

2. Odpocznę dziś w ramionach Twych.
Dusza ma w pokoju będzie trwać.`
  },
  {
    number: 180,
    title: "Serce wielkie nam daj",
    lyrics: `Ref.: Serce wielkie nam daj, zdolne objąć świat,
Panie, serce nam daj, mężne w walce ze złem.

1.Zwleczmy z siebie uczynki starych ludzi, 
Zniszczmy wszystko, co budzi Boży gniew, 
Wdziejmy biel nowych szat w Chrystusie Panu, 
Nowy człowiek powstanie w każdym z nas.
2.Nowi ludzie w historię wpiszą miłość, 
Wskażą drogi odnowy ludzkich serc, 
Nowi ludzie przeżyją własne życie, 
Tworząc wspólnym wysiłkiem nowy świat.
3.Nowi ludzie przyniosą ziemi pokój, 
w znaku wiary jednocząc cały świat. 
Nowi ludzie przyniosą ziemi wolność, 
prawda ludzi wyzwoli, niszcząc zło`
  },
  {
    number: 181,
    title: "Siedem",
    lyrics: `1 2 3 4 5 6 7

1.Siedem! Dni ma tydzień
Który to święty dzień?
Poniedziałek jest okej
Wtorek ani trochę mniej
I środek środy to dobry czas, żeby modlić się
Czwartek wcale nie jest zły
Piątkowy wieczór czy
Sobota rano śpiewamy Ci

Ref.Alleluja! Nie tylko w niedzielę
Nie tylko w kościele
Każdego dnia! Zawsze i wszędzie
Chcemy Cię wielbić Panie nasz

2.Wierni Bądźmy wierni
Dzielni Nie niedzielni
Poniedziałek jest okej
Wtorek ani trochę mniej
I środek środy to dobry czas, żeby modlić się
Czwartek wcale nie jest zły
Piątkowy wieczór czy
Sobota rano śpiewamy Ci

Ref:....`
  },
  {
    number: 182,
    title: "Stoję dziś",
    lyrics: `Stoję dziś, moje serce, ręce tak wyciągam
W podziwie dla Tego, który wszystko dał 
Stoję dziś, moją duszę, Panie, Tobie składam, 
Ja chcę być jak Ty!`
  },
  {
    number: 183,
    title: "Szary świat",
    lyrics: `Miała różaniec i wiary za stu
od rana z nami na szlaku do Maryi stóp
zanurzona w modlitwie czy słońce czy deszcz
kolejny kroczek stawiała by ją spotkać wiesz
A gdyby tak razem z nią poszedł cały świat
zniknąłby grzech i strach bo u Matki bram
jest to czego najbardziej Ci brak

Ref. chodź ze mną na Jasną Górę
no chodź, razem z Koziegłówkami chodź
chodź ze mną do Częstochowy
do bram, razem z nami do Maryi bram
chodź ze mną pielgrzymi pędzą
do bram, Matki Bożej którą dobrze znam
chodź ze mną gdzie ludzie pędzą
o tam do Maryi Jasnogórskich bram

2.On lubił być z nami i pomagał nieść
tuby na całej trasie by rozbrzmiała pieśń
pieśń o naszej Matce co na Jasnej tron ma
do którego zmierzamy każdego dnia
A gdyby tak razem z nim poszedł cały świat
zniknąłby grzech i strach bo u Matki bram
jest to czego najbardziej Ci brak`
  },
  {
    number: 184,
    title: "Sześćset lat",
    lyrics: `1.Matko, Tyś naród polski,
Przed wiekami już wybrała.
Matko, Tyś naród polski,
Całym sercem ukochała.
Wdzięczni za Twoją dobroć, 
Przemierzamy wiele dróg.
Wierząc, że pełną prawdą,
Pełnym życiem jest sam Bóg.

Ref. Sześćset lat Maryjo z nami jesteś,
Z Jasnej Góry wiernie trzymasz straż.
Sześćset lat już bronisz nas od nieszczęść,
By nie zginął polski naród nasz. 
Chcemy prosić Cię Maryjo dzisiaj, 
Gdy wokoło czyha tyle burz.
Zostań z nami Matko ukochana,
Nie lat sześćset, lecz na zawsze już.

2. Matko, spójrz w nasze serca,
W których wielka wdzięczność bije. 
Matko, spójrz w nasze serca,
W których Chrystus, Syn Twój żyje. 
Przyjmij podziękowania,
Młodych serc radosną pieśń.
Przyjmij o Matko Droga,
Naszą chwałę, hołd i cześć.
3. Matko, Ty nas poprowadź,
Pomóż prawdy szukać dróg.
Pomóż by przez życie,
Każdy z Bogiem kroczyć mógł. 
Pomóż nam dziś Maryjo,
Do serc ludzkich znaleźć klucz. 
Prowadź nas i na co dzień,
Żyć w miłości Matko ucz.`
  },
  {
    number: 185,
    title: "Śpiewaj Hosanna",
    lyrics: `Radość tchnij w serce me, bym Cię chwalił, 
Radość tchnij, proszę w serce me.
Radość tchnij w serce me, bym Cię chwalił, 
Bym Cię zawsze chwalił Panie mój.

Ref. Śpiewaj hosanna, śpiewaj hosanna,
Śpiewaj Panu, który Królem jest.
Śpiewaj hosanna, śpiewaj hosanna, 
Śpiewaj Panu cały dzień.

2. Pokój tchnij w serce me, bym odpoczął,
Pokój tchnij proszę w serce me.
Pokój tchnij w serce me, bym odpoczął,
Bym w spoczynku nawet chwalił Cię. 
3. Miłość tchnij w serce me, abym służył,
Miłość tchnij proszę w serce me. 
Miłość tchnij w serce me, abym służył,
Bym swą służbą także chwalił Cię`
  },
  {
    number: 186,
    title: "Święty",
    lyrics: `Święty, święty, święty jest nasz Pan./ x4
Wywyższony i święty, i godzien czci,
nasze serca, Jezu, wielbią Cię.
Wywyższony i święty, i godzien czci
święty jest nasz Pan.`
  },
  {
    number: 187,
    title: "Święty - uśmiechniety (Arka Noego)",
    lyrics: `Ref: Taki duży, taki mały może świętym być,
Taki gruby, taki chudy może świętym być, 
Taki ja, i taki ty może świętym być,
Taki ja, i taki ty może świętym być.

1.Święty kocha Boga i życia mu nie szkoda,/
Kocha bliźniego jak siebie samego./x2
2.Kto się nawróci ten się nie smuci, 
każdy Święty chodzi uśmiechnięty. 
Tylko nawrócona jest zadowolona, 
każda Święta chodzi uśmiechnięta.
3.Nic nie potrzebuje, zawsze się raduje,/ 
Bo święta załoga kocha tylko Boga. /x2
4.Gdzie można dzisiaj świętych zobaczyć? /
Są między nami w szkole i w pracy./x2`
  },
  {
    number: 188,
    title: "Święty x5",
    lyrics: `Święty, święty, święty, święty, święty Pan, 
Święty, święty, święty, święty Bóg i Król, 
Otwieram serce me, 
Podnoszę ręce swe, 
Królu wejdź i rozgość się. /2x`
  },
  {
    number: 189,
    title: "Tak mnie skrusz",
    lyrics: `Tak mnie skrusz,
Tak mnie złam,
Tak mnie wypal Panie
Byś został tylko Ty,
Byś został tylko Ty Jedynie Ty`
  },
  {
    number: 190,
    title: "Tak pragnę wielbić Cię",
    lyrics: `Tak pragnę wielbić Cię, dobry Panie mój!
Tak pragnę wielbić Cię, bo Ty dajesz mi,
Patrzeć w Twoją twarz i rozpoznać wolę Twą
Tak pragnę wielbić Cię!

Ptaki na niebie nucą Ci swą pieśń,
Ramiona polnych drzew niosą Tobie cześć.
A ja śpiewam Ci. 
Pragnę ręce swe do Ciebie wznieść.`
  },
  {
    number: 191,
    title: "Tobie chór Aniołow",
    lyrics: `1.Tobie chór Aniołów śpiewa nową pieśń
Chwała Barankowi /x2
REF: Alleluja Alleluja Alleluja
Chwała i cześć!`
  },
  {
    number: 192,
    title: "Twe Miłosierdzie",
    lyrics: `Twe Miłosierdzie niech spływa, niech spływa. 
Tak jak wiosenny ciepły deszcz.
Twe Miłosierdzie niech spływa, 
niech spływa na mnie

ref. Hej, ho! Przyjmę Twoją łaskę.
Hej, ho! Miłosierdzie Twe.
Hej, ho! Dziś przed Tobą tańczyć chce`
  },
  {
    number: 193,
    title: "Twoja miłość jak ciepły deszcz",
    lyrics: `Jesteś blisko mnie,
a tęsknię za Duchem Twym.
Kocham kroki Twe
i wiem jak pukasz do drzwi.
Przychodzisz jak ciepły wiatr,
otwieram się i czuję znów, że...

Twoja miłość jak ciepły deszcz,
Twoja miłość jak morze gwiazd za dnia,
Twoja miłość sprawia, że
nieskończenie dobry Święty Duch,
Ogarnia mnie`
  },
  {
    number: 194,
    title: "Twoje ręce to mój ląd (TGD)",
    lyrics: `Twoje ręce to mój ląd wiem nie utonę 
Twoje ręce to mój brzeg kiedy dokoła sztorm 
Twoje ręce to mój ląd pokonam drogę 
do tych wyciągniętych rąk 
czuję że już blisko jest to wytęsknione 
wtulam się w ramiona Twe kiedy wokół mrok 
pierwsza gwiazda nieba gest wskazuje drogę
może dziś się zdarzy cud

jesteś tam widzę Cię światło woła mnie

Ref. Coraz bliżej Ciebie być tego pragnę
chociaż czasem trzeba iść pod prąd
suchą stopą przejdę dziś po tej wodzie
Twoje ręce to mój ląd

2.Twoje ręce to mój ląd wiem nie utonę
Twoje ręce to mój brzeg i obiecany dom
jedno miejsce wolne wciąż zaczeka na mnie
Twoje ręce to mój ląd

widzę Cię jesteś tam słyszę głos znany tak
jesteś tam widzę Cię światło woła mnie`
  },
  {
    number: 195,
    title: "Ty Boże wszystko wiesz",
    lyrics: `Ty Boże wszystko wiesz - 
Ty serce moje znasz. 
Więc prowadź mnie wiekuistą drogą.
1. Przejrzałeś mnie i znasz mnie Panie. 
Przenikasz naprzód myśli moje. 
Znasz mój spoczynek i działanie,
Poznałeś wszystkie drogi moje.
2. Otaczasz mnie, wiesz o mnie wszystko.
I kładziesz na mnie rękę swoją.
Ta wiedza dla mnie jest przedziwna,
Zbyt wielka, abym mógł ją pojąć.`
  },
  {
    number: 196,
    title: "Ty jesteś zawsze wierna",
    lyrics: `Ty jesteś zawsze wierna
ucz nas ufać do końca
Temu, który nam pierwszy zaufał.
Wstawiaj się za nami u Syna.
Ref. W Twoje ręce-o Matko, składamy dar
Naszego zawierzenia Panu.`
  },
  {
    number: 197,
    title: "Ty światłość dnia",
    lyrics: `Ty światłość dnia 
wszedłeś w moje ciemności,
dałeś mi wzrok, abym mógł
widzieć Twą Twarz i Spojrzenie Miłości,
którym roztapiasz mój strach

Ref. Jestem tu, by wielbić, 
by oddawać chwałę,
jestem tu, by wyznać: to mój Bóg. 
dobry i łaskawy,
cały tak wspaniały,
ponad wszystko cenny dla mnie jest.

2.Ty czasów Król,
wywyższony na wieki,
jaśnieje w Niebie Twój Tron
zszedłeś na Ziemię,
by stać się Człowiekiem,
by rajem stał się moj dom

3. I niczym nie odpłacę się 
za miłość Twą i za Twój Krzyżx3`
  },
  {
    number: 198,
    title: "Ty tylko mnie poprowadź",
    lyrics: `1.Gdy drogi pomyli los zły
i oczy mgłą zasnuje
Miej w sobie tę ufność, nie lękaj się 
A kiedy gniew świat ci przesłoni 
I zazdrość jak chwast zakiełkuje
Miej w sobie tę ufność, nie lękaj się

Ref. Ty tylko mnie poprowadź
Tobie powierzam mą drogę 
Ty tylko mnie poprowadź Panie mój 

2. Poprowadź jak jego prowadzisz
Przez drogi najprostsze z możliwych
I pokaż mi jedną tę jedną z nich
A kiedy już głos Twój usłyszę
I karmić się będę nim codzień
Miej w sobie tę ufność Nie lękaj się`
  },
  {
    number: 199,
    title: "Ty wskazałeś drogę",
    lyrics: `1.Ty wskazałeś drogę do miłości, Ty, Panie.
Ty zmieniłeś świat swym Zmartwychwstaniem,
Ty, Panie, Panie .
REF. Tylko Ty jeden wiesz,
co w mym sercu dzieje się,
Tylko Ty, Panie, tylko Ty. x2
2.Ty oddałeś życie za nas wszystkich,
I dlatego jesteś tak mi bliski,
REF.U Twych stóp cały świat, Panie wiesz, co 
czeka nas, Tylko Ty, Panie, Tylko Ty. X2
3. W moim sercu jesteś w dzień i w nocy,
Choć mym oczom jesteś niewidoczny,`
  },
  {
    number: 200,
    title: "Tyle dobrego zawdzięczam Tobie Panie",
    lyrics: `1.Tyle dobrego zawdzięczam Tobie Panie,
Wszystko co mam od Ciebie przecież jest,
i to że jestem, że życie wciąż poznaję,
dziś tymi słowy wyrazić wszystko chcę

Ref. Za każdy dzień, za nocy mrok,
 za radość mą, szczęśliwy rok, 
 nawet za chmurne, deszczowe dni,
 za wszystko Panie, dziękuję Ci

2. Gdy mnie uczono, że jesteś Boże w niebie,
gdy poznawałam co dobre jest co złe,
w dziecinnych słowach mówiłam kocham Ciebie,
i powtarzałam w modlitwie słowa te.
3. Przyjmij o Boże tych modłów dziękczynienie,
bo jakże często miłości w modłach brak,
trudnością życia jest widzieć sens cierpienia,
dlatego Boże śpiewamy Tobie tak.`
  },
  {
    number: 201,
    title: "U Pana dziś zostawiam troski swe",
    lyrics: `U Pana dziś zostawiam troski swe, 
Oddaję Mu, On chętnie ciężar mój chce nieść. 
Składam go u Jego stóp i ulgę czuję znów, 
Moje zwątpienia, strach u Pana składam dziś.`
  },
  {
    number: 202,
    title: "Ukaż mi Panie swą twarz",
    lyrics: `Ukaż mi Panie swą twarz 
Daj mi usłyszeć Twój głos 
Bo słodki jest Twój głos 
I twarz pełna wdzięku 
Ukaż mi Panie swą twarz.`
  },
  {
    number: 203,
    title: "Ukulele (Małe TGD)",
    lyrics: `1.To coś co waży tak niewiele,
ale wiele melodii zna,
to moje małe ukulele,
niech zagra dziś alleluja

Ref.: Moje małe ukulele
alleluja, alleluja, alleluja,
moje małe ukulele alleluja 
ukulele alleluja x2

2.Wszędzie zabieram je ze sobą
i gdy ochotę tylko mam
żeby zrobiło się wesoło
na czterech strunach refren gram

Ref....: 

ukulele alleluja ukulele alleluja
ukule allelu ukule allelu
la la la la la la la la la la la la la

3.Dla Ciebie panie ta piosenka
to Twoja ręka trzyma mnie
gdy grasz na strunach mego serca
harmonia w nim pojawia się

Twoje małe ukulele
alleluja alleluja alleluja
Twoje małe ukulele alleluja 
dobry Panie Boże to ja x3`
  },
  {
    number: 204,
    title: "Uwielbiam Cię",
    lyrics: `Gdy wpatruję się w Twą świętą twarz, 
gdy rozmyślam nad miłością Twą, 
kiedy to, co wokół mnie
niknie w cień światłości Twej.
Gdy dotykam sobą serca Twego, 
gdy mą wolę składam u Twych stóp, 
kiedy to, co wokół mnie
niknie w cień światłości Twej.

REF. Uwielbiam Cię, uwielbiam Cię, 
bo mego życia sens to wielbić Cię. /x2`
  },
  {
    number: 205,
    title: "Uwielbiam Imie Twoje Panie",
    lyrics: `Uwielbiam Imię Twoje Panie, 
Wywyższam Cię i daję Ci hołd.
W przedsionku chwały Twej staję,
Z radością śpiewam Ci pieśń:

O Panie Jezu, chcę wyznać, że
Ja kocham Ciebie, Ty zmieniasz mnie. 
Chcę Ci dziękować ze wszystkich sił,
Dajesz mi siebie bym na wieki żył`
  },
  {
    number: 206,
    title: "W cieniu Twoich rąk (TGD)",
    lyrics: `W cieniu Twoich rąk
ukryj proszę mnie,
Gdy boję się, gdy wokół mrok,
bądź światłem bądź nadziei dniem.
Wszystkim o czym śnie
głosem w sercu mym,
Jak ręka która trzyma mnie.
Nad brzegiem nocy, brzegiem dni.
Bądź jak skrzydła dwa kiedy braknie sił.

Ref: Chwyć mnie i nieś
niech niebo bliżej będzie,
Tak bardzo chcę
w ramionach skryć się Twych.`
  },
  {
    number: 207,
    title: "W drogę z nami",
    lyrics: `1.W drogę z nami wyrusz Panie,
Nam nie wolno w miejscu stać.
Gdy zbłądzimy podaj rękę,
Gdy upadniemy pomóż wstać.

Ref. I do serca swego prowadź, 
Prowadź nas. 

2. Zabierz smutek, przywróć radość, 
Osłabionym dodaj sił.
Byśmy innym nieść pomogli,
Ciężar krzyża przez ten świat
3. Poprzez piachy, ostów kolce,
Z nami idź do niebios bram.
Po pustyniach zabłąkanym 
Wody Swojej zechciej dać.`
  },
  {
    number: 208,
    title: "W Tobie jest Światło",
    lyrics: `W Tobie jest światło 
każdy mrok rozjaśnia 
W Tobie jest życie 
Ono śmierć zwycięża 
Ufam Tobie ,miłosierny
Jezu wybaw nas`
  },
  {
    number: 209,
    title: "Wielbić mego Pana chcę",
    lyrics: `Wielbić mego Pana chcę
bo On godzien chwały jest 
On uwalnia mnie sam od wrogów mych
Mój Pan żyje Opoką moją jest 
I niechaj będzie wywyższony mój Zbawiciel
Mój Pan żyje Opoką moją jest
I niechaj będzie wywyższony Zbawca mój 
Zbawca mój`
  },
  {
    number: 210,
    title: "Wielbij, wielbj Go",
    lyrics: `1.Wielbij, wielbij Go, wielbij pieśnią swą,
Wielbij, wielbij Go, wielbij cały dzień...

Ref.: Bowiem Pan jest godzien, /
godzien przyjąć chwały pieśń. / x2

2.Wielbij, wielbij Go, wielbij sercem swym, 
Wielbij, wielbij Go, wielbij z wszystkich sił...
3.Wielbij, wielbij Go, wielbij życiem swym, 
Wielbij, wielbij Go, Imię Pana głoś.`
  },
  {
    number: 211,
    title: "Wierzę w Ciebie Panie",
    lyrics: `1.Wierzę w Ciebie Panie coś mnie obmył z win 
wierzę że człowiekiem stał się Boży Syn 
miłość Ci kazała krzyż na plecy brać 
w Tabernakulum zostałeś aby z nami trwać 
jesteś przewodnikiem nam do wieczności bram 
tam przygarniesz nas do Siebie. 
2.Tyś jest moim życiem boś Ty żywy Bóg
Tyś jest moją drogą najpiękniejsza z dróg
To jest moją prawdą, co oświeca mnie
boś odwiecznym Synem ojca który wszystko wie
nic mnie nie zatrwoży już wśród najcięższych burz
bo Ty Panie jesteś ze mną.
3.Tyś jest moja siłą w Tobie moja moc
Tyś jest mym pokojem w najburzliwszą noc
Tyś jest mym ratunkiem gdy zagraża toń
moją słabą ludzką rękę ujmij w swoja dłoń
z Tobą przejdę poprzez świat w ciągu życia lat
i nic złego mnie nie spotka.
4.W Tobie Boże miłość wiarę swoją mam
w Tobie Synu Boży ufność swoją mam
Duchu Święty Boże w serce moje wstąp
i miłości Bożej ziarno wrzuć w me serce w głąb
w duszy mojej rozpal żar siedmioraki dar 
daj mi stać się Bożą rolą`
  },
  {
    number: 212,
    title: "Wodę zamieniłeś w wino",
    lyrics: `1.Wodę zamieniłeś w wino,
Ślepi przy Tobie znów widzą.
Któż jest jak Ty, tylko Ty.
2.Blaskiem rozświetlasz ciemności,
Człowiek powstaje z marności.
Któż jest, jak Ty? tylko Ty

Ref. Nasz Bóg jest wielki, nasz Bóg jest silny,
Boże nikt inny nie równa się z Tobą. 
Nasz Bóg uzdrawia, jest wszechmogący, 
Nasz Bóg, nasz Bóg.
 
3.Jeśli nasz Bóg jest przy nas, już nic nas nie 
zatrzyma,
Jeśli nasz Bóg jest z nami, któż jest przeciwko 
nam! X 2`
  },
  {
    number: 213,
    title: "Wspaniałą Matką zwą Ciebie ludzie",
    lyrics: `1. Wspaniałą Matką zwą Ciebie ludzie, 
Biegną po pomoc w trosce i trudzie, 
Bo Ty, bo Ty, bo Ty pomagasz nam.
I patrzysz na nas czułym spojrzeniem, 
Pragniesz pomagać swoim ramieniem, 
Bo Tyś, bo Tyś ,bo Tyś nadzieją nam.

Ref.: Tyle lat już kochasz, kochasz nas nieustannie.
Serce otwierasz dla bliźniego, dla mnie.
Jesteś najlepszą drogą do Syna.
Za wszystkie troski i Twoje starania
Chcemy Cię darzyć pełnią zaufania.
Dzięki Ci za to, że jesteś naszą Matką.

2. Maryjo, Matko, my przychodzimy,
O wstawiennictwo Ciebie prosimy,
Bo Tyś... ostoją nam.
Ty nam podajesz pomocną rękę,
Z życia usuwasz grzechu udrękę,
Bo Tyś... ratunkiem nam.
3. Czarna Madonno z Tobą idziemy,
Na Jasną Górę pielgrzymujemy, 
Bo Ty.... tam czekasz nas.
Błogosław młodzież, utwierdź rodziny,
Weź w Swą opiekę polskie dzieciny,
Bo Tyś... ostoją nam.
4. Idziemy, Matko, drogą pielgrzymki,
Tobie dajemy nasze wysiłki,
Bo Tyś.... opieką nam.
Ty zaś, o Matko, proś Syna Swego,
Wstaw się za nami, Matko, do Niego, 
by On... wysłuchał nas`
  },
  {
    number: 214,
    title: "Wszyscy ludzie klaszczą w dłonie",
    lyrics: `Wszyscy ludzie klaszczą w dłonie
cała ziemia śpiewa, śpiewa
Wielka radość na Syjonie
Król zstępuje z nieba, z nieba x2
Nadejdzie dzień, nadejdzie dzień x2
Zobaczy to (zobaczy to) każdy z nas
Nadejdzie dzień, nadejdzie dzień x2
Uwielbi Go (uwielbi Go) cały świat.`
  },
  {
    number: 215,
    title: "Wszystkie moje troski",
    lyrics: `1.Wszystkie moje troski i kłopoty
W Twoje ręce składam, Panie mój.
Bardzo cieszę się, że właśnie nas wybrałeś,
Byśmy idąc nieśli imię Twe.
2.Zawsze chciałem zostać apostołem,
Było to pragnieniem w życiu mym.
Gdy odejdziesz, to napiszemy Ewangelię,
Aby Imię Twoje poznał świat.
3.Karmisz mnie codziennie swoim Ciałem,
Poisz mnie przedziwnie swoją Krwią.
Uczysz mnie codziennie mądrości swoim słowem,
Żebym wreszcie poznał miłość Twą.`
  },
  {
    number: 216,
    title: "Wszystkie narody",
    lyrics: `1.Wszystkie narody klaskajcie w dłonie 
Wykrzykujcie Bogu radosnym głosem, Bo Pan 
najwyższym jest królem nad całą ziemią.

Ref.: Śpiewajcie, wszystkie narody Śpiewajcie, 
radosnym głosem Śpiewajcie, Królowi.

2.Bo Bóg króluje nad narodami
Bóg zasiada na swym świętym tronie
Bo Bóg jest Królem całej ziemi
więc hymn śpiewajcie.`
  },
  {
    number: 217,
    title: "Wśród tylu dróg",
    lyrics: `1.Jak mocno serce biło mi, 
Gdym po raz pierwszy ujrzał obraz twój
Spragniony łask, miłości Twej 
Wołałem Matko wysłuchaj mnie

Ref. Wśród tylu dróg
poprowadź serce me 
Prowadź je tam, gdzie radość wieczna jest /x2 

2. Jak czasem w życie bywa źle,
Każdy z nas o tym dobrze wie
Ja jednak wciąż ufam, że
Ty Matko będziesz prowadzić mnie
3.Bywają w życiu chwile złe,
Ja także często miewam je
Więc modlę się o Bożą dłoń
I wołam: Matko szczęściem mi bądź`
  },
  {
    number: 218,
    title: "Wykrzykujcie na cześć Pana",
    lyrics: `Ref. Wykrzykujcie na cześć Pana Wszystkie ziemie, 
Wśród okrzyków i radości wysławiajcie Go

1. Wiedzcie, że Pan jest Bogiem
On sam stworzył nas
Jesteśmy Jego ludem
Jesteśmy Jego własnością
2. W Jego bramy wstępujcie z dziękczynieniem
Wśród hymnów w Jego przedsionki 
Błogosławcie imię Jego
Chwalcie Pana dziś
3.Albowiem dobry jest Pan, 
Łaskawość Jego na wieki. 
Albowiem dobry jest Pan, 
Jego wierność przez pokolenia`
  },
  {
    number: 219,
    title: "Wzywam Cię",
    lyrics: `1.Wzywam Cię, Duchu, przyjdź,
Czekam wciąż, byś dotknął nas.
Wołam Cię, Panie, przyjdź,
Jezu, Zbawco, do dzieci Twych.

Ref. Jak spragniona ziemia rosy dusza ma.
Tylko Ty możesz wypełnić serca głód.

2. Głębio mórz, potęgo gór. Boże mój,
Nie mogę bez Twej miłości żyć,
Nie chcę bez Ciebie żyć`
  },
  {
    number: 220,
    title: "Zaufaj Panu już dziś",
    lyrics: `1.Jak się nie bać, powiedz jak,
Kiedy w strachu żyje świat?
    Zaufaj Panu już dziś.
Jak uwierzyć, powiedz mi, 
Kiedy już nie wierzę w nic? 
    Zaufaj Panu już dziś!
Jak mam kochać, powiedz jak, 
Kiedy rani mnie mój brat?
    Zaufaj Panu już dziś!
Jak być dobrym, powiedz mi, 
Kiedy świat jest taki zły?
    Zaufaj Panu już dziś.

Ref.: Zaufaj Panu już dziś!
Zaufaj Panu już dziś!

2.Jak mam walczyć, powiedz jak, 
Kiedy silnej woli brak?...
Jak pokonać własny grzech, 
Kiedy pokus tyle jest?...
Jak się cieszyć, powiedz mi, 
Kiedy płyną gorzkie łzy?...
Jak do ładu z sobą dojść, 
Kiedy siebie mam już dość? ...

3.Jak nie zbłądzić, powiedz mi, 
Kiedy nie wiem dokąd iść... 
Jak nadzieję w sercu mieć, 
Kiedy wszystko wali się? ...`
  },
  {
    number: 221,
    title: "Zbliżam sie w pokorze",
    lyrics: `1. Zbliżam się w pokorze
i niskości swej,
Wielbię Twój majestat,
skryty w Hostii tej,
Tobie dziś w ofierze serce daję swe,
O, utwierdzaj w wierze, Jezu, dzieci Twe.
2. Mylą się, o Boże,
w Tobie wzrok i smak,
Kto się im poddaje, temu wiary brak,
Ja jedynie wierzyć Twej nauce chcę,
Że w postaci chleba utaiłeś się.
3. Bóstwo swe na krzyżu
skryłeś wobec nas,
Tu ukryte z Bóstwem człowieczeństwo wraz,
Lecz w Oboje wierząc,
wiem, że dojdę tam,
Gdzieś przygarnął łotra,
do Twych niebios bram.
4. Jak niewierny Tomasz
twych nie szukam ran,
Lecz wyznaję z wiarą,
żeś mój Bóg i Pan,
Pomóż wierze mojej, Jezu, łaską swą,
Ożyw mą nadzieję, rozpal miłość mą.`
  },
  {
    number: 222,
    title: "Zdrowaś Maryja",
    lyrics: `1. Zdrowaś Maryjo Bogarodzico,
Błagamy Ciebie, święta Dziewico:
Niech łaska Twoja zawsze nam sprzyja,
Módl się za nami, zdrowaś Maryja!
2. Wśród czystych duchów w obliczu Pana
Tyś przenajświętsza, niepokalana
Jak pośród kwiatów wonna lilija,
Jak wśród gwiazd zorza, zdrowaś Maryja!
3. Ty, co karmiłaś świata Zbawienie,
Ty nam jak matka daj pożywienie.
Niech brak żywności nas nie zabija,
Broń nas od głodu, zdrowaś Maryja!
4. Ty, coś płakała nad śmiercią Syna,
Przez twe łzy gorzkie, Matko jedyna,
Oddal śmiertelność, co lud zabija,
Broń nas od moru, Zdrowaś Maryja!
5. Ty, coś płomieni innych nie znała,
Tylko miłością Boską pałała,
Spraw, niechaj pożar dom nasz omija,
Broń nas od ognia, Zdrowaś Maryja!
6. Ty w całym życiu łagodna, cicha,
Daj, niech pokojem kraj nasz oddycha,
Niech duch niezgody nas nie rozbija,
Broń nas od wojny, Zdrowaś Maryja!`
  },
  {
    number: 223,
    title: "Ziemia, którą mi dajesz",
    lyrics: `1.Ziemia, którą mi dajesz
Nie jest fikcją ani bajką
Wolność, którą mam w Tobie jest prawdziwa
Wszystkie góry na drodze 
muszą, muszą ustąpić
Bo wiara góry przenosi, a ja wierze Tobie

Ref. Będę tańczyć przed Twoim Tronem  
I oddam Tobie chwałę i nikt
Już nie zamknie mi ust 
Żaden mur i żadna ściana
Największa nawet tama 
już nie nie zatrzyma mnie już

2.Większy, większy jest we mnie Ten,
Który mnie umacnia
Żaden Goliat nie może z Nim równać się`
  },
  {
    number: 224,
    title: "Zmartwychwstał Pan i żyje dziś",
    lyrics: `Ref:Zmartwychwstał Pan i żyje dziś,
blaskiem jaśnieje noc 
Nie umrę, nie lecz będę żył,
Pan okazał swą moc
Krzyż to jest brama Pana, 
jeśli chcesz przez nią wejdź
Zbliżmy się do ołtarza, 
Bogu oddajmy cześć. 

1. Dzięki składajmy Mu, 
bo wielka jest jego łaska 
Z grobu powstał dziś Pan,
a noc jest pełna blasku
Chcę dziękować Mu 
i chcę Go dziś błogosławić 
Jezus, mój Pan i Bóg,
On przyszedł aby nas zbawić.
2.Lepiej się uciec do Pana niż zaufać książętom
Pan – moja moc i pieśń –
podtrzymał, gdy mnie popchnięto. 
Już nie będę się bać, cóż może zrobić mi śmierć,
Nie, nie lękam się i śpiewam chwały pieśń!
3.Odrzucony Pan, stał się kamieniem węgielnym, 
Pan wysłuchał mnie, On jest zbawieniem mym 
Cudem staje się noc, gdy w dzień jest przemieniona 
Tańczmy dla niego dziś, prawica Pańska wzniesiona!`
  },
  {
    number: 225,
    title: "Zwiastunom z gór",
    lyrics: `Zwiastunom z gór, stopom ich cześć,
Bo niosą nam radosną wieść, tę wieść:
Pokoju dar, wśród życia dróg przychodzi już
Władać Bóg, Królem Bóg, Królem Bóg,
Królem Bóg, Królem Bóg, Królem Bóg.`
  },
{
    number: 226,
    title: "Pewnego dnia Noe",
    lyrics: `1.Pewnego dnia Noe do lasu szedł,
by zebrać wokół siebie wszystkie zwierzęta,
bo rozgniewany Pan Bóg chciał zesłać na świat potop
lecz nie z winy zwierząt więc ocalił je.
Ref. Tu stoją krokodyle i orangutany,
dwa malutkie wężyki i królewski orzeł.
I kot i mysz, i bardzo duży słoń
Dlaczego jeszcze nie ma: dwóch nosorożców?
Laj la la la la la la la /x4
2.Zwierzęta szybko do arki szły,
bo wielka czarna chmura była już na niebie. 
I kropla, po kropli zaczęła padać
lecz nie z winy zwierząt więc ocalił je.
3.Z ulewy tej na ziemi potop był
lecz w arce było dobrze ludziom i zwierzętom. 
I Noe nie myślał już o nosorożcach,
to nie jego wina, że spóźniły się.
4.Z historii tej naukę sobie weź:
nie spóźniaj się, gdy Pan Bóg łaski swoje daje, 
bo spotka cię los dwóch nosorożców,
Arka Bożej łaski odpłynie w dal.`
  }
];