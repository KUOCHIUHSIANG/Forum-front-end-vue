<template>
  <div class="album py-5 bg-light">
    <Spinner v-if="isLoading" />
    <div v-else class="container">
      <!-- UserProfileCard -->
      <UserProfileCard
        :profile="profile"
        :initial-is-followed="isFollowed"
        :is-current-user="profile.id === currentUser.id"
      />
      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard :followings="profile.Followings" />
          <br />
          <!-- UserFollowersCard -->
          <UserFollowersCard :followers="profile.Followers" />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard :comments="profile.Comments" />
          <br />
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard
            :favoritedRestaurants="profile.FavoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import Spinner from "../components/Spinner.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    Spinner,
  },
  data() {
    return {
      profile: {
        id: 0,
        name: "",
        email: "",
        image: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followings: [],
        Followers: [],
      },
      isFollowed: false,
      isLoading: true,
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({ userId });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.profile = {
          ...this.profile,
          id: data.profile.id,
          name: data.profile.name,
          email: data.profile.email,
          image: data.profile.image,
          // 用 filter 過濾 Comments.Restaurant 為空值的狀況
          Comments: data.profile.Comments.filter(
            (comment) => comment.Restaurant
          ),
          FavoritedRestaurants: data.profile.FavoritedRestaurants,
          Followings: data.profile.Followings,
          Followers: data.profile.Followers,
        },
        this.isFollowed = data.isFollowed
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者，請稍後再試",
        });
      }
    },
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
