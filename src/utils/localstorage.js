/**
 * @name localstorage
 * @description Données persistante dans le navigateur
 * @author CDS
 * @version 1.0
 **/

export default {
  save(key, value) {
    //On converti les données en string avant l'insertion
    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key) {
    const value = localStorage.getItem(key);
    if (value != null) {
      //Reconvertir le string JSON en valeurs Javascript
      return JSON.parse(value);
    }

    return null;
  },
  delete() {},
};
