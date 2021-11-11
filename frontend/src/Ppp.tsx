import App from './App';
import App2 from './App2';
import {AuthProvider} from './Context/AuthContext';

function Ppp() {

  return (
    <AuthProvider>
      <App/>
    </AuthProvider>

  );
}

export default Ppp;
