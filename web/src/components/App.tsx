/* eslint-disable no-console */
import '../scss/app.scss'
import React, { useContext, useEffect, useState } from 'react'
import opentype, { Font } from 'opentype.js'
import TabView, { Tab } from './TabView'
import FontPreview from './FontPreview'
import Glyphs from './Glyphs'
import { FontProvider } from '../contexts/FontContext'
import { WebviewMessage } from '../../../shared/webview-message'
import VscodeContext from '../contexts/VscodeContext'
import { FontExtension } from '../types'
import LoadingOverlay from './LoadingOverlay'
import Features from './Features'

const getFontMimeType = (fontName: FontExtension): string => {
  switch (fontName) {
    case 'otf':
      return 'opentype'
    case 'ttf':
      return 'truetype'
    case 'woff':
      return 'woff'
    default:
      return ''
  }
}

/**
 * Creates and inserts a <style> element with the loaded font. This allows
 * the font to be accessed anywhere in a stylesheet.
 */
const createStyle = (base64Font: string, fontExtension: FontExtension): void => {
  const style = document.createElement('style')
  const mimeType = getFontMimeType(fontExtension)

  // Using var() in the template string doesn't load the font family
  // so it has to be grabbed from the root element
  const fontFamilyName = getComputedStyle(document.documentElement).getPropertyValue(
    '--font-family-name'
  )

  style.id = 'font-preview'
  style.innerHTML = /* css */ `
    @font-face {
      font-family: ${fontFamilyName};
      src:
        url("data:font/${mimeType};base64,${base64Font}")
        format("${mimeType}");
    }`

  document.head.insertAdjacentElement('beforeend', style)
}

const App = (): JSX.Element | null => {
  const [font, setFont] = useState<Font | null>(null)
  const [fileName, setFileName] = useState('')
  const [isLoading, setLoading] = useState(true)
  const vscode = useContext(VscodeContext)
  const savedState = vscode.getState()

  const loadFont = (fileData: number[]): void => {
    const errorMessage: WebviewMessage = {
      type: 'ERROR',
      payload: ''
    }

    try {
      const fontData = opentype.parse(new Uint8Array(fileData).buffer)

      if (!fontData.supported) {
        errorMessage.payload =
          'Error loading font: This font is not supported or cannot be displayed.'
        vscode.postMessage(errorMessage)
        setLoading(false)
        return
      }

      setFont(fontData)
    } catch (err) {
      errorMessage.payload = `Error loading font: ${err.message}`
      vscode.postMessage(errorMessage)
    }

    setLoading(false)
  }

  const onMessage = (message: MessageEvent<WebviewMessage>): void => {
    // Reopening the the most recently closed tab (CMD/CTRL + Shift + T )
    // causes vscode to read in the saved state but also fire the init
    // message. Returning here prevents the font from being loaded twice.
    if (savedState && message.data.type === 'LOAD') {
      return
    }

    const { payload } = message.data

    loadFont(payload.fileContent)
    createStyle(payload.base64Content, payload.extension)
    setFileName(payload.fileName)

    vscode.setState({
      base64Content: payload.base64Content,
      fileContent: payload.fileContent,
      fontExtension: payload.extension
    })
  }

  useEffect(() => {
    if (savedState) {
      createStyle(savedState.base64Content, savedState.fontExtension)
      loadFont(savedState.fileContent)
    }

    window.addEventListener('message', onMessage)

    return () => {
      window.removeEventListener('message', onMessage)
    }
  }, [])

  if (isLoading) {
    return <LoadingOverlay />
  }

  if (!font) {
    return null
  }

  return (
    <FontProvider value={font}>
      <TabView>
        <Tab title="Preview">
          <FontPreview fontName={font?.tables?.name?.fullName?.en || fileName} />
        </Tab>
        <Tab title="Features">
          <Features />
        </Tab>
        <Tab title="Glyphs">
          <Glyphs glyphs={font.glyphs} />
        </Tab>
      </TabView>
    </FontProvider>
  )
}

export default App
