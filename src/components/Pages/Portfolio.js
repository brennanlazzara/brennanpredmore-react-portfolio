import React, { Component } from 'react';
import './portfolio.css';
import Card from '../Card';
import data from '../Data/Data'


// class component
class Portfolio extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
      
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {properties, property} = this.state;
    return (
      <div className="App">

        <button style={prevButton}
          onClick={() => this.prevProperty()} 
          disabled={property.index === 0}
        >Prev</button>
        <button style={nextButton}
          onClick={() => this.nextProperty()} 
          disabled={property.index === data.properties.length-1}
        >Next</button>
        <div className="page">
            <section>

  
            </section>

             <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Card key={property._id} property={property} />)
                  }
                </div>
              </div>
            </div> 

        </div>
      </div>
    );
  }
}
  const nextButton = {
    borderRadius: "10px",
    marginLeft: "1.5%",
    backgroundColor: "#4aaaa5",
    fontWeight: "bold"
  }

  const prevButton = {
    borderRadius: "10px",
    marginRight: "1.5%",
    backgroundColor: "#999999",
    fontWeight: "bold"
  }
export default Portfolio;