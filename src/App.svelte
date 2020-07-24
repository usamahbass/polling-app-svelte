<script>
  import Header from "./components/Header.svelte"
  import Footer from "./components/Footer.svelte"
  import Tabs from "./components/shared/Tabs.svelte"
  import PollForm from "./components/PollForm.svelte"
  import PollList from "./components/PollList.svelte"

  let tabsItems = ["Current Poll", "Add New Poll"];
  let tabsActive = "Current Poll";

  const tabChange = (e) => tabsActive = e.detail

  let polls = [
    {
      id: 1,
      question: 'React or Svelte ?',
      answer_a: 'React',
      answer_b: 'Svelte',
      votesA: 7,
      votesB: 14,
    },
  ]

  const addPoll = (e) => {
    const pool = e.detail
    polls = [pool, ...polls]
    tabsActive = "Current Poll"
  }

  const handleVote = (e) => {
    const {id, options} = e.detail

    let copyPoll = [...polls]
    let upvotedPoll = polls.find((poll) => poll.id == id)

    if(options == "a") {
      upvotedPoll.votesA++;
    }
    if(options == "b") {
      upvotedPoll.votesB++;
    }

    polls = copyPoll;

  }

</script>

<Header/>

<main>
 <Tabs {tabsItems} {tabsActive} on:tabChange={tabChange} />
 {#if tabsActive === "Current Poll"}
	<PollList {polls} on:vote={handleVote} />
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
