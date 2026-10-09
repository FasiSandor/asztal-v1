# ASZTAL V1

**Különálló új alkalmazás.** A régi `FasiSandor/asztal-konyvjelzo` repót és annak Vercel/Neon környezetét nem módosítja.

## Alap
Claude `ASZTAL_atadas.zip` csomagjának **Üveg** stílus- és funkcióspecifikációja alapján készült önálló, adaptált kezdőverzió. Nem a Claude 76 KB-os eredeti alkalmazásfájljának szó szerinti másolata.

## Funkciók
Reszponzív iPhone/iPad/Mac felület, sötét-világos mód, témakörkártyák, globális keresés, kedvencek, eszköz-hozzárendelés, Safari HTML/ZIP-import, duplikátumjelzés, JSON backup/import, kézi link hozzáadás/szerkesztés. Az adatok egyelőre **csak a böngészőben** vannak.

## Telepítés
Vercel → Import Git Repository → `FasiSandor/asztal-v1` → Framework: Other → Deploy. Build command nem szükséges; output directory: `.`.

## Kritikus adatbiztonság
Az első verzióhoz **NINCS** éles felhőszinkron vagy Auth. A régi 651 könyvjelzőt nem éri el automatikusan és nem módosítja. Átadás előtt a JSON exportot meg kell őrizni. Később külön Neon projekt és ellenőrzött, felhasználó által jóváhagyott adatimport javasolt.
