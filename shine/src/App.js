import logo from './logo.svg';
import './App.css';

function App() {
 return <div>
  <h1>users</h1>
  <section className="container">
 <Details name= "Rahaman" job="Sales" Location="Guntur" />
 <Details name= "Rahim" job="Medical" Location="Hyd"/>
 <Details name= "Rishi" job="builder" Location="Bombay"/>
 </section>
 </div>
};

function Details(props) {
  return <div className="app">
    <h3>Name:{props.name}</h3>
    <p>JOB:{props.job}</p>
    <p>Location:{props.Location}</p>
  </div>
}

export default App;
