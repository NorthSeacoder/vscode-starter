import { getDefaultLoggerPrefix, useLogger } from 'reactive-vscode'
import { displayName } from './generated/meta'

export const logger = useLogger(displayName, {
  getPrefix: getDefaultLoggerPrefix,
})
