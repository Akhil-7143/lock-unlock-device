import {useState} from 'react'
import {
  UnlockContainer,
  ImageElement,
  ParaElement,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(false)

  const onClickUnlock = () => {
    setLock(prevState => !prevState)
  }

  return (
    <UnlockContainer>
      {!lock ? (
        <>
          <ImageElement
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <ParaElement>Your Device is Locked</ParaElement>
          <Button type="button" onClick={onClickUnlock}>
            Unlock
          </Button>
        </>
      ) : (
        <>
          <ImageElement
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <ParaElement>Your Device is Unlocked</ParaElement>
          <Button type="button" onClick={onClickUnlock}>
            Lock
          </Button>
        </>
      )}
    </UnlockContainer>
  )
}

export default Unlock
