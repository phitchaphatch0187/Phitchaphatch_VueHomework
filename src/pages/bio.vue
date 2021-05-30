<template>
  <div class="card">
    <!-- <div class="img">
      <img src="https://bit.ly/3c6hiY2" alt="Card image" />
    </div> -->
    <div class="card-text">
      <div class="title-total">
        <div class="title">Contact</div>
        <p>
          Phone: 09-0550-1907 <br />
          E-mail: 61160187@go.buu.ac.th <br />
          Facebook: Cherry Phitchaphatch <br />
          Line: chfrx <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bio",
};
</script>

<style>
.card {
  font-family: "Garamond", Garamond;
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
</style>