# Změny

## 1.6.2026

- Přidání odkazů na programy a semestry v detailních zobrazeních (`MediumContent.jsx`, `SubjectSubPage.jsx`)
  - Program ID je nyní klikatelný odkaz na `/program/ProgramGQLModel/{id}`
  - Semester ID je nyní klikatelný odkaz na `/semestr/SemesterGQLModel/{id}`

## 26.5.2026

- Implementace řazení tabulky (`Table.jsx`)
  - Nová komponenta `SortableTableHeader` pro zobrazení záhlaví s řazením
  - Komponenta `SortButton` pro přepínání mezi vzestupným/sestupným řazením
  - Podpora řazení podle: názvu, anglického názvu, programu, počtu semestrů, data změny
  - Třífázové řazení: žádné → vzestupně → sestupně → žádné
  - Funkce `getSortValue` a `compareValues` pro správné řazení textů i čísel

- Generování názvů semestrů (`SemestersManager.jsx`, `SubjectSubPage.jsx`)
  - Funkce `getSemesterName(order)` - generuje název podle pořadí
  - Lichá čísla = zimní semestr, sudá = letní semestr
  - Formát: "X. ročník zimní/letní" (např. "1. ročník zimní", "2. ročník letní")

- Rozšíření správy semestrů a CRUD operací (`EditMode.jsx`, `SemestersManager.jsx`, `Create.jsx`, `Delete.jsx`)
  - **Potvrzovací popup před smazáním semestru** s varováním o závislostech (foreign key)
  - **Rollback při selhání** - semestr se obnoví v UI, pokud smazání selže (obsahuje klasifikace)
  - **Podpora semestrů při vytváření Subjectu** - semestry se automaticky vytvoří po vytvoření předmětu
  - **Validace programu** v create dialogu - vyžaduje výběr programu před uložením
  - **Kaskádové mazání** - při smazání Subjectu se nejdřív smažou všechny semestry
  - Přidání názvu programu do seznamu (nové pole `name` v GraphQL fragmentu)
  - Vlastní `Table` komponenta pro Subject se sloupci: název, anglický název, program, počet semestrů, nástroje

## 20.5.2026

- Nová komponenta `EditMode` pro univerzální editaci entity Subject (`EditMode.jsx`)
  - Přepínač mezi automatickým (live) a manuálním (confirm) ukládáním
  - Podpora správy semestrů s debounce auto-save (600ms)
  - Sledování změn semestrů (přidání, odebrání, změna pořadí)
  - Automatické ukládání změn na server v live režimu
  - Tlačítka "Uložit změny" a "Zrušit změny" v confirm režimu
  - Indikátor ukládání a zobrazení chyb

- Změna přidávání semestrů (`SemestersManager.jsx`)
  - Místo výběru z existujících se vytváří nový semestr s generovaným UUID
  - Nové semestry mají flag `_action: 'create'` pro rozlišení od existujících
  - Zjednodušení UI - pouze tlačítko "Přidat nový semestr"

- Aktualizace `useEditAction` hooku (`useEditAction.js`)
  - Rozšířená podpora pro přepínání auto-save režimu
  - Nové vlastnosti: `autoSaveEnabled`, `toggleAutoSave`, `effectiveMode`

## 11.5.2026

- Přidání správy semestrů předmětu (SemestersManager) - nová funkcionalita pro:
  - Přidávání existujících semestrů k předmětu z dropdownu
  - Odebírání semestrů z předmětu (bez smazání semestru)
  - Změna pořadí semestrů pomocí tlačítek nahoru/dolů
  - Nové semestry se přidávají na konec (nejvyšší order + 1)
- Nové soubory v `packages/subjects/src/SubjectGQLModel/`:
  - `Components/SemestersManager.jsx` - UI komponenta pro správu semestrů
  - `Queries/SemesterUpdateAsyncAction.jsx` - GraphQL mutace pro aktualizaci semestru
  - `Queries/SemesterInsertAsyncAction.jsx` - GraphQL mutace pro vytvoření semestru
  - `Queries/SemesterDeleteAsyncAction.jsx` - GraphQL mutace pro smazání semestru
