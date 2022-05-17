<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="profile.image | checkImage"
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
            <router-link v-if="isCurrentUser" :to="{name: 'user-edit', params: profile.id}"
              ><button type="submit" class="btn btn-primary">edit</button></router-link
            >
            <template v-else>
              <button v-if="isFollowed" @click="deleteFollow(profile.id)" type="submit" class="btn btn-danger">取消追蹤</button>
              <button v-else @click="addFollow(profile.id)" type="submit" class="btn btn-primary">追蹤</button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyUserFilter } from '../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  mixins: [emptyUserFilter],
  props: {
    profile: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
    }
  },
  methods: {
    async addFollow(profileId) {
      try {
        const { data } = await usersAPI.addFollowing({ 
          userId: profileId
        })
        
        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.isFollowed = true
      } catch (error) {
        console.log('error', error);
        Toast.fire({
          icon: 'error',
          title: '無法追蹤，請稍後再試'
        })
      }
    },
    async deleteFollow(profileId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ 
          userId: profileId
        })

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.isFollowed = false
      } catch (error) {
        console.log('error', error);
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  },
  watch: {
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed
    }
  }
}
</script>