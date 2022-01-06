import React from 'react';
import { Link } from 'react-router-dom';
import image from './architectureImage.jpg'

export default () => {
  return (
    <div>
    <div>
      <img src={image} alt="image" width="800" height="500" />
    </div>
    <p>
    Opracowana usluga sklada sie z 6 mikrouslug:
    </p>
    <ul>
     <li>Aplikacji React- odpowiedzialnej za przyjmowanie rzadan od uzytkownika oraz prezentacji ich wynikow z bazy Postgresql oraz Redis</li>
     <li>Servera Express - udostepniajacego wartosci wspolczynnikow z bazy danych
     Postgresql</li>
     <li>Bazy danych postgresql przechowujacej wartosci wspolczynnikow wyslanych przez uzytkownika</li>
     <li>Serwera Redis przechowujacego wartosci wyliczone na podstawie wspolczynnikow podanych przez uzytkownika</li>
     <li>Workera, ktory sledzi wprowadzenie nowej wartosci wspolczynnika ciagu, oblicza dla niej wartosc oraz przekazuje do bazy Redis</li>
     <li>Serwera Nginx, ktory pozwala na odpowiednie przekierowanie zapytania w zaleznosci czy odwoluje sie do postgresql czy redis</li>
    </ul>
    <br />
    <p>W niniejszej usludze zmieniono wersje obrazow bazowych dockerfileow z latest na inne w celu zachowania stabilnoci uslugi, w przeciwnym wypadku
    przy kazdym uruchomieniu uslugi zostalyby uzyte wersje obrazow bazowych aktualne w momencie uruchomienia, a wiec nie zawsze te same, co mogloby spowodowac
    bledy nieprzewidziane a takze trudne do wykrycia ze wzgledu na brak jawnej informacji o stosowanej wersji obrazow:
    </p>
    <ul>
	<li>node:14.14.0-alpine</li>
	<li>redis:6.2</li>
	<li>postgres:14.0</li>
    </ul>
    <br />
    Dodatkowo w mikrousludze clienta ustawiono aktualizacje obliczonych wartosci ciagu fibonacciego przy kazdym rzadaniu wysylanym do bazy danych
    </div>
  );
};
