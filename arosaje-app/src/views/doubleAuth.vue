<template>
  <v-container>
    <v-card
        class="mx-auto"
        max-width="500"

    >
      <h3 class="titre">Double Authentification</h3>
      <span>Veillez scanner le code QR avec l'application Google Authenticator</span>
      <img :src="qrCodeDataURI" alt="QR code">
      <v-sheet width="300" class="mx-auto formnum">
        <v-form @submit.prevent>
          <v-text-field
              v-model="firstName"
              :rules="rules"
              label="Code secret"
          ></v-text-field>
          <v-btn type="submit" onclick="window.location.href = '/profil';" block class="mt-2">Submit</v-btn>
        </v-form>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name:"DoubleAuth",
  data() {

    return {
      qrCodeDataURI: '',
    };
  },
  mounted() {
    // Call API to generate OTP and get QR code image
    this.generateOTP();
  },
  methods: {
    async generateOTP() {
      const response = await fetch('http://localhost:3000/otp/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: 11}),
      });
      const data = await response.json();
      this.qrCodeDataURI = data.qrCodeDataURI;
      console.log(data.qrCodeDataURI)

    },
  },
};
</script>
<style>
.mx-auto{
  height: 400px;
  text-align: center;
  margin-top: 80px;
  background-color: forestgreen;

}
.mx-auto .titre{
  margin-top: 20px;
  color:white;

}
.formnum{
  margin-top:10px;
}
</style>