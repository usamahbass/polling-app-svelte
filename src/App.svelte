<script>
  import Header from "./components/Header.svelte"
  import Footer from "./components/Footer.svelte"
  import Tabs from "./components/shared/Tabs.svelte"
  import PollForm from "./components/PollForm.svelte"
  import PollList from "./components/PollList.svelte"

  let tabsItems = ["Current Poll", "Add New Poll"];
  let tabsActive = "Current Poll";


  const tabChange = (e) => tabsActive = e.detail

  const addPoll = () => {
    tabsActive = "Current Poll"
  }

</script>

<Header/>

<main>
 <Tabs {tabsItems} {tabsActive} on:tabChange={tabChange} />
 {#if tabsActive === "Current Poll"}
	<PollList  />
 {:else if tabsActive === "Add New Poll"}
	<PollForm on:addPoll={addPoll} />
 {/if}
</main>

<Footer/>



<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
