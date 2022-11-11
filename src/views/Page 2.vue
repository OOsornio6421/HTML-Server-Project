<template>
  <v-card class="mx-auto"
          width="600"
          elevation="6">

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title
          class="headline d-flex align-center justify-center pa-1 mx-auto"><br/>{{ name }}<br/>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-container fluid>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            counter="16"
            label="Name">
          </v-text-field>

          <v-combobox
            v-model="select"
            :items="items"
            label="Type"
            dense>
          </v-combobox>

          <v-container fluid grid-list-lg>
            <v-layout row wrap>
              <v-flex xs9>
                <v-slider
                  v-model="modbus"
                  :min="1"
                  :max="65535"
                  label="Address"></v-slider>
              </v-flex>
              <v-flex xs3>
                <v-text-field
                  v-model="modbus"
                  class="mt-0"
                  type="number"></v-text-field>
              </v-flex>
              <v-flex xs11>
                <v-text-field
                  v-model="value"
                  label="Current Value"
                  :readonly="!valuecheckbox"></v-text-field>
              </v-flex>
              <v-flex xs1>
                <v-checkbox
                  v-model="valuecheckbox"></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>

          <!--
            Combobox option for units with search function and adding inputs.
            I have not been able to figure it out so I will have it commented out and will include a text field for now.

          <v-combobox
            v-model="unitsvalue"
            :units="units"
            :search-input.sync="search"
            label="Units"
            dense>
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-combobox>
          -->

          <v-text-field
            v-model="unitsvalue"
            label="Units">
          </v-text-field>

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
            @click="postValidate">Submit</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      name: 'Test Page 2',
      select: '',
      modbus: '',
      value: '',
      unitsvalue: '',
      nameRules: [
        v => v.length <= 16 || 'Max 16 characters.'
      ],
      checkbox: false,
      valuecheckbox: false,
      items: [
        'BOOL', 'DINT', 'INT', 'LREAL', 'REAL', 'SINT', 'STRING', 'UDINT', 'UINT', 'USINT'
      ],
      units: [],
      search: null
    }
  },

  mounted () {
    this.$ajax
      .get('/api/v1/form/two')
      .then(data => {
        this.name = data.data.name
        this.select = data.data.select
        this.modbus = data.data.modbus
        this.value = data.data.value
        this.unitsvalue = data.data.unitsvalue
      })
      .catch(error => {
        console.log(error)
      })
  },

  methods: {
    postValidate: function () {
      this.$ajax
        .post('/api/v1/form/two', {
          name: this.name,
          select: this.select,
          modbus: this.modbus,
          value: this.value,
          unitsvalue: this.unitsvalue
        })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
