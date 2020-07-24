export default {
  title: `Fascinating!`,
  tags: ['star trek', 'spock', 'behind the scenes'],
  spoiler: "That gif is from an episode called: The Corbomite Maneuver.",
  getContent: () => import('./document.mdx'),
}
