<template>
  <div class="card">
    <div class="img">
      <!-- <img src="https://bit.ly/3c6hiY2" alt="Card image" /> -->
    </div>
    <div class="card-text">
      <div class="title-total">
        <div class="title">Profile</div>
        <h2>Phitchaphatch Yutthavithee</h2>
        <div class="desc">
          Nickname: Cherry <br />
          Student ID: 61160187 <br />
          Studying: Software Engineering, Facalty of Informatics, <br />
          &emsp;&emsp;&emsp;&emsp;Burapha University <br />
          Skill: C, C++, HTML, CSS, SQL, JavaScript, and Php <br />
          Soft skill: Teamworking, Positive Thinking, Adaptability, <br />
          &emsp;&emsp;&emsp;&emsp;Creativity, and Self-learning
        </div>
        <router-link :to="{ path: 'contact' }">
          <button class="btn btn-outline-info">Contact</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bs-example {
  margin: 20px;
  justify-content: center;
}

body {
  font-family: "Garamond", Garamond;
  /* margin: 0px;
    padding: 0px;
    color: white;
    overflow: hidden;
    background-color: black; */
}

.card {
  padding: 3vh 3vh 3vh 3vh;
  border: 2px solid rgb(218, 218, 218);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 18px;
  flex-direction: row;
  text-align: left;
  max-width: 500px;
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

img {
  margin: percentage;
  cursor: zoom-in;
  background-color: hsl(0, 0%, 90%);
  transition: background-color 300ms;
  width: 350px;
  height: 350px;
  border-radius: 25px 25px 25px 25px;
}

h3 {
  font-family: Garamond;
  font-size: 25px;
  text-align: center;
}

p {
  line-height: 1.5;
}
</style>