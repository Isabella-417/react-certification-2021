import React from 'react';
import List from '../../components/List';
import Card from '../../components/Card';
import data from '../../db.json';
import './Home.styles.css';

function HomePage() {
  // const history = useHistory();
  // const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <div>
      <List children={data.items} Component={Card} />∆
    </div>
  );
}

export default HomePage;
