<template>
  <div class="container">
    <h1>GC Ipsum</h1>
    <div class="ipsum-box" v-html="loremIpsum">
    </div>
    <a href="javascript:history.go(0)">Refresh for more Ipsum</a>
    <p>Created during an agile hackathon using design thinking and co-design.</p>
    <small>Contribute on <a href="https://github.com/secretclearance/gc-ipsum">Github</a></small>
  </div>

</template>

<script>
const loremIpsum = require("lorem-ipsum").loremIpsum;
export default {
  name: 'Main',
  mounted() {
    fetch('/words')
      .then((response) => {
        return response.json();
      })
      .then((words) => {
        this.loremIpsum = loremIpsum({
            words,
            units: "paragraphs",
            count: 4,
            format: "html",
            paragraphLowerBound: 3,
            paragraphUpperBound: 5,
            suffix: "\n\n",
        })
      });

  },
  data: function() {
    return {
      loremIpsum: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ipsum-box {
  background: #fff;
  color: #000;
  padding: 1em;
  margin: 1em;
  border: 3px solid #ddd;
  border-radius: 5px;
}
</style>
