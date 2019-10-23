export const state = () => ({
  newsItems: [],
  committee: []
})

export const mutations = {
  setNewsItems(state, list) {
    state.newsItems = list
  },
  setCommittee(state, list) {
    state.committee = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    // Get news
    const newsFiles = await require.context(
      '~/assets/content/news',
      false,
      /\.json$/
    )
    const newsItems = newsFiles.keys().map((key) => {
      const res = newsFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setNewsItems', newsItems)

    // Get committee
    const committeeFiles = await require.context(
      '~/assets/content/committee',
      false,
      /\.json$/
    )
    const committee = committeeFiles.keys().map((key) => {
      const res = committeeFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setCommittee', committee)
  }
}
