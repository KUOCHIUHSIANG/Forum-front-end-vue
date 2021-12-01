<template>
  <div class="card">
      <div class="card-header">
        <strong> {{ followings.length }} </strong> followings (追蹤者)
      </div>
      <div class="card-body">
          <router-link v-for="following in followings" :key="following.id" :to="{ name: 'user', params: { id: following.id } }">
            <img :src="following.image | checkImage" width="60" height="60" class="avatar mr-1">
          </router-link>
      </div>
    </div>
</template>

<script>
import { emptyUserFilter } from '../utils/mixins'
export default {
  mixins: [emptyUserFilter],
  props: {
    followings: {
      type: Array
    }
  }
}
</script>