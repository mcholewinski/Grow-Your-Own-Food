# Projekt

<p align="center">
  <img src="https://i.imgur.com/p3V2HrF.jpg" alt="Logo"/>
</p>


## Przydatne kursy: [Kursy.md](Kursy.md)


## Instrukcja:
<details>
<summary>Kliknij aby rozwinąć</summary>
	
### 1. Rzeczy potrzebne do tworzenia/edycji projektu:
- **[Git SCM](https://git-scm.com/downloads)**
- **[Visual Studio Code](https://code.visualstudio.com/)**
- **[Android Studio](https://developer.android.com/studio "Android Studio")**
	- Zainstalowane Android 10.0 SDK
	- Utworzone AVD (wirtualne urządzenie) z zainstalowanym Androidem 10.0
- **[Node.js LTS](https://nodejs.org/en/)** (przy instalacji zaznaczyć checkbox do zainstalowania dodatkowych narzędzi)
- **Expo CLI:** w terminalu wpisać komendę `npm install -g expo-cli`
- **Do podglądu aplikacji w telefonie (Android lub iOS):** https://expo.io/tools#client

### 2. Pierwsze pobranie i instalacja
- **Zainstalować i skonfigurować Git** (Poradnik: [YouTube](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)) 
- **Uruchomić terminal w miejscu do którego chcemy pobrać Projekt i wpisać komendę:**
`git clone https://github.com/mcholewinski/Projekt.git`
- **Otworzyć terminal w folderze z projektem i wpisać komendę:** `npm install`
- **Aby uruchomić aplikację w terminalu wpisać komendę:** `expo start`

### 3. Edycja kodu
**I. Pobrać aktualną wersje projektu. W folderze z projektem w terminalu wpisac:** 
`git pull`

**II.** Aby dowolnie edytować projekt i dodawać do niego nowe rzeczy bez obawy o zepsucie tego co już istnieje, każdy powinen zrobić swój własny **branch**, w którym będzie pracował nad nowymi rzeczami. Aby to zrobić należy:

**1. Włączyć terminal w folderze z projektem i wpisać komendę:**
`git branch nazwaBrancha`
Utworzy to nowy branch o nazwie którą podamy.

**2. Przenieść się do utworzonego brancha za pomocą komendy:**
`git checkout nazwaBrancha`

**3. Sprawdzić czy jesteśmy teraz na odpowiednim branchu komendą:**
`git branch -a`
Branch na którym aktualnie jesteśmy będzie oznaczony gwiazdką.

**III.** Po edycji projektu zmienione pliki trzeba dodać komendą `git add .`, zrobić commit komendą `git commit -m "wiadomosc co zmieniono"` a na koniec wysłać na github komendą `git push`.
Wiadomości o zmianach powinny mieć format "add/remove/update/itp. nazwaPliku"
</details>


## Wstępna funkcjonalność aplikacji
**I.**
  **1.**  Pierwsze uruchomienie aplikacji : Widok, z krótkim opisem celu aplikacji, przywitanie się z użytkownikiem 

  **2.**  Widok “Moje rośliny” - Jeśli użytkownik nie dodał jeszcze żadnych roślin, aplikacja zachęci do ich wybrania, jeśli użytkownik posiada już jakieś rośliny pkt. 5. 


  **3.** "Sklep"
- Dostępne będą 2 lub 3 pakiety startowe.
- Możliwe będzie filtrowanie roślin w zależności od tego gdzie się mieszka (dom/mieszkanie z balkonem/mieszkanie bez balkonu).
- Rośliny będą wyświetlać się wg pory roku.
- Po naciśnięciu w każdą roślinę pojawi się widok z jej opisem. 
- Kalkulator na dole będzie szacował ile około wyniesie uprawa wybranych roślin (wliczając w to ziemię, zakup nasion/sadzonek, doniczek) oraz ile miejsca będzie potrzebne. 

  **4.** Po personalizacji podsumowanie wybranych roślin, możliwa integracja z allegro lub w późniejszym etapie z jakimś sklepem.

  **5.** Widok “Moje rośliny” już po zasadzeniu roślin.
- Możliwość rzucenia wyzwania znajomemu, przekierowanie do wysłania wiadomości (messenger, SMS itp..) 
- Po naciśnięciu w konkretną roślinę pojawi się widok z opisem, zaleceniami itp. Będzie się on zmienił zależnie od etapu (1 etap - zakup (polecane doniczki) , 2 - wysiewanie (instrukcja) , 3 - pielęgnacja (instrukcja)

**II. Powiadomienia:**
- Przypomnienie o podlewaniu 
- Rzuć wyzwanie 
- Rozpoczął się czas wysiewu x…
- Czas wysiewu x.. zaraz się skończy!
- Przesadzanie 
- Zbiory 

## Baza roślin info
https://docs.google.com/spreadsheets/d/1zZa1Zu7A82l9g2SF-jlQhhqfuzLAzabkVMhRmIC4EIo/edit?usp=sharing

