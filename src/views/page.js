import config from '../../package'
import showdown from 'showdown'

const page = {
  async render (hash, params) {
    const converter = new showdown.Converter({ strikethrough: true, emoji: true, tables: true, tablesHeaderId: true, tasklists: true })
    // use substring to remove the # from hash
    let pageMd = await fetch(`${config.splog.pathToPagesFolder}/${hash.substring(1)}.md`)
    return await converter.makeHtml(await pageMd.text())
  }
}
export default page

