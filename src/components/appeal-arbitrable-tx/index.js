import React from 'react'
import PropTypes from 'prop-types'

const AppealArbitrableTx = ({ arbitrable, id, appeal }) => (
  <div>
    <button type="submit" onClick={() => appeal(arbitrable, id)}>
      Appeal
    </button>
  </div>
)

AppealArbitrableTx.propTypes = {
  // State
  appeal: PropTypes.func,
  id: PropTypes.string
}

AppealArbitrableTx.defaultProps = {
  // State
  appeal: v => v,
  arbitrable: '',
  id: ''
}

export default AppealArbitrableTx
