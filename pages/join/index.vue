<template>
  <div>
    <Background :makedark="true" />
    <Menu />
    <b-container fluid>
      <b-row>
        <p class="heading mx-auto">Join</p>
      </b-row>
      <b-row>
        <SectionTemplate
          v-for="(join, index) in joinSections"
          :key="index"
          :content="join"
          :index="index"
        />
      </b-row>
      <b-row>
        <p class="sub-heading mx-auto">Membership Fees</p>
      </b-row>
      <b-row>
        <b-table striped hover :items="membership" :fields="fields"></b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Background from '~/components/Background'
import Menu from '~/components/Menu'
import SectionTemplate from '~/components/SectionTemplate'

export default {
  components: {
    Background,
    Menu,
    SectionTemplate
  },
  data() {
    return {
      fields: [
        {
          key: 'type',
          label: 'Membership Type'
        },
        {
          key: 'price_year',
          label: 'Annual Price',
          formatter: (value) => `£${value}.00`
        },
        {
          // A virtual column with custom formatter
          key: 'price_half',
          label: 'Half Year Price',
          formatter: (value) => `£${value}.00`
        }
      ]
    }
  },
  computed: {
    joinSections() {
      return this.$store.state.joinSections
    },
    membership() {
      return this.$store.state.membership
    }
  }
}
</script>

<style>
.heading {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 6rem;
  color: snow;
  text-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.sub-heading {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 3rem;
  color: snow;
  text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.b-table {
  background-color: rgba(65, 105, 225, 0.664);
  color: snow;
}
</style>
