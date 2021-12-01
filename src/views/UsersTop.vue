<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <a href="#">
          <img
            :src="user.image | checkImage"
            width="140px"
            height="140px"
          />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button v-if="user.isFollowed" @click.stop.prevent="deleteFollow(user)" type="button" class="btn btn-danger">取消追蹤</button>
          <button v-else @click.stop.prevent="addFollow(user)" type="button" class="btn btn-primary">追蹤</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { emptyUserFilter } from '../utils/mixins';

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$vEMn/13hstMM3LFiHVlHrelX0iYsn1/IBX8nDgftLcvoocj9h7rfq",
      isAdmin: true,
      image: 'https://wondrousss.info/quotes/files/avatar_img_668.jpg',
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$F/51ajI/72crcWFNCTLdleAlm51gnrBmTYkxsRhDmh2AVw7TaiXxK",
      isAdmin: false,
      image: 'https://i.pinimg.com/originals/f1/c1/32/f1c13292460e637545773a0f481a7381.jpg',
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$qFlU7osqmyJPIF0tMN9Dq.gLt3CoPYVJod71ch1EmSkzk4zSZI53i",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-10T08:18:00.000Z",
      updatedAt: "2021-11-10T08:18:00.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  mixins: [emptyUserFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchTopUsers() {
      this.users = {
        ...dummyData.users,
      }
    },
    addFollow(user) {
      user.isFollowed = true
      console.log(dummyData.users[0].isFollowed)  // true
      console.log(this.users[0].isFollowed)  // true
    },
    deleteFollow(user) {
      user.isFollowed = false
    }
  },
  created(){
    this.fetchTopUsers()
    console.log(dummyData.users[0].isFollowed)
  }
};
</script>