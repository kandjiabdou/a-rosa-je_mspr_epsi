<template>


  <div class="bot">

    <div class="contenue">

      <h1>{{$t("titre_apropos")}}</h1>
      <p>{{$t("Apropos de nous")}}</p>

    </div>
  </div>


</template>

<script>

export default {
  name: "AboutComponent",

};
</script>
<style>
.bot{

  width: 1300px;
  height: 626px;
  background-image: url("@/assets/bot.jpg");
  background-size: cover;
  margin-left: -55px;

}
.contenue{
  width: 700px;
  margin:auto;
  padding-top: 100px;
  color:white;
  text-align: center;
  font-size: 20px;
}

</style>