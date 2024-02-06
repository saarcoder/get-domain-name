const getDomainName = url=> {
    const match = url.match(/^(?<http>https?:\/\/)?(?<sub>www\.)?(?<domain>[a-z-0-9]+)(?<suffix>\.[a-z]+)/)
    console.log(match)
    return match.groups.domain
  }
  
module.exports = getDomainName