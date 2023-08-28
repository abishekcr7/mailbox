import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import { Route,Redirect } from 'react-router-dom/cjs/react-router-dom';
import { useSelector } from 'react-redux';
import SignUp from './components/SignUp/signup';
import MailBox from './components/Mailbox/mailBox';
import MailboxEditor from './MailboxEditor';
import Inbox from './components/Mailbox/inbox';
import SentEmail from './components/Mailbox/SentEmail';

function App() {
  const isLoggedin=useSelector((state)=>state.auth.isAuthenticated)
  return (
    <div className="App">
      <NavBar />
      
      <Route path='/'>
        {!isLoggedin && <Redirect to='/Login' />}
      </Route>
      <Route path='/Login'>
        <SignUp />
      </Route>
      <Route path='/Mailbox'>{isLoggedin && <MailBox />}</Route>
      <Route path='/ComposeMail'><MailboxEditor /></Route>
      <Route path='/Inbox'><Inbox /></Route>
      <Route path='/Sent'><SentEmail /></Route>
    </div>
  );
}

export default App;
