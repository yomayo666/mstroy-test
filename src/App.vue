<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import { TreeStore, TreeNode } from './components/TreeStore';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  created() {
    // Your code to use TreeStore here
    const items: TreeNode[] = [
      { id: 1, parent: 'root' },
      { id: 2, parent: 1, type: 'test' },
      { id: 3, parent: 1, type: 'test' },
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null },
    ];

    const ts = new TreeStore(items);

    console.log(ts.getAll());
    console.log(ts.getItem(7));
    console.log(ts.getChildren(4));
    console.log(ts.getChildren(5));
    console.log(ts.getChildren(2));
    console.log(ts.getAllChildren(2));
    console.log(ts.getAllParents(7));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
