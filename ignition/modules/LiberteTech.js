const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules')

module.exports = buildModule('LiberteTechModule', (m) => {
    const lock = m.contract('LiberteCoin')

    return { lock }
})
