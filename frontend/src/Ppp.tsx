import App from './App';
import {AuthProvider} from './Context/AuthContext';

function Ppp() {

  return (
    <AuthProvider>
      <App/>
    </AuthProvider>

  );
}

export default Ppp;
