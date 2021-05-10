import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class showTravel extends Component {
  constructor(props) {
    super(props);

    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeImage = this.onChangeImage.bind(this);
    // this.onChangePlace = this.onChangePlace.bind(this);
    // this.onChangeDetail = this.onChangeDetail.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      image: "",
      place: "",
      detail: "",
      // users: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          image: response.data.image,
          place: response.data.place,
          detail: response.data.detail,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeImage(e) {
    this.setState({
      image: e.target.value,
    });
  }
  onChangePlace(e) {
    this.setState({
      place: e.target.value,
    });
  }

  onChangeDetail(e) {
    this.setState({
      detail: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      name: this.state.name,
      image: this.state.image,
      place: this.state.place,
      detail: this.state.detail,
    };
    console.log(exercise);

    axios
      .get(
        "http://localhost:5000/exercises/getLocation/" + this.props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <>
       <section class="projects-section bg-light" id="projects">
      <div class="row align-items-center no-gutters mb-4 mb-lg-5">
    <div class="col-xl-7 col-lg-7">
      <img class="img-fluid mb-6 mb-lg-0" src={this.state.image} alt="" />
    </div>
    <div class="col-xl-5 col-lg-5">
      <div class="featured-text text-center text-lg-left">
        <h4 class="text-black">{this.state.name}</h4>
        <p class="mb-0 text-black-60">The place: {this.state.place}</p>
        <p class="mb-0 text-black-60">Detail: {this.state.detail}</p>
        <br />
        {/* <Link class="btn btn-primary js-scroll-trigger" to={"/getLocation/" + props.exercise._id}>
          ShowDetail
        </Link> */}
      </div>
    </div>
  </div>
  </section>

      </>
    );
  }
}
