import { countries } from "../services/countriesService.js";
import { createCardsList } from "../services/domService.js";
import { likedCountries } from "../services/storageService.js";

createCardsList(countries);


