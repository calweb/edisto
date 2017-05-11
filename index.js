const bouy = require('ndbc-realtime-tojson')
const { send } = require('micro')
module.exports = async (req, res) => {
  const data = await bouy('41004', 'spec')
  return send(res, 200, data)
}
