<template>
  <header>
    <div class="header-logo">
      <nuxt-link
        :to="{ name: 'index' }"
      >
        <p><b>SLI.M</b></p>
      </nuxt-link>
    </div>
    <div
      class="header-actions"
      style="width: 50%; justify-content: center;"
    >
      <input
        v-model="query"
        type="text"
        class="input input-search"
        list="programmingLanguages"
        placeholder="Search for anything"
        style="width: 100%"
        @keyup.enter="onSearchEnter"
      >
      <button @click="onSearchEnter">
        search
      </button>
    </div>
  </header>
</template>

<script>
import search from '~/components/search/mixin/search';

export default {
  /**
   * Name
   */
  name: 'Header',

  /**
   * Mixins
   */
  mixins: [
    search
  ]
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  box-shadow: 0 0.1em 0.5em 0 rgb(0 0 0 / 20%);
  padding: 0 1em 0 1em
}

.header-logo {
  margin: 0 1em 0 1em;

  a {
    text-decoration: none;
    color: #000000;
  }
}

.header-actions {
  display: flex;
}

input {
  min-height: 2em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
}

.input-search {
  margin: 0 1em 0 5em;
  transition: 0.2s ease;
}

input:focus {
  border: 1px solid rgba(0, 0, 0, 0.5);
}

button {
  min-height: 2em;
  padding: 0.5em;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  background: rgba(0, 0, 0, 0.1);
}

datalist {
  width: 100%;
}

.explore-button {
  display: flex;
  align-items: center;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.down {
  transform: rotate(45deg);
}

.ml-1em {
  margin-left: 1em;
}
</style>
