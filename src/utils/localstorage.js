/**
* @name localstorage
* @description données persistantes dans le naviguateur

* @author JMS
* @version 1.0
**/

export default {
  save(key, value) {
    // on convertie les données en string avant l'insertion

    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key) {
    const value = localStorage.getItem(key);
    if (value != null) {
      // reconvertir le string json en valeur javascript
      return JSON.parse(value);
    }

    return null;
  },
  delete() {},
};
