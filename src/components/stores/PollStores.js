import { writable } from "svelte/store";

const PollStores = writable([
  {
    id: 1,
    question: "React or Svelte ?",
    answer_a: "React",
    answer_b: "Svelte",
    votesA: 7,
    votesB: 14,
  },
]);

export default PollStores;
