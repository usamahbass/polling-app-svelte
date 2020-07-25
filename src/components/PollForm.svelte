<script>
  import { createEventDispatcher } from "svelte";
  import PollStores from "./stores/PollStores.js";
  import Button from "./Button.svelte";

  let dispatch = createEventDispatcher();

  let fields = {
    question: "",
    answer_a: "",
    answer_b: "",
  };

  let errors = {
    question: "",
    answer_a: "",
    answer_b: "",
  };

  let valid = false;

  const submitPoll = () => {
    valid = true;

    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "questions must be at least 5 chars long";
    } else {
      errors.question = "";
    }

    if (fields.answer_a.trim().length < 1) {
      valid = false;
      errors.answer_a = "answer a must be at least 1 chars long";
    } else {
      errors.answer_a = "";
    }

    if (fields.answer_b.trim().length < 1) {
      valid = false;
      errors.answer_b = "answer b must be at least 1 chars long";
    } else {
      errors.answer_b = "";
    }

    if (valid) {
      let pool = {
        ...fields,
        id: Math.random(),
        votesA: 0,
        votesB: 0,
      };
      PollStores.update((currentPoll) => {
        return [pool, ...currentPoll];
      });
      dispatch("addPoll");
    }
  };
</script>

<form on:submit|preventDefault="{submitPoll}">
  <div class="form-field">
    <label for="question">Poll Question: </label>
    <input type="text" id="question" bind:value="{fields.question}" />
    <div class="errors">{errors.question}</div>
  </div>

  <div class="form-field">
    <label for="answer-a">Answer A: </label>
    <input type="text" id="answer-a" bind:value="{fields.answer_a}" />
    <div class="errors">{errors.answer_a}</div>
  </div>

  <div class="form-field">
    <label for="answer-b">Answer B: </label>
    <input type="text" id="answer-b" bind:value="{fields.answer_b}" />
    <div class="errors">{errors.answer_b}</div>
  </div>

  <Button type="primary">Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }

  button {
    cursor: pointer;
  }

  .errors {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
