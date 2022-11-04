<template>
  <b-container>
    <b-row class="justify-content-center align-content-center vh-100">
      <b-col lg="6">
        <b-card>
          <form @submit.prevent="submit" ref="form">
            <b-form-group label="Username:">
              <b-form-input placeholder="Enter Username" name="username"></b-form-input>
            </b-form-group>

            <b-form-group label="Password:">
              <b-form-input
                :type="isShowPassword ? 'text' : 'password'"
                placeholder="Enter Password"
                name="password"
              ></b-form-input>
            </b-form-group>

            <b-form-checkbox v-model="isShowPassword" class="mb-3">
              {{ isShowPassword ? "hide" : "show" }}
            </b-form-checkbox>

            <b-button type="submit" variant="primary">submit</b-button>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isShowPassword: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["getUrl"]),
  },
  methods: {
    async submit() {
      let formData = new FormData(this.$refs.form);
      await this.$axios
        .$post(this.getUrl("auth/login"), formData)
        .then((res) => {
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("user", JSON.stringify(res.user));
          this.$store.commit("auth/setToken", res.access_token);
          this.$store.commit("auth/setUser", res.user);
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {});
    },
  },
};
</script>

<style lang="scss" scoped></style>
