type FeatureTable = {
  [featureName: string]: {
    description: string
    friendlyName: string
  }
}

const featureTable: FeatureTable = {
  aalt: {
    friendlyName: 'Access All Alternates',
    description:
      'This feature makes all variations of a selected character accessible. This serves several purposes: An application may not support the feature by which the desired glyph would normally be accessed; the user may need a glyph outside the context supported by the normal substitution, or the user may not know what feature produces the desired glyph. Since many-to-one substitutions are not covered, ligatures would not appear in this table unless they were variant forms of another ligature.'
  },
  abvf: {
    friendlyName: 'Above-base Forms',
    description:
      'Substitutes the above-base form of a vowel. In particular, this feature is used for certain "split" vowels in Khmer or other Brahmi-derived scripts if the character has separate components that appear before and above a consonant, but the Unicode character for the vowel does not have a decomposition into separate characters for the two components.'
  },
  abvm: {
    friendlyName: 'Above-base Mark Positioning',
    description: 'Positions marks above base glyphs.'
  },
  abvs: {
    friendlyName: 'Above-base Substitutions',
    description: 'Substitutes a ligature for a base glyph and mark that’s above it.'
  },
  afrc: {
    friendlyName: 'Alternative Fractions',
    description: 'Replaces figures separated by a slash with an alternative form.'
  },
  akhn: {
    friendlyName: 'Akhand',
    description:
      'Preferentially substitutes default glyphs for a sequence of characters with a ligature. This substitution is done irrespective of any characters that may precede or follow the sequence.'
  },
  blwf: {
    friendlyName: 'Below-base Forms',
    description: 'Substitutes the below-base form of a consonant in conjuncts.'
  },
  blwm: {
    friendlyName: 'Below-base Mark Positioning',
    description: 'Positions marks below base glyphs.'
  },
  blws: {
    friendlyName: 'Below-base Substitutions',
    description: 'Produces ligatures that comprise of base glyph and below-base forms.'
  },
  calt: {
    friendlyName: 'Contextual Alternates',
    description:
      'In specified situations, replaces default glyphs with alternate forms which provide better joining behavior. Used in script typefaces which are designed to have some or all of their glyphs join.'
  },
  case: {
    friendlyName: 'Case-Sensitive Forms',
    description:
      'Shifts various punctuation marks up to a position that works better with all-capital sequences or sets of lining figures; also changes oldstyle figures to lining figures. By default, glyphs in a text face are designed to work with lowercase characters. Some characters should be shifted vertically to fit the higher visual center of all-capital or lining text. Also, lining figures are the same height (or close to it) as capitals, and fit much better with all-capital text.'
  },
  ccmp: {
    friendlyName: 'Glyph Composition/Decomposition',
    description:
      'To minimize the number of glyph alternates, it is sometimes desirable to decompose the default glyph for a character into two or more glyphs. Additionally, it may be preferable to compose default glyphs for two or more characters into a single glyph for better glyph processing. This feature permits such composition/decomposition. The feature should be processed as the first feature processed, and should be processed only when it is called.'
  },
  cfar: {
    friendlyName: 'Conjunct Form After Ro',
    description:
      'Substitutes alternate below-base or post-base forms in Khmer script when occurring after conjoined Ro ("Coeng Ra").'
  },
  chws: {
    friendlyName: 'Contextual Half-width Spacing',
    description:
      "Contextually re-spaces glyphs designed to be set on full-em widths, fitting them onto individual half-em horizontal widths, to approximate more sophisticated text layout, such as what is described in Requirements for Japanese Text Layout (JLREQ) or similar CJK text-layout specifications that expect half-width forms of characters whose default glyphs are full-width.* This feature differs from 'halt' in that the re-spacing is contextual. This feature may be invoked to get better fit for punctuation or symbol glyphs without disrupting the monospaced alignment, such as for UIs or terminal apps."
  },
  cjct: {
    friendlyName: 'Conjunct Forms',
    description:
      'Produces conjunct forms of consonants in Indic scripts. This is similar to the Akhands feature, but is applied at a different sequential point in the process of shaping an Indic syllable.'
  },
  clig: {
    friendlyName: 'Contextual Ligatures',
    description:
      "Replaces a sequence of glyphs with a single glyph which is preferred for typographic purposes. Unlike other ligature features, 'clig' specifies the context in which the ligature is recommended. This capability is important in some script designs and for swash ligatures."
  },
  cpct: {
    friendlyName: 'Centered CJK Punctuation',
    description:
      'Centers specific punctuation marks for those fonts that do not include centered and non-centered forms.'
  },
  cpsp: {
    friendlyName: 'Capital Spacing',
    description:
      'Globally adjusts inter-glyph spacing for all-capital text. Most typefaces contain capitals and lowercase characters, and the capitals are positioned to work with the lowercase. When capitals are used for words, they need more space between them for legibility and esthetics. This feature would not apply to monospaced designs. Of course the user may want to override this behavior in order to do more pronounced letterspacing for esthetic reasons.'
  },
  cswh: {
    friendlyName: 'Contextual Swash',
    description:
      'This feature replaces default character glyphs with corresponding swash glyphs in a specified context. Note that there may be more than one swash alternate for a given character.'
  },
  curs: {
    friendlyName: 'Cursive Positioning',
    description:
      'This feature is used to position adjacent glyphs for cursive connections.'
  },
  'cv01 – cv99': {
    friendlyName: 'Character Variant 1 – Character Variant 99',
    description:
      'A font may have stylistic-variant glyphs for one or more characters where the variations for one character are not systematically related to those for other characters. Or, a variation may exist for a character and its casing pair (or related pre-composed characters), but not be applicable to other unrelated characters. In some usage scenarios, it may be necessary to provide the application with control over glyph variations for different Unicode characters individually.'
  },
  c2pc: {
    friendlyName: 'Petite Capitals From Capitals',
    description:
      "This feature turns capital characters into petite capitals. It is generally used for words which would otherwise be set in all caps, such as acronyms, but which are desired in petite-cap form to avoid disrupting the flow of text. See the 'pcap' feature description for notes on the relationship of caps, smallcaps and petite caps."
  },
  c2sc: {
    friendlyName: 'Small Capitals From Capitals',
    description:
      'This feature turns capital characters into small capitals. It is generally used for words which would otherwise be set in all caps, such as acronyms, but which are desired in small-cap form to avoid disrupting the flow of text.'
  },
  dist: {
    friendlyName: 'Distances',
    description: 'Provides a means to control distance between glyphs.'
  },
  dlig: {
    friendlyName: 'Discretionary Ligatures',
    description:
      'Replaces a sequence of glyphs with a single glyph which is preferred for typographic purposes. This feature covers those ligatures which may be used for special effect, at the user’s preference.'
  },
  dnom: {
    friendlyName: 'Denominators',
    description:
      'Replaces selected figures which follow a slash with denominator figures.'
  },
  dtls: {
    friendlyName: 'Dotless Forms',
    description:
      'This feature provides dotless forms for Math Alphanumeric characters, such as U+1D422 MATHEMATICAL BOLD SMALL I, U+1D423 MATHEMATICAL BOLD SMALL J, U+1D456 U+MATHEMATICAL ITALIC SMALL I, U+1D457 MATHEMATICAL ITALIC SMALL J, and so on. The dotless forms are to be used as base forms for placing mathematical accents over them.'
  },
  expt: {
    friendlyName: 'Expert Forms',
    description:
      'Like the JIS78 Forms feature, this feature replaces standard forms in Japanese fonts with corresponding forms preferred by typographers. Although most of the JIS78 substitutions are included, the expert substitution goes on to handle many more characters.'
  },
  falt: {
    friendlyName: 'Final Glyph on Line Alternates',
    description:
      'Replaces line final glyphs with alternate forms specifically designed for this purpose (they would have less or more advance width as need may be), to help justification of text.'
  },
  fin2: {
    friendlyName: 'Terminal Form #2',
    description:
      'Used to replace the Alaph glyph at the end of Syriac words with its appropriate form, when the preceding base character cannot be joined to, and that preceding base character is not a Dalath, Rish, or dotless Dalath-Rish.'
  },
  fin3: {
    friendlyName: 'Terminal Form #3',
    description:
      'Used to Alaph glyphs at the end of Syriac words when the preceding base character is a Dalath, Rish, or dotless Dalath-Rish.'
  },
  fina: {
    friendlyName: 'Terminal Forms',
    description:
      'Replaces glyphs for characters that have applicable joining properties with an alternate form when occurring in a final context. This applies to characters that have one of the following Unicode Joining_Type property values:'
  },
  flac: {
    friendlyName: 'Flattened ascent forms',
    description:
      'This feature provides flattened forms of accents to be used over high-rise bases such as capitals. This feature should only change the shape of the accent and should not move it in the vertical or horizontal direction. Moving of the accents is done by the math layout engine. Accents are flattened by the Math engine if their base is higher than MATH.MathConstants. FlattenedAccentBaseHeight.'
  },
  frac: {
    friendlyName: 'Fractions',
    description:
      'Replaces figures (digits) separated by a slash (U+002F) with "common" (diagonal) fractions.'
  },
  fwid: {
    friendlyName: 'Full Widths',
    description:
      'Replaces glyphs set on other widths with glyphs set on full (usually em) widths. In a CJKV font, this may include "lower ASCII" Latin characters and various symbols. In a European font, this feature replaces proportionally-spaced glyphs with monospaced glyphs, which are generally set on widths of 0.6 em.'
  },
  half: {
    friendlyName: 'Half Forms',
    description: 'Produces the half forms of consonants in Indic scripts.'
  },
  haln: {
    friendlyName: 'Halant Forms',
    description:
      'Produces the halant forms of consonants in Indic scripts (that is, precomposed glyphs for consonant with the halant).'
  },
  halt: {
    friendlyName: 'Alternate Half Widths',
    description:
      "Re-spaces glyphs designed to be set on full-em widths, fitting them onto half-em widths, to approximate more sophisticated text layout, such as what is described in Requirements for Japanese Text Layout (JLREQ) or similar CJKV text-layout specifications that expect half-width forms of characters whose default glyphs are full-width.* This feature differs from 'hwid' in that it is not used to substitute new glyphs."
  },
  hist: {
    friendlyName: 'Historical Forms',
    description:
      'Some letterforms were in common use in the past, but appear anachronistic today. The best-known example is the long form of s; others would include the old Fraktur k. Some fonts include the historical forms as alternates, so they can be used for a "period" effect. This feature replaces the default (current) forms with the historical alternates. While some ligatures are also used for historical effect, this feature deals only with single characters.'
  },
  hkna: {
    friendlyName: 'Horizontal Kana Alternates',
    description:
      "Replaces standard kana with forms that have been specially designed for only horizontal writing. This is a typographic optimization for improved fit and more even color. Also see 'vkna'."
  },
  hlig: {
    friendlyName: 'Historical Ligatures',
    description:
      'Some ligatures were in common use in the past, but appear anachronistic today. Some fonts include the historical forms as alternates, so they can be used for a "period" effect. This feature replaces the default (current) forms with the historical alternates.'
  },
  // NOTE: Deprecated
  hngl: {
    friendlyName: 'Hangul',
    description:
      'Replaces hanja (Chinese-style) Korean characters with the corresponding hangul (syllabic) characters. This effectively reverses the standard input method, in which hangul are entered and replaced by hanja. Many of these substitutions are one-to-one (GSUB lookup type 1), but hanja substitution often requires the user to choose from several possible hangul characters (GSUB lookup type 3).'
  },
  hojo: {
    friendlyName: 'Hojo Kanji Forms (JIS X 0212-1990 Kanji Forms)',
    description:
      'The JIS X 0212-1990 (aka, "Hojo Kanji") and JIS X 0213:2004 character sets overlap significantly. In some cases their prototypical glyphs differ. When building fonts that support both JIS X 0212-1990 and JIS X 0213:2004 (such as those supporting the Adobe-Japan 1-6 character collection), it is recommended that JIS X 0213:2004 forms be preferred as the encoded form. The "hojo" feature is used to access the JIS X 0212-1990 glyphs for the cases when the JIS X 0213:2004 form is encoded.'
  },
  hwid: {
    friendlyName: 'Half Widths',
    description:
      'Replaces glyphs on proportional widths, or fixed widths other than half an em, with glyphs on half-em (en) widths. Many CJKV fonts have glyphs which are set on multiple widths; this feature selects the half-em version. There are various contexts in which this is the preferred behavior, including compatibility with older desktop documents.'
  },
  init: {
    friendlyName: 'Initial Forms',
    description:
      'Replaces glyphs for characters that have applicable joining properties with an alternate form when occurring in an initial context. This applies to characters that have one of the following Unicode Joining_Type property values:'
  },
  isol: {
    friendlyName: 'Isolated Forms',
    description:
      'Replaces glyphs for characters that have applicable joining properties with an alternate form when occurring in a isolate (non-joining) context. This applies to characters that have one of the following Unicode Joining_Type property values:'
  },
  ital: {
    friendlyName: 'Italics',
    description:
      'Some fonts (such as Adobe’s Pro Japanese fonts) will have both Roman and Italic forms of some characters in a single font. This feature replaces the Roman glyphs with the corresponding Italic glyphs.'
  },
  jalt: {
    friendlyName: 'Justification Alternates',
    description:
      'Improves justification of text by replacing glyphs with alternate forms specifically designed for this purpose (they would have less or more advance width as need may be).'
  },
  jp78: {
    friendlyName: 'JIS78 Forms',
    description:
      'This feature replaces default (JIS90) Japanese glyphs with the corresponding forms from the JIS C 6226-1978 (JIS78) specification.'
  },
  jp83: {
    friendlyName: 'JIS83 Forms',
    description:
      'This feature replaces default (JIS90) Japanese glyphs with the corresponding forms from the JIS X 0208-1983 (JIS83) specification.'
  },
  jp90: {
    friendlyName: 'JIS90 Forms',
    description:
      'This feature replaces Japanese glyphs from the JIS78 or JIS83 specifications with the corresponding forms from the JIS X 0208-1990 (JIS90) specification.'
  },
  jp04: {
    friendlyName: 'JIS2004 Forms',
    description:
      "The National Language Council (NLC) of Japan has defined new glyph shapes for a number of JIS characters, which were incorporated into JIS X 0213:2004 as new prototypical forms. The 'jp04' feature is a subset of the 'nlck' feature, and is used to access these prototypical glyphs in a manner that maintains the integrity of JIS X 0213:2004."
  },
  kern: {
    friendlyName: 'Kerning',
    description:
      'Adjusts amount of space between glyphs, generally to provide optically consistent spacing between glyphs. Although a well-designed typeface has consistent inter-glyph spacing overall, some glyph combinations require adjustment for improved legibility. Besides standard adjustment in the horizontal direction, this feature can supply size-dependent kerning data via device tables, "cross-stream" kerning in the Y text direction, and adjustment of glyph placement independent of the advance adjustment. Note that this feature may apply to runs of more than two glyphs, and would not be used in monospaced fonts. Also note that this feature does not apply to text set vertically.'
  },
  lfbd: {
    friendlyName: 'Left Bounds',
    description:
      "Aligns glyphs by their apparent left extents at the left ends of horizontal lines of text, replacing the default behavior of aligning glyphs by their origins. This feature is called by the Optical Bounds ('opbd') feature."
  },
  liga: {
    friendlyName: 'Standard Ligatures',
    description:
      'Replaces a sequence of glyphs with a single glyph which is preferred for typographic purposes. This feature covers the ligatures which the designer/manufacturer judges should be used in normal conditions.'
  },
  ljmo: {
    friendlyName: 'Leading Jamo Forms',
    description: 'Substitutes the leading jamo form of a cluster.'
  },
  lnum: {
    friendlyName: 'Lining Figures',
    description:
      'This feature changes selected non-lining figures (digits) to lining figures.'
  },
  locl: {
    friendlyName: 'Localized Forms',
    description:
      'Many scripts used to write multiple languages over wide geographical areas have developed localized variant forms of specific letters, which are used by individual literary communities. For example, a number of letters in the Bulgarian and Serbian alphabets have forms distinct from their Russian counterparts and from each other. In some cases the localized form differs only subtly from the script "norm", in others the forms are radically distinct. This feature enables localized forms of glyphs to be substituted for default forms.'
  },
  ltra: {
    friendlyName: 'Left-to-right glyph alternates',
    description:
      "This feature applies glyphic variants (other than mirrored forms) appropriate for left-to-right text (for mirrored forms, see 'ltrm')."
  },
  ltrm: {
    friendlyName: 'Left-to-right mirrored forms',
    description:
      "This feature applies mirrored forms appropriate for left-to-right text. (For left-to-right glyph alternates, see 'ltra')."
  },
  mark: {
    friendlyName: 'Mark Positioning',
    description: 'Positions mark glyphs with respect to base glyphs.'
  },
  med2: {
    friendlyName: 'Medial Forms #2',
    description:
      'Used to replace Alaph glyphs in the middle of Syriac words when the preceding base character can be joined to. This feature is used only for the Syriac script Alaph character.'
  },
  medi: {
    friendlyName: 'Medial Forms',
    description:
      'Replaces glyphs for characters that have applicable joining properties with an alternate form when occurring in a medial context. This applies to characters that have the Unicode Joining_Type property value Dual_Joining.'
  },
  mgrk: {
    friendlyName: 'Mathematical Greek',
    description:
      'Replaces standard typographic forms of Greek glyphs with corresponding forms commonly used in mathematical notation (which are a subset of the Greek alphabet).'
  },
  mkmk: {
    friendlyName: 'Mark to Mark Positioning',
    description:
      'Positions marks with respect to other marks. Required in various non-Latin scripts like Arabic.'
  },
  mset: {
    friendlyName: 'Alternate Annotation Forms',
    description:
      'Positions Arabic combining marks in fonts for Windows 95 using glyph substitution.'
  },
  nalt: {
    friendlyName: 'NLC Kanji Forms',
    description:
      'Replaces default glyphs with various notational forms (e.g. glyphs placed in open or solid circles, squares, parentheses, diamonds or rounded boxes). In some cases an annotation form may already be present, but the user may want a different one.'
  },
  nlck: {
    friendlyName: 'Nukta Forms',
    description:
      "The National Language Council (NLC) of Japan has defined new glyph shapes for a number of JIS characters in 2000. The 'nlck' feature is used to access those glyphs."
  },
  nukt: {
    friendlyName: 'Numerators',
    description: 'Produces Nukta forms in Indic scripts.'
  },
  numr: {
    friendlyName: 'Oldstyle Figures',
    description:
      'Replaces selected figures (digits) which precede a slash with numerator figures, and replaces the typographic slash with the fraction slash.'
  },
  onum: {
    friendlyName: 'Optical Bounds',
    description:
      'This feature changes selected figures from the default or lining style to oldstyle form.'
  },
  // DEPRECATED
  opbd: {
    friendlyName: 'Ordinals',
    description:
      'Aligns glyphs by their apparent left or right extents in horizontal setting, or apparent top or bottom extents in vertical setting, replacing the default behavior of aligning glyphs by their origins. Another name for this behavior would be visual justification. The optical edge of a given glyph is only indirectly related to its advance width or bounding box; this feature provides a means for getting true visual alignment.'
  },
  ordn: {
    friendlyName: 'Ornaments',
    description:
      'Replaces default alphabetic glyphs with the corresponding ordinal forms for use after figures. One exception to the follows-a-figure rule is the numero character (U+2116), which is actually a ligature substitution, but is best accessed through this feature.'
  },
  ornm: {
    friendlyName: 'Ornaments',
    description:
      'This is a dual-function feature, which uses two input methods to give the user access to ornament glyphs (e.g. fleurons, dingbats and border elements) in the font. One method replaces the bullet character with a selection from the full set of available ornaments; the other replaces specific "lower ASCII" characters with ornaments assigned to them. The first approach supports the general or browsing user; the second supports the power user.'
  },
  palt: {
    friendlyName: 'Proportional Alternate Widths',
    description:
      "Re-spaces glyphs designed to be set on full-em widths, fitting them onto individual (more or less proportional) horizontal widths. This differs from 'pwid' in that it does not substitute new glyphs (GPOS, not GSUB feature). The user may prefer the monospaced form, or may simply want to ensure that the glyph is well-fit and not rotated in vertical setting (Latin forms designed for proportional spacing would be rotated)."
  },
  pcap: {
    friendlyName: 'Petite Capitals',
    description:
      'Some fonts contain an additional size of capital letters, shorter than the regular smallcaps and whimsically referred to as petite caps. Such forms are most likely to be found in designs with a small lowercase x-height, where they better harmonise with lowercase text than the taller smallcaps (for examples of petite caps, see the Emigre type families Mrs Eaves and Filosofia). This feature turns glyphs for lowercase characters into petite capitals. Forms related to petite capitals, such as specially designed figures, may be included.'
  },
  pkna: {
    friendlyName: 'Proportional Kana',
    description:
      'Replaces glyphs, kana and kana-related, set on uniform widths (half or full-width) with proportional glyphs.'
  },
  pnum: {
    friendlyName: 'Proportional Figures',
    description:
      'Replaces figure glyphs set on uniform (tabular) widths with corresponding glyphs set on glyph-specific (proportional) widths. Tabular widths will generally be the default, but this cannot be safely assumed. Of course this feature would not be present in monospaced designs.'
  },
  pref: {
    friendlyName: 'Pre-base Forms',
    description: 'Substitutes the pre-base form of a consonant.'
  },
  pres: {
    friendlyName: 'Pre-base Substitutions',
    description:
      'Produces the pre-base forms of conjuncts in Indic scripts. It can also be used to substitute the appropriate glyph variant for pre-base vowel signs.'
  },
  pstf: {
    friendlyName: 'Post-base Forms',
    description: 'Substitutes the post-base form of a consonant.'
  },
  psts: {
    friendlyName: 'Post-base Substitutions',
    description:
      'Substitutes a sequence of a base glyph and post-base glyph, with its ligaturised form.'
  },
  pwid: {
    friendlyName: 'Proportional Widths',
    description:
      'Replaces glyphs set on uniform widths (typically full or half-em) with proportionally spaced glyphs. The proportional variants are often used for the Latin characters in CJKV fonts, but may also be used for Kana in Japanese fonts.'
  },
  qwid: {
    friendlyName: 'Quarter Widths',
    description:
      'Replaces glyphs on other widths with glyphs set on widths of one quarter of an em (half an en). The characters involved are normally figures and some forms of punctuation.'
  },
  rand: {
    friendlyName: 'Randomize',
    description:
      'In order to emulate the irregularity and variety of handwritten text, this feature allows multiple alternate forms to be used.'
  },
  rclt: {
    friendlyName: 'Required Contextual Alternates',
    description:
      "In specified situations, replaces default glyphs with alternate forms which provide for better joining behavior or other glyph relationships. Especially important in script typefaces which are designed to have some or all of their glyphs join, but applicable also to e.g. variants to improve spacing. This feature is similar to 'calt', but with the difference that it should not be possible to turn off 'rclt' substitutions: they are considered essential to correct layout of the font."
  },
  rkrf: {
    friendlyName: 'Rakar Forms',
    description:
      'Produces conjoined forms for consonants with rakar in Devanagari and Gujarati scripts.'
  },
  rlig: {
    friendlyName: 'Required Ligatures',
    description:
      'Replaces a sequence of glyphs with a single glyph which is preferred for typographic purposes. This feature covers those ligatures, which the script determines as required to be used in normal conditions. This feature is important for some scripts to insure correct glyph formation.'
  },
  rphf: {
    friendlyName: 'Reph Form',
    description: 'Substitutes the Reph form for a consonant and halant sequence.'
  },
  rtbd: {
    friendlyName: 'Right Bounds',
    description:
      "Aligns glyphs by their apparent right extents at the right ends of horizontal lines of text, replacing the default behavior of aligning glyphs by their origins. This feature is called by the Optical Bounds ('opbd') feature."
  },
  rtla: {
    friendlyName: 'Right-to-left alternates',
    description:
      "This feature applies glyphic variants (other than mirrored forms) appropriate for right-to-left text. (For mirrored forms, see 'rtlm'.)"
  },
  rtlm: {
    friendlyName: 'Right-to-left mirrored forms',
    description:
      "This feature applies mirrored forms appropriate for right-to-left text other than for those characters that would be covered by the character-level mirroring step performed by an OpenType layout engine. (For right-to-left glyph alternates, see 'rtla'.)"
  },
  ruby: {
    friendlyName: 'Ruby Notation Forms',
    description:
      'Japanese typesetting often uses smaller kana glyphs, generally in superscripted form, to clarify the meaning of kanji which may be unfamiliar to the reader. These are called "ruby", from the old typesetting term for four-point-sized type. This feature identifies glyphs in the font which have been designed for this use, substituting them for the default designs.'
  },
  rvrn: {
    friendlyName: 'Required Variation Alternates',
    description:
      'This feature is used in fonts that support OpenType Font Variations in order to select alternate glyphs for particular variation instances. (For background on OpenType Font Variations, see OpenType Font Variations Overview.)'
  },
  salt: {
    friendlyName: 'Stylistic Alternates',
    description:
      'Many fonts contain alternate glyph designs for a purely esthetic effect; these don’t always fit into a clear category like swash or historical. As in the case of swash glyphs, there may be more than one alternate form. This feature replaces the default forms with the stylistic alternates.'
  },
  sinf: {
    friendlyName: 'Scientific Inferiors',
    description:
      'Replaces lining or oldstyle figures (digits) with inferior figures (smaller glyphs which sit lower than the standard baseline, primarily for chemical or mathematical notation). May also replace glyphs for lowercase characters with alphabetic inferiors.'
  },
  size: {
    friendlyName: 'Optical size',
    description:
      'This feature stores two kinds of information about the optical size of the font: design size (the point size for which the font is optimized) and size range (the range of point sizes which the font can serve well), as well as other information which helps applications use the size range. The design size is useful for determining proper tracking behavior. The size range is useful in families which have fonts covering several ranges. Additional values serve to identify the set of fonts which share related size ranges, and to identify their shared name. Note that sizes refer to nominal final output size, and are independent of viewing magnification or resolution.'
  },
  smcp: {
    friendlyName: 'Small Capitals',
    description:
      'This feature turns glyphs for lowercase characters into small capitals. It is generally used for display lines set in Large & small caps, such as titles. Forms related to small capitals, such as oldstyle figures, may be included.'
  },
  smpl: {
    friendlyName: 'Simplified Forms',
    description:
      'Replaces "traditional" Chinese or Japanese forms with the corresponding "simplified" forms.'
  },
  'ss01 - ss20': {
    friendlyName: 'Stylistic Set 1 - Stylistic Set 20',
    description:
      "In addition to, or instead of, stylistic alternatives of individual glyphs (see 'salt' feature), some fonts may contain sets of stylistic variant glyphs corresponding to portions of the character set, e.g. multiple variants for lowercase letters in a Latin font. Glyphs in stylistic sets may be designed to harmonise visually, interract in particular ways, or otherwise work together. Examples of fonts including stylistic sets are Zapfino Linotype and Adobe’s Poetica. Individual features numbered sequentially with the tag name convention 'ss01', 'ss02', 'ss03'… 'ss20' provide a mechanism for glyphs in these sets to be associated via GSUB lookup indices to default forms and to each other, and for users to select from available stylistic sets."
  },
  ssty: {
    friendlyName: 'Math script style alternates',
    description:
      "This feature provides glyph variants adjusted to be more suitable for use in subscripts and superscripts. The script style forms should not be scaled or moved in the font; scaling and moving them is done by the math layout engine. Instead, the 'ssty' feature should provide glyph forms that result in shapes that look good as superscripts and subscripts when scaled and positioned by the Math engine. When designing the script forms, the font developer may assume that MATH.MathConstants.scriptPercentScaleDown and MATH.MathConstants.scriptScriptPercentScaleDown will be the scaling factors used by the Math engine."
  },
  stch: {
    friendlyName: 'Stretching Glyph Decomposition',
    description:
      'Unicode characters, such as the Syriac Abbreviation Mark (U+070F), that enclose other characters need to be able to stretch in order to dynamically adapt to the width of the enclosed text. This feature defines a decomposition set consisting of an odd number of glyphs which describe the stretching glyph. The odd numbered glyphs in the decomposition are fixed reference points which are distributed evenly from the start to the end of the enclosed text. The even numbered glyphs may be repeated as necessary to fill the space between the fixed glyphs. The first and last glyphs may either be simple glyphs with width at the baseline, or mark glyphs. All other decomposition glyphs should have width, but must be defined as mark glyphs.'
  },
  subs: {
    friendlyName: 'Subscript',
    description:
      "The 'subs' feature may replace a default glyph with a subscript glyph, or it may combine a glyph substitution with positioning adjustments for proper placement."
  },
  sups: {
    friendlyName: 'Superscript',
    description:
      'Replaces lining or oldstyle figures with superior figures (primarily for footnote indication), and replaces lowercase letters with superior letters (primarily for abbreviated French titles).'
  },
  swsh: {
    friendlyName: 'Swash',
    description:
      'This feature replaces default character glyphs with corresponding swash glyphs. Note that there may be more than one swash alternate for a given character.'
  },
  titl: {
    friendlyName: 'Titling',
    description:
      'This feature replaces the default glyphs with corresponding forms designed specifically for titling. These may be all-capital and/or larger on the body, and adjusted for viewing at larger sizes.'
  },
  tjmo: {
    friendlyName: 'Trailing Jamo Forms',
    description: 'Substitutes the trailing jamo form of a cluster.'
  },
  tnam: {
    friendlyName: 'Traditional Name Forms',
    description:
      'Replaces "simplified" Japanese kanji forms with the corresponding "traditional" forms. This is equivalent to the Traditional Forms feature, but explicitly limited to the traditional forms considered proper for use in personal names (as many as 205 glyphs in some fonts).'
  },
  tnum: {
    friendlyName: 'Tabular Figures',
    description:
      'Replaces figure glyphs set on proportional widths with corresponding glyphs set on uniform (tabular) widths. Tabular widths will generally be the default, but this cannot be safely assumed. Of course this feature would not be present in monospaced designs.'
  },
  trad: {
    friendlyName: 'Traditional Forms',
    description:
      "Replaces 'simplified' Chinese hanzi or Japanese kanji forms with the corresponding 'traditional' forms."
  },
  twid: {
    friendlyName: 'Third Widths',
    description:
      'Replaces glyphs on other widths with glyphs set on widths of one third of an em. The characters involved are normally figures and some forms of punctuation.'
  },
  unic: {
    friendlyName: 'Unicase',
    description:
      'This feature maps upper- and lowercase letters to a mixed set of lowercase and small capital forms, resulting in a single case alphabet (for an example of unicase, see the Emigre type family Filosofia). The letters substituted may vary from font to font, as appropriate to the design. If aligning to the x-height, smallcap glyphs may be substituted, or specially designed unicase forms might be used. Substitutions might also include specially designed figures.'
  },
  valt: {
    friendlyName: 'Alternate Vertical Metrics',
    description:
      'Repositions glyphs to visually center them within full-height metrics, for use in vertical setting. Applies to full-width Latin, Greek, or Cyrillic glyphs, which are typically included in East Asian fonts, and whose glyphs are aligned on a common horizontal baseline and not rotated relative to the page or text frame.'
  },
  vatu: {
    friendlyName: 'Vattu Variants',
    description:
      'In an Indic consonant conjunct, substitutes a ligature glyph for a base consonant and a following vattu (below-base) form of a conjoining consonant, or for a half form of a consonant and a following vattu form.'
  },
  vchw: {
    friendlyName: 'Vertical Contextual Half-width Spacing',
    description:
      "Contextually re-spaces glyphs designed to be set on full-em heights, fitting them onto individual half-width vertical heights, to approximate more sophisticated text layout, such as what is described in Requirements for Japanese Text Layout (JLREQ) or similar CJK text-layout specifications that expect half-width forms of characters whose default glyphs are full-width.* This differs from 'vhal' in that the re-spacing is contextual. This feature may be invoked to get better fit for punctuation or symbol glyphs without disrupting the monospaced alignment."
  },
  vert: {
    friendlyName: 'Vertical Alternates',
    description:
      'Transforms default glyphs into glyphs that are appropriate for upright presentation in vertical writing mode. While the glyphs for most characters in East Asian writing systems remain upright when set in vertical writing mode, some must be transformed — usually by rotation, shifting, or different component ordering — for vertical writing mode.'
  },
  vhal: {
    friendlyName: 'Alternate Vertical Half Metrics',
    description:
      "Re-spaces glyphs designed to be set on full-em heights, fitting them onto half-em heights. This differs from 'valt', which repositions a glyph but does not affect its advance."
  },
  vjmo: {
    friendlyName: 'Vowel Jamo Forms',
    description: 'Substitutes the vowel jamo form of a cluster.'
  },
  vkna: {
    friendlyName: 'Vertical Kana Alternates',
    description:
      "Replaces standard kana with forms that have been specially designed for only vertical writing. This is a typographic optimization for improved fit and more even color. Also see 'hkna'."
  },
  vkrn: {
    friendlyName: 'Vertical Kerning',
    description:
      'Adjusts amount of space between glyphs, generally to provide optically consistent spacing between glyphs. Although a well-designed typeface has consistent inter-glyph spacing overall, some glyph combinations require adjustment for improved legibility. Besides standard adjustment in the vertical direction, this feature can supply size-dependent kerning data via device tables, “cross-stream” kerning in the X text direction, and adjustment of glyph placement independent of the advance adjustment. Note that this feature may apply to runs of more than two glyphs, and would not be used in monospaced fonts. Also note that this feature applies only to text set vertically.'
  },
  vpal: {
    friendlyName: 'Proportional Alternate Vertical Metrics',
    description:
      "Re-spaces glyphs designed to be set on full-em heights, fitting them onto individual (more or less proportional) vertical heights. This differs from 'valt', which repositions a glyph but does not affect its advance."
  },
  vrt2: {
    friendlyName: 'Vertical Alternates and Rotation',
    description:
      "Replaces some fixed-width (half-, third- or quarter-width) or proportional-width glyphs (mostly Latin or katakana) with forms suitable for vertical writing (that is, rotated 90 degrees clockwise). Note that these are a superset of the glyphs covered in the 'vert' table."
  },
  vrtr: {
    friendlyName: 'Vertical Alternates for Rotation',
    description:
      'Transforms default glyphs into glyphs that are appropriate for sideways presentation in vertical writing mode. While the glyphs for most characters in East Asian writing systems remain upright when set in vertical writing mode, glyphs for other characters — such as those of other scripts or for particular Western-style punctuation — are expected to be presented sideways in vertical writing.'
  },
  zero: {
    friendlyName: 'Slashed Zero',
    description:
      'Some fonts contain both a default form of zero, and an alternative form which uses a diagonal slash through the counter. Especially in condensed designs, it can be difficult to distinguish between 0 and O (zero and capital O) in any situation where capitals and lining figures may be arbitrarily mixed. This feature allows the user to change from the default 0 to a slashed form.'
  }
}

export default featureTable

/*

tags = $$('[id^=tag-]').map(tag => tag.innerText.replace('Tag: ', '').replaceAll("'", ''))
functionEms = $$('em').filter(node => node.innerText === 'Function:')
nameEms = $$('em').filter(node => node.innerText.toLowerCase().includes('friendly name'))

obj = {}

tags.forEach((tag, i) => {
    try {
      obj[tag] = {
        friendlyName: nameEms[i].parentElement.innerText.replace('Friendly name:', '').trim(),
        description: functionEms[i].parentElement.innerText.replace('Function:', '').trim()
      }
    } catch (e) {
      obj[tag] = {}
      console.log({ index: i }, e)
    }
})

console.log(JSON.stringify(obj, null, 3))
*/
