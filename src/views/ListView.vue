
<template>
  <main>
    <h2>Liste des tâches</h2>
    <div class="list-container">
      <h3 class="text-center">Tâches complétées : {{completedTasks}} / {{list.length}}</h3>
      <TextInput @newValue="addItem" />
      <ul class="list-items">
        <li @dblclick="deleteItem(index)" @click="updateItemStatus(item)" :class="{'done':item.done}"
          v-for="(item, index) in list" class="list-item">{{item.title}}</li>
      </ul>
      <h3 class="text-center" v-if="list.length == 0">Aucun élément dans la liste</h3>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import TextInput from '../components/TextInput.vue';
import storage from "@/utils/localstorage.js";

const completedTasks = computed(() => {

  let total = 0;

  list.value.forEach((task) => {

    if (task.done) {
      total++;
    };

  })

  return total;

});

//On utilise la valeur sauvgardée comme valeur initiale, si elle est nul on utilise un tableau vide
const list = ref(storage.load("tasks") || []);

function deleteItem(index) {
  //effacer un élément d'un tableau (splice)
  list.value.splice(index, 1);

  //sauvegarder
  storage.save("tasks", list.value);
}

function updateItemStatus(item) {
  item.done = !item.done;

  //Sauvegarder
  storage.save("tasks", list.value)
}

function addItem(item) {
  //créer un objet pour la nouvele page
  const tache = { title: item, done: false }
  list.value.push(tache);

  //Sauvegarder
  storage.save("tasks", list.value)
}


</script>

<style scoped lang='scss'>
.list-container {
  border: 2px solid var(--text-color);
  max-width: 500px;
  min-width: 250px;
  margin: 0 auto;
  padding: 0.5em;

  .list-items {
    list-style: none;
    padding: 0;


    .list-item {
      cursor: pointer;
      padding: 0.2em;
      transition: all .2s ease;
      user-select: none;

      &:nth-child(even) {
        background-color: var(--bg-color);
      }

      &:hover {
        padding-left: 1em;
        background-color: var(--text-color);
        color: var(--bg-color);
      }

      &.done {
        position: relative;

        &::after {
          position: absolute;
          content: '\2713';
          right: 1em;
        }

      }
    }

  }
}
</style>