- Upravené soubory:
  - `Components/SubjectEditForm.jsx` - přidána logika pro ukládání změn semestrů
  - `Components/MediumEditableContent.jsx` - integrace SemestersManager komponenty
  - `Components/index.js` - export SemestersManager
  - `Queries/index.js` - exporty nových GraphQL akcí
- Architektura: draft/commit pattern - změny se neukládají okamžitě, ale až po kliknutí na "Uložit"

## 7.5.2026

- Přidání CardCapsule pro sekci Semestry v SubjectSubPage (`SubjectSubPage.jsx`)

## 6.5.2026

- Refaktoring SubjectEditForm pro použití useEditAction s explicitním uložením (`SubjectEditForm.jsx`, `ConfirmEdit.jsx`, `LiveEdit.jsx`, `MediumEditableContent.jsx`)
- Přidání komponenty ProgramSelect pro výběr programu (`ProgramSelect.jsx`)
- Přidání ProgramPageAsyncAction dotazu (`ProgramPageAsyncAction.jsx`)
- Úpravy v Delete a Insert async akcích (`DeleteAsyncAction.jsx`, `InsertAsyncAction.jsx`)
- Úpravy InteractiveMutations (`InteractiveMutations.jsx`)

## 5.5.2026

- Rozšíření SubjectEditForm o podporu polí pro popis (`SubjectEditForm.jsx`)
- Aktualizace InteractiveMutations pro reload při aktualizaci dialogu (`InteractiveMutations.jsx`)

## 28.4.2026

- Aktualizace submodulu _uois
- Úprava editačních polí (`MediumEditableContent.jsx`, `UpdateAsyncAction.jsx`)

## 20.4.2026

- Aktualizace stránky start (`MediumEditableContent.jsx`, `Update.jsx`, `UpdateAsyncAction.jsx`)

## 14.4.2026

- Aktualizace verze do budoucnosti (`package.json`)
- Změna package pro publish (`package.json`, `package-lock.json`)
- Merge s vzdálenou větví monorepo

## 13.4.2026

- Skrytí prázdného atributu name u medium content (`MediumContent.jsx`)
- Změna GraphQL fragmentu a úprava sloupců v SubjectSubPage (`SubjectSubPage.jsx`, `Fragments.jsx`)

## 10.4.2026

- Přidání SubjectSubPage komponenty
- Testování RBACobject a editace atributů (`MediumContent.jsx`, `PageReadItem.jsx`, `SubjectSubPage.jsx`)
- Změna šablony z hodiny na data, která používáme v projektu (`MediumContent.jsx`, `Scalars/index.js`, `Vectors/index.js`)
- Aktualizace README

## 7.4.2026

- Začátek práce na atributech v MediumContent komponenty
- Přidání submodulu `_uois`
- Merge s vzdálenou větví monorepo

## 1.4.2026

- Nastavení projektu subjects - vytvoření kompletní struktury:
  - Komponenty: CardCapsule, Children, ConfirmEdit, Filter, LargeCard, Link, LiveEdit, MediumCard, MediumContent, MediumEditableContent, Table
  - Mutace: Create, Delete, Update, InteractiveMutations
  - Stránky: PageBase, PageCreateItem, PageDeleteItem, PageNavbar, PageReadItem, PageReadItemEx, PageUpdateItem, PageVector, RouterSegment
  - Queries: DeleteAsyncAction, Fragments, InsertAsyncAction, ReadAsyncAction, ReadPageAsyncAction, SearchAsyncAction, UpdateAsyncAction
  - Scalars a Vectors atributy
- Vytvoření nové aplikace app_subjects s konfigurací (App, AppNavbar, AppRouter, Vite config)
- Merge s upstream

# URI Fragement:
```angular2html
/subject
```

# Jak spustit projekt app
```cmd
npm run dev -w @velkayolanda/app_subjects    
```

# Jak sestavit projekt app
```cmd
npm run build -w @velkayolanda/app_subjects
```