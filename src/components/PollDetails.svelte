<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./shared/Card.svelte";
  export let poll;

  let dispatch = createEventDispatcher()

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor(100 / totalVotes * poll.votesA)
  $: percentB = Math.floor(100 / totalVotes * poll.votesB)

  const handleVote = (options, id) => {
    dispatch("vote", {options, id})
  }

</script>

<Card>
  <div class="poll">
    <h3>{ poll.question }</h3>
    <p>Total votes: { totalVotes }</p>
    <div class="answer" on:click={() => handleVote("a", poll.id)}>
      <div class="percent percent-a" style='width: {percentA}%'></div>
      <span>{ poll.answer_a } ({ poll.votesA } votes)</span>
    </div>
    <div class="answer" on:click={() => handleVote("b", poll.id)}>
      <div class="percent percent-b" style='width: {percentB}%'></div>
      <span>{ poll.answer_b } ({ poll.votesB } votes)</span>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
    color: black;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-a {
    background: rgba(97,218,251, 0.8);
  }

  .percent-b {
    background: rgba(255,62,0, 0.8);
  }
</style>
