<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="profile.image"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"> {{ profile.name }} </h5>
          <p class="card-text"> {{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li><strong> {{ profile.Comments.length }} </strong> 已評論餐廳</li>
            <li><strong> {{ profile.FavoritedRestaurants.length }} </strong> 收藏的餐廳</li>
            <li><strong> {{ profile.Followings.length }} </strong> followings (追蹤者)</li>
            <li><strong> {{ profile.Followers.length }} </strong> followers (追隨者)</li>
          </ul>
          <p>
            <a v-if="currentUser.id === profile.id" href="/users/2/edit"
              ><button type="submit" class="btn btn-primary">edit</button></a
            >
            <template v-else>
              <button v-if="isFollowed" @click="deleteFollow" type="submit" class="btn btn-danger">取消追蹤</button>
              <button v-else @click="addFollow" type="submit" class="btn btn-primary">追蹤</button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  props: {
    initialProfile: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true // 拿掉就不會出現 Missing required prop的問題
    }
  },
  data() {
    return {
      profile: this.initialProfile,
      isFollowed: this.initialIsFollowed,
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    addFollow() {
      this.isFollowed = true
    },
    deleteFollow() {
      this.isFollowed = false
    }
  }
}
</script>