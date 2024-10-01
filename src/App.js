import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './component/LoginForm'
import Home from './component/Home'
import NotFound from './component/NotFound'
import ProtectedRoute from './component/ProtectedRoute'
import AboutJob from './component/AboutJob'
import AllJobs from './component/AllJobs'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={AllJobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJob} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
