var DataChannel = require('./src/datachannel/stream')
var Peer = require('./src/peer')(DataChannel)
module.exports = Peer
