<template>
  <div class="card">
      <div class="card-header">
        <strong> {{ followers.length }} </strong> followers (追隨者)
      </div>
      <div class="card-body">
          <router-link v-for="follower in followers" :key="follower.id" :to="{ name: 'user', params: { id: follower.id } }">
            <img :src="follower.image | checkImage" width="60" height="60" class="avatar mr-1">
          </router-link>
      </div>
    </div>
</template>

<script>
import { emptyUserFilter } from '../utils/mixins'

export default {
  mixins: [ emptyUserFilter ],
  props: {
    followers: {
      type: Array
    }
  }
}
</script>