export const state = () => ({
  newsItems: [],
  committee: [],
  joinSections: [],
  aboutSections: [],
  membership: [],
  trophies: []
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
  },
  setMembership(state, list) {
    state.membership = list
  },
  setTrophies(state, list) {
    state.trophies = list
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

    // Get membership
    const membershipFiles = await require.context(
      '~/assets/content/membership',
      false,
      /\.json$/
    )
    const membership = membershipFiles.keys().map((key) => {
      const res = membershipFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setMembership', membership)

    // Get trophies
    const trophyFiles = await require.context(
      '~/assets/content/racing',
      false,
      /\.json$/
    )
    const trophies = trophyFiles.keys().map((key) => {
      const res = trophyFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setTrophies', trophies)
  }
}
