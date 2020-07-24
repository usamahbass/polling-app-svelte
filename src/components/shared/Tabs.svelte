<script>
  import { createEventDispatcher } from "svelte"

  let dispatch = createEventDispatcher()

  export let tabsItems;
  export let tabsActive;
</script>

<div class="tabs">
  <ul>
    {#each tabsItems as tabsItem}
    <li on:click={() => dispatch("tabChange", tabsItem)} >
      <div class:active={tabsItem === tabsActive} >
        {tabsItem}
      </div>
    </li>
    {/each}
  </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }

    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style: none;
    }

    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555555;
        cursor: pointer;
    }

    .active {
      color: #d91b42;
      border-bottom: 2px solid #d91b42;
      padding-bottom: 8px;
  }
</style>
