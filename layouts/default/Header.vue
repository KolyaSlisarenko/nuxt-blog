<template>
  <header>
    <div class="header-logo">
      <p><b>SLI.M</b></p>
    </div>
    <div
      class="header-actions"
      style="width: 60%; justify-content: center;"
    >
      <button class="explore-button">
        <span>Explore</span> <i class="arrow down ml-1em" />
      </button>
      <input
        type="text"
        class="input input-search"
        list="programmingLanguages"
        placeholder="Search for anything"
        style="width: 100%"
      >
      <button>search</button>
      <datalist id="programmingLanguages">
        <option value="Objective C">
          Objective C
        </option>
        <option value="C++">
          C++
        </option>
      </datalist>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  box-shadow: 0 0.1em 0.5em 0 rgb(0 0 0 / 20%);
  padding: 0 1em 0 1em
}

.header-logo {
  margin: 0 1em 0 1em;
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
