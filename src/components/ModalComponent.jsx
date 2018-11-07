import React from 'react';
import './modalComponent.scss';

class ModalComponent extends React.Component {

    render() {
        let { selected, close } = this.props
        return (
            <div className="Modal">
                {

                    this.props.selected ?
                        <div onClick={close} className="positionModal">

                            <div className="Description">Name</div>
                            <div className="ListModal">
                                {selected.name}
                            </div>
                            <div className="Description">Description</div>
                            <div className="ListModal">
                                {selected.description}
                            </div>
                            <div className="Title">Comics</div>
                            {
                                selected.comics.items.map(item => <div className="ListModal" key={item.resourceURI}> {item.name}</div>)
                            }
                            <div className="Title">Series</div>
                            {
                                selected.series.items.map(item => <div className="ListModal" key={item.resourceURI}> {item.name}</div>)
                            }
                            <div className="Title">More Informatión</div>
                            <div className="ListModal"><a className="Link" href={selected.urls[0].url} target='_blank' rel="noopener noreferrer"> Hero Detail</a></div>
                        </div>
                        :
                        ''
                }
            </div>

        )
    }
}

export default ModalComponent;