import React, { Component } from "react";

import Header from "../../components/Header";
import List from "../../components/List";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Search from "../../components/Search";

import "./Warehouse.css";

export default class Warehouse extends Component {
  state = {
    towers: [],
  };

  async getTowers(popup = false, id = null) {
    if (id) {
      const towers = await (
        await fetch(`http://localhost:3004/warehouse/${id}`)
      ).json();

      this.setState({ towers });
      console.log(this.state.towers);
    } else {
      const towers = await (
        await fetch("http://localhost:3004/warehouse")
      ).json();

      this.setState({ towers });
      console.log(this.state.towers);
    }

    if (popup) {
      alert("Towers Fetched!");
    }
  }

  async componentDidMount() {
    const towers = await (
      await fetch("http://localhost:3004/warehouse")
    ).json();

    this.setState({ towers });
  }

  render() {
    return (
      <div className="container" style={{ marginBottom: "300px" }}>
        <Header name="Warehouse" />
        <main>
          <Search type="text" />
          <List towers={this.state.towers} />
          <Button name="Refresh" alert={() => this.getTowers(true)} />
          <Button name="Get Weather!" alert={() => alert("Weather fetched!")} />
          <Card towers={this.state.towers} />
        </main>
      </div>
    );
  }
}
