import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateLocation extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);
    this.onChangeDetail = this.onChangeDetail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      image: "",
      place: "",
      detail: "",
    };
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
      .post("http://localhost:5000/exercises/createLocation", exercise)
      .then((res) => console.log(res.data));

    window.location = "/travel";
  }

  render() {
    return (
      <>
        <div class="container">
          <div class="form-group">
            <form onSubmit={this.onSubmit}>
              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Province: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      // placeholder="กรุณากรอกชื่อรายการวิ่ง"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>The place: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.place}
                      onChange={this.onChangePlace}
                      placeholder="กรุณากรอกชื่อสถานที่"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Image: </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.image}
                      onChange={this.onChangeImage}
                      placeholder="กรุณากรอกรูปภาพ"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div className="form-group">
                    <label>Detail: </label>
                    <textarea
                      type="text"
                      required
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={this.state.detail}
                      onChange={this.onChangeDetail}
                      placeholder="กรุณากรอกรายละเอียด"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
