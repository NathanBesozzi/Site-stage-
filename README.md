# StageScope 04-13

Premier jet d'un site de mise en relation pour stages d'observation, centre sur les Alpes-de-Haute-Provence (04) et les Bouches-du-Rhone (13).

## Ce que contient le prototype

- Carte interactive type plan sur les departements 04 et 13, avec zoom/dezoom, glisser-deplacer, communes/villages places par latitude/longitude, affichage progressif des labels selon la taille des communes, routes principales et secondaires, ilots de maisons non nommes, littoral et entreprises positionnees geographiquement.
- Recherche par ville sous forme d'annuaire: toutes les entreprises referencees de la ville apparaissent sur la carte, meme sans offre de stage d'observation active.
- Profils etudiants avec presentation, secteurs recherches, disponibilites et mobilite.
- Profils entreprises avec secteur, ville, description et position sur la carte.
- Creation de plusieurs profils etudiants ou entreprises, avec selection du profil actif.
- Publication d'offres de stages d'observation avec tuteurs, postes, programme, periode, duree et places.
- Candidatures et suivi des statuts cote entreprise.
- Persistance locale via `localStorage`, sans backend pour ce premier jet.

## Donnees

Les entreprises integrees dans ce prototype sont des donnees fictives de demonstration. Les routes secondaires et maisons sont une representation visuelle de carte, pas un cadastre exhaustif. Pour integrer des entreprises, routes ou batiments reels de facon exhaustive, il faudra brancher des sources autorisees comme la base SIRENE/data.gouv.fr et des donnees geographiques ouvertes, puis respecter les obligations RGPD et les statuts de diffusion.

## Parcours principaux

1. Un etudiant cree son profil, renseigne ses secteurs et candidate a une offre depuis la carte.
2. Une entreprise cree son profil, publie une offre et precise les tuteurs de stage.
3. Une entreprise consulte les candidatures recues et met a jour leur statut: nouvelle, preselection, selection ou refus.
4. Les filtres de la carte permettent d'isoler les offres par secteur, ville, periode ou modalite.

## Lancer

Ouvrir `index.html` dans un navigateur moderne.

Le prototype est autonome: aucune installation de dependances n'est requise.
