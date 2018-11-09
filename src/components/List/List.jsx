import React, { Component } from 'react';
import './list.scss';

class List extends Component {

    render() {
        return (
            <div className="list">
                {this.props.personajes.map(personaje => {

                    return (
                        <div className="ListItem" onClick={() => this.props.select(personaje)} key={personaje.id}>


                            <img src={
                                personaje.thumbnail.path + '/landscape_large.' + personaje.thumbnail.extension
                            }
                                alt="heroes" />
                            <div className="TitleItem">
                                {personaje.name}
                            </div>
                        </div>
                    )
                }
                )};
            </div>
        )
    }
}

export default List;