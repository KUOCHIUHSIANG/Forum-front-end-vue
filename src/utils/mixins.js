import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage (src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}

export const emptyUserFilter = {
  filters: {
    checkImage(image) {
      return image || 'https://media.istockphoto.com/vectors/anonymous-vector-icon-incognito-sign-privacy-concept-human-head-with-vector-id1284693553?b=1&k=20&m=1284693553&s=170667a&w=0&h=kuHXRL9c6sXDM--AgaQaW-4w1KFj3aEh_Xl4LvJHj8s='
    }
  },
}