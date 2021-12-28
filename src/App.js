import Form from './components/Form/Form'
import { AppWrapper } from './styles/globalStyles'
import { Global } from './styles/globalStyles'
import { onChangeBackImg, onSubmitHandler } from './components/utils/utils'
import Helmet from 'react-helmet'

const App = () => {
  const submitHandler = onSubmitHandler
  const backImage = onChangeBackImg

  return (
    <>
      <Helmet>
        <title>Form PIK</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700;900&family=Ubuntu:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Global url={backImage} />
      <AppWrapper>
        <Form onSubmit={submitHandler} />
      </AppWrapper>
    </>
  )
}

export default App
