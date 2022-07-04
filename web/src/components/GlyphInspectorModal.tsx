import '../scss/glyph-inspector-modal.scss'
import React, { useContext, useMemo } from 'react'
import Modal from 'react-modal'
import { Glyph, Path } from 'opentype.js'
import { ToastContainer, toast, cssTransition } from 'react-toastify'
import { VscClose } from 'react-icons/vsc'
import GlyphCanvas from './GlyphCanvas'
import FontContext from '../contexts/FontContext'
import Chip from './Chip'

type GlyphInspectorModalProps = {
  isOpen: boolean
  onClose: () => void
  glyph: Glyph
}

const GLYPH_CANVAS_SIZE = 500
const CANVAS_PADDING = 16

const formatUnicode = (unicode: number | undefined): string => {
  if (unicode === undefined) {
    return '(null)'
  }

  const unicodeHex = unicode.toString(16)

  return unicodeHex.length > 4
    ? `000000${unicodeHex.toUpperCase()}`.slice(-6)
    : `0000${unicodeHex.toUpperCase()}`.slice(-4)
}

const pathToSVG = (path: Path): string => {
  const { x1, y1, x2, y2 } = path.getBoundingBox()
  const w = (x2 - x1).toFixed(0)
  const h = (y2 - y1).toFixed(0)

  // prettier-ignore
  return (
    '' +
    '<svg ' +
      `width="${w}" ` +
      `height="${h}" ` +
      `viewBox="${x1.toFixed(0)} ${y1.toFixed(0)} ${w} ${h}" ` +
      'fill="#808080" ' +
      'xmlns="http://www.w3.org/2000/svg"' +
    '>' +
      `${path.toSVG(0)}` +
    '</svg>'
  )
}

function renderTableRow<T>(
  object: T,
  property: keyof T,
  displayName?: string
): JSX.Element {
  return (
    <tr>
      <td>{displayName || property}</td>
      <td>{object[property] ?? '(null)'}</td>
    </tr>
  )
}

const entityTextArea = document.createElement('textarea')

const GlyphInspectorModal = ({
  isOpen,
  onClose,
  glyph
}: GlyphInspectorModalProps): JSX.Element => {
  const glyphMetrics = useMemo(() => glyph.getMetrics(), [glyph])
  const glyphPath = useMemo(() => glyph.getPath(), [glyph])
  const { font } = useContext(FontContext)

  const copyGlyphToClipboard = (svg: boolean): void => {
    // The glyph will be encoded (for example F => &#70;) so we need
    // to put the glyph in a text area in order to copy the decoded version
    entityTextArea.innerHTML = svg ? pathToSVG(glyphPath) : `&#${glyph.unicode};`

    navigator.clipboard
      .writeText(entityTextArea.value)
      .then(() => {
        toast(`${svg ? 'SVG' : 'Glyph'} copied to clipboard`, {
          position: 'bottom-right',
          className: 'react-toast',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          transition: cssTransition({
            enter: 'react-toast__enter',
            exit: 'react-toast__exit'
          })
        })
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(err))
  }

  return (
    <div>
      <ToastContainer limit={1} />
      <Modal
        preventScroll
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        onRequestClose={onClose}
        isOpen={isOpen}
        className="glyph-inspector-modal"
        overlayClassName="glyph-inspector-modal-overlay"
      >
        <div className="modal-content">
          <button type="button" onClick={onClose} className="modal-close-btn">
            <VscClose />
          </button>
          <div
            className="canvas-container"
            style={{
              width: GLYPH_CANVAS_SIZE + CANVAS_PADDING,
              height: GLYPH_CANVAS_SIZE + CANVAS_PADDING
            }}
          >
            <GlyphCanvas
              glyph={glyph}
              width={GLYPH_CANVAS_SIZE}
              height={GLYPH_CANVAS_SIZE}
            />
          </div>
          <div className="glyph-detail">
            <table>
              <tbody>
                {renderTableRow(glyph, 'name')}
                <tr>
                  <td>unicode</td>
                  <td>{formatUnicode(glyph.unicode)}</td>
                </tr>
                {renderTableRow(glyph, 'index')}
                {renderTableRow(glyphMetrics, 'xMin')}
                {renderTableRow(glyphMetrics, 'xMax')}
                {renderTableRow(glyphMetrics, 'yMin')}
                {renderTableRow(glyphMetrics, 'yMax')}
                {renderTableRow(glyph, 'advanceWidth')}
                {renderTableRow(glyphMetrics, 'leftSideBearing')}
                {renderTableRow(glyphMetrics, 'rightSideBearing')}
                {renderTableRow(font, 'ascender')}
                {renderTableRow(font, 'descender')}
                {renderTableRow(font, 'unitsPerEm')}
              </tbody>
            </table>
            <div className="chip-actions">
              {glyph.unicode !== undefined && (
                <Chip
                  title="Copy as text"
                  className="chip-action"
                  onClick={() => copyGlyphToClipboard(false)}
                />
              )}
              {glyphPath.commands.length > 0 && (
                <Chip
                  title="Copy as SVG"
                  className="chip-action"
                  onClick={() => copyGlyphToClipboard(true)}
                />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default GlyphInspectorModal
