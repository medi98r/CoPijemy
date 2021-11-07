# **SpecyFikacja Wymagań**

**dla „Co Pijemy?**

Wersja 0.1

Autorzy: Bartosz Medoń, Dominik Radwan, Piotr Zaremba

**Spis treści**

[1.Wprowadzenie 2](#_Toc9557035)

[1.1.Opis systemu 2](#_Toc9557036)

[1.2.Słownik pojęć 2](#_Toc9557037)

[2.Model procesów biznesowych 3](#_Toc9557038)

[2.1.Obiekty biznesowe 3](#_Toc9557039)

[3.Wymagania funkcjonalne 5](#_Toc9557041)

[4.Wymagania niefunkcjonalne 7](#_Toc9557042)

1.
#### Wprowadzenie

  1.
##### Opis systemu

_Celem jest utworzenie aplikacji webowej, która pozwala na szybkie znalezienie przepisów na drinki w zależności od składników i preferencji użytkownika._

_Słownik pojęć_

- _ **Platforma** – strona internetowa posiadająca opisaną funkcjonalność._
- _ **Użytkownik** – mowa o użytkowniku który będzie używał platformy._
- _ **Katalog –** zbiór przepisów użytkownika_
- _ **Przepis –** przepis wyszukiwany ze względu na wybrany filtr._

1.
#### Model procesów biznesowych

  1.
##### Obiekty biznesowe

| Nazwa: | **Katalog** |
| --- | --- |
| Opis: | Miejsce, w którym użytkownik może zapisywać swoje ulubione przepisy. |

| Nazwa: | **Przepis** |
| --- | --- |
| Opis: | Cały zbiór różnych przepisów, na bieżąco aktualizowanych. Przepisy wyświetlają się użytkownikowi, który wybrał odpowiednie dla siebie filtry. |

1.
#### Wymagania funkcjonalne

| ID: | **Identyfikator wymagania** |
| --- | --- |
| Nazwa: | **Tworzenie konta** |
| Priorytet: | WYSOKI |
| Rola: | WSZYSCY |
| Opis: | Aplikacja oferuje tworzenie konta, poprzez dostarczone dane przez użytkownika, które podlegają weryfikacji przez system. |

| ID: | **Identyfikator wymagania** |
| --- | --- |
| Nazwa: | **Logowanie użytkownika** |
| Priorytet: | WYSOKI |
| Rola: | WSZYSCY |
| Opis: | Użytkownik za pomocą dostarczonych danych uwierzytelniających, ma możliwość zalogowania się do aplikacji. |

| ID: | **Identyfikator wymagania** |
| --- | --- |
| Nazwa: | **Filtry** |
| Priorytet: | WYSOKI |
| Rola: | WSZYSCY |
| Opis: | Użytkownik ma możliwość szukania przepisów za pomocą rozbudowanych filtrów (rodzaj alkoholu, smak, rodzaj napoju). |

| ID: | **Identyfikator wymagania** |
| --- | --- |
| Nazwa: | **Zapisywanie przepisów w katalogu** |
| Priorytet: | WYSOKI |
| Rola: | WSZYSCY |
| Opis: | Użytkownik może zapisywać swoje ulubione przepisy. |

| ID: | **Identyfikator wymagania** |
| --- | --- |
| Nazwa: | **Możliwość reakcji na treści** |
| Priorytet: | ŚREDNI |
| Rola: | WSZYSCY |
| Opis: | Do wpisu można dodać komentarze, lub też polubienia. Autor wpisu ma możliwość udostępniania go innym użytkownikom |

| ID: | **Identyfikator wymagania** |
| --- | --- |
| Nazwa: | **Licznik promili** |
| Priorytet: | ŚREDNI |
| Rola: | UŻYTKOWNICY PREMIUM |
| Opis: | Użytkownik po wpisaniu swoich danych (waga, wiek, wzrost itd.) może otrzymać przybliżoną zawartość alkoholu we krwi po spożyciu danej ilości danego koktajlu. |

| ID: | **Identyfikator wymagania** |
| --- | --- |
| Nazwa: | **Porady „dzień po&quot;** |
| Priorytet: | ŚREDNI |
| Rola: | UŻYTKOWNICY PREMIUM |
| Opis: | Użytkownik dostaje powiadomienia dotyczące poprawy swojego samopoczucia, na 12h po potwierdzeniu wykonania ostatniego przepisu. |

| ID: | **Identyfikator wymagania** |
| --- | --- |
| Nazwa: | **WERSJA PREMIUM** |
| Priorytet: | WYSOKI |
| Rola: | WSZYSCY |
| Opis: | Użytkownik ma możliwość zakupu wersji premium systemu, która likwiduje reklamy oraz daje dostęp do wielu dodatkowych treści. |

1.
#### Wymagania niefunkcjonalne

| ID: |
 |
| --- | --- |
| Nazwa: | **Wielojęzyczność systemu** |
| Priorytet: | WYSOKI |
| Opis: | System ma być dostępny w co najmniej 3 językach i dostarczać możliwość dodania kolejnych w prosty sposób. |

| ID: |
 |
| --- | --- |
| Nazwa: | **Integralność danych** |
| Priorytet: | WYSOKI |
| Opis: | Zabezpieczenie przed nieautoryzowaną zmianą danych przez użycie szyfrowania haseł oraz implementacja szyfrowanego połączenia https. |

| ID: |
 |
| --- | --- |
| Nazwa: | **Łatwość użycia** |
| Priorytet: | ŚREDNI |
| Opis: | Platforma ma być przyjazna dla użytkownika. Interfejs musi być nowoczesny i przejrzysty. |

| ID: |
 |
| --- | --- |
| Nazwa: | **Szybkość działania** |
| Priorytet: | ŚREDNI |
| Opis: | Platforma powinna szybko ładować przepisy. |

####


####