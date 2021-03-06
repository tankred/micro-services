const request = require('request')

const baseurl = 'http://bkaprt.com/swd/'
let i = 0
let n = ''

function pad (n, width, z) {
  z = z || '0'
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

function expandUrl (shortUrl) {
  request({ method: 'HEAD', url: shortUrl, followAllRedirects: true },
    function (error, response) {
      console.log(response.request.href)
    })
}
const log = console.log
const chap = {
  '00': 1,
  '01': 23,
  '02': 10,
  '03': 24,
  '04': 10,
  '05': 16,
  '06': 4,
  '07': 15,
  '08': 22
}

const keys = Object.keys(chap)

keys.forEach((key, index) => {
  for (i = 1; i <= chap[key]; i++) {
    n = pad(i, 2)
    log(`${baseurl}${key}-${n}/`)
    expandUrl(`${baseurl}${key}-${n}/`)
  }
})
