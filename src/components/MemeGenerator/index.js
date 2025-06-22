import {useState} from 'react'

import {Heading, Memeimage} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
const MemeGenerator = () => {
  const [ImageUrl, setImageUrl] = useState('')
  const [TopText, setTopText] = useState('')

  const [BottomText, setBottomText] = useState('')

  const [fontSize, setFontSize] = useState('8')
  const [showMeme, setShowMeme] = useState(false)
  const handelForm = e => {
    e.preventDefault()
    console.log({ImageUrl, TopText, BottomText, fontSize})
    setShowMeme(true)
  }

  const memeGenerator = () => {}
  return (
    <>
      <div>
        <h1>Meme Generator</h1>
        <form onSubmit={handelForm}>
          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              value={ImageUrl}
              name="imageUrl"
              onChange={e => setImageUrl(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="topText">Top Text</label>
            <input
              type="text"
              value={TopText}
              name="topText"
              onChange={e => setTopText(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="bottomText">Bottom Text</label>
            <input
              type="text"
              value={BottomText}
              name="bottomText"
              onChange={e => setBottomText(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="fontSize">Font Size</label>
            <select onChange={e => setFontSize(e.target.value)}>
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Generate</button>
        </form>
      </div>
      {showMeme ? (
        <Memeimage backgroundImage={ImageUrl}>
          <Heading fontSize={fontSize}>{TopText}</Heading>
          <Heading fontSize={fontSize}>{BottomText}</Heading>
        </Memeimage>
      ) : null}
    </>
  )
}

export default MemeGenerator
