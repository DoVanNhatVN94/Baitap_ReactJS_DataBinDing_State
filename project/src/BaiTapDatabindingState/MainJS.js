import React, { Component } from "react";
import GlassItem from "./GlassItem.js";

export default class MainJS extends Component {
  dataGlass = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    sp: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  renderGlass = () => {
    return this.dataGlass.map((glass) => {
      return (
        <button 
        onClick={()=>{
          this.showGlass(glass)
        }}
          className="btn btn-white vglasses__items col-2"
          key={`Glass ${glass.id}`}
        >
          <GlassItem dataGlass={glass} />
        </button>
      );
    });
  };
  showGlass=(glass)=>{
    this.setState({sp:glass})
  }
  render() {
    let { sp } = this.state;

    return (
      <div className="container vglasses py-3">
        <div className="row  justify-content-between">
          <div className="col-5 vglasses__top p-0 mb-3">
            <div className="vglasses__card">
              <div className="vglasses__model" id="avatar">
                <img src={sp.url} alt="" />
              </div>
              <div id="glassesInfo" className="vglasses__info">
                <h4 className="my-4 text-primary">{sp.name}</h4>
                <p className="my-3">{sp.desc}</p>
              </div>
            </div>
          </div>
          <div className="col-12 vglasses__bot">
            <div className="row">
              <div className="col-12">
                <h1 className="mb-2">Virtual Glasses</h1>
              </div>
            </div>
            <div className="row" id="vglassesList">
              {this.renderGlass()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
