export const state = () => ({
  newsItems: [],
  committee: [],
  joinSections: [],
  aboutSections: []
})

export const mutations = {
  setNewsItems(state, list) {
    state.newsItems = list
  },
  setCommittee(state, list) {
    state.committee = list
  },
  setJoinSections(state, list) {
    state.joinSections = list
  },
  setAboutSections(state, list) {
    state.aboutSections = list
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

    // Get join sections
    const joinSecFiles = await require.context(
      '~/assets/content/join',
      false,
      /\.json$/
    )
    const joinSecs = joinSecFiles.keys().map((key) => {
      const res = joinSecFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setJoinSections', joinSecs)

    // Get about sections
    const aboutSecFiles = await require.context(
      '~/assets/content/about',
      false,
      /\.json$/
    )
    const aboutSecs = aboutSecFiles.keys().map((key) => {
      const res = aboutSecFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setAboutSections', aboutSecs)
  }
}
