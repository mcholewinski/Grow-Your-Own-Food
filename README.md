# Projekt

<p align="center">
  <img src="https://i.imgur.com/p3V2HrF.jpg" alt="Logo"/>
</p>

## Przydatne kursy: [Kursy.md](Kursy.md)


## Instrukcja:
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

