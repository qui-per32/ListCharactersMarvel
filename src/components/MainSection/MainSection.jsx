import React, {Component} from 'react';
import List from '../List/List.jsx';
import api from '../../services/api';
import './mainSection.scss';
import ModalComponent from '../ModalComponent/ModalComponent.jsx';

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personajes: [],
       open: false,
       selected: null,
    };
  }
  select(personaje){
     this.setState({selected: personaje});
  }

  unselect() {
    this.setState({ selected: null });
  }

  componentDidMount() {
      api.getData()
      .then((res)=>{      
         this.setState({
           personajes: res.data.data.results});  
      }
      )
      .catch(error => console.error(error));
  }

  render() {
    const {personajes, selected} = this.state;
    return (
      <section className="main">
        <ModalComponent selected={selected} close={this.unselect.bind(this)}/>
        <List personajes={personajes} select={this.select.bind(this)}/>
      </section>
    );
  }
} 

export default MainSection;