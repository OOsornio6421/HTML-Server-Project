<template>
  <v-card class="mx-auto"
          width="600"
          elevation="6">

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline d-flex align-center justify-center pa-1 mx-auto">
          <br/>General System Setup Options<br/>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-container fluid>
      <v-form
      ref="form"
      v-model="valid"
      lazy-validation>
        <v-text-field
          v-model="IPAddress"
          :rules="nameRules"
          label="IP Address">
        </v-text-field>

        <v-text-field
          v-model="Netmask"
          :rules="emailRules"
          label="Netmask">
        </v-text-field>

        <v-text-field
          v-model="Gateway"
          label="Gateway">
        </v-text-field>

        <v-text-field
          v-model="MACAddress"
          label="MAC Address"
          readonly>
        </v-text-field>

        <!--
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must confirm to continue!']"
          label="Confirm Changes?"
          required>
        </v-checkbox>

        <v-btn
          :disabled="!valid"
          color="primary"
          text
          @click="validate">Submit
        </v-btn>
        -->
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: vm => ({
    valid: true,
    IPAddress: null,
    Netmask: null,
    Gateway: null,
    MAC: null,
    nameRules: [
    ],
    email: '',
    emailRules: [
    ],
    checkbox: false
  }),

  mounted () {
    this.$ajax
      .get('/api/v1/network/info')
      .then(data => {
        this.IPAddress = data.data.IPAddress
        this.Netmask = data.data.Netmask
        this.Gateway = data.data.Gateway
        this.MACAddress = data.data.MACAddress
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
