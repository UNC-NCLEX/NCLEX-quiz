<template>
  <div class="container">
    <div id="rationale">
      <div>
        <p><b>Correct!</b></p>
        <p>
          <b>Rationale: </b> Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
      </div>
      <div id="button">
        <n-button size="large">Continue</n-button>
      </div>
    </div>
  </div>
</template>

<script>
import { NButton } from "naive-ui";

export default {
  name: "RationalePopup",
  components: {
    NButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*****CONTAINER*****/
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

/*****BODY*****/
#rationale {
  border: 1px #808080 solid;
  padding: 35px;
  margin: 35px 0;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #cac9c9;
  width: 50%;
}

/*****BUTTONS*****/
#button {
  text-align: right;
}

.n-button {
  background-color: #ffc633;
  box-shadow: 10px 10px 5px #cac9c9;
  margin: 25px 0 10px 0;
}
</style>
