import react from 'react';

export default class Subtotal extends React.Component{
    render(){
        return(
            <div className="show-grid">
                <div className="row">
                <div className="col-xs-6">
                    Subtotal
                </div>
                <div className="col-xs-6">
                    {'$${this.props.price}'}
                </div>
                </div>
            </div>
        );
    }
}