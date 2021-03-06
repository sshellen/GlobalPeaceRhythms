import React from "react";
import Tile from "/src/Components/Tile/Tile";
import SpotlightBanner from "/src/Components/SpotlightBanner/SpotlightBanner";
import leftPaddle from "/svg/leftArrow.svg";
import qs from "qs";
import "./css/index.css";
import TopPage from "/src/Components/TopPage/TopPage";
import Footer from "/src/Components/Footer/Footer";
const pageSize = 12;
class ViewArtists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      genres: {
        Rock: false,
        RhythmAndBlues: false,
        Blues: false,
        Jazz: false,
        HipHop: false,
        Folk: false,
        Reggae: false,
        Pop: false,
        Country: false,
        Other: false,
      },
      url: "",
      page: 1,
      pageCount: 1,
      showFilter: true,
      pagination: false,
    };
  }

  filter = () => {
    let genres = this.state.genres;
    let arr = [];
    let or = {};
    let filters = {};
    let returnAmount = this.state.page * pageSize;
    for (let obj in genres) {
      if (genres[obj] === true) {
        let selectedGenres = {};
        let genre = {};
        genre["$eq"] = obj;
        selectedGenres["genre"] = genre;
        arr.push(selectedGenres);
      }
    }

    or["$or"] = arr;
    filters["filters"] = or;
    let query = qs.stringify(filters);
    this.setState({
      url: `${process.env.API_URL}/api/artists?${query}&populate=*`,
    });
    this.fetchData(
      `${process.env.API_URL}/api/artists?${query}&populate=*&pagination[start]=0&pagination[limit]=${returnAmount}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ artists: data.data });
      });
  };

  pagination = () => {
    const query = qs.stringify(
      {
        pagination: {
          page: this.state.page,
          pageSize: 12,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    return query;
  };

  toggleGenres = () => {
    if (this.state.showFilter) {
      this.setState({ showFilter: false }, () => {
        this.showHidePaddle.classList.add("hide");
        this.showHidePaddle.classList.remove("show");
        let genres = this.state.genres;
        let updatedGenres = {};
        for (let obj in genres) {
          genres[obj] = false;
          updatedGenres = genres;
        }
        this.setState({ genres: updatedGenres }, this.filter);
      });
    } else {
      this.setState({ showFilter: true }, () => {
        this.showHidePaddle.classList.add("show");
        this.showHidePaddle.classList.remove("hide");
      });
    }
  };

  toggleFilterOption = (e) => {
    let selected = e.target.checked;
    let option = e.target.value;
    let genres = this.state.genres;
    let updatedGenres = {};

    for (let obj in genres) {
      if (obj === option) {
        if (selected) {
          genres[obj] = true;
        } else {
          genres[obj] = false;
        }
      }
      updatedGenres = genres;
    }

    this.setState({ genres: updatedGenres }, this.filter);
  };

  fetchData = async (url) => {
    const request = url;
    let data = await fetch(request, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  };
  loadMore = () => {
    if (this.state.page < this.state.pageCount) {
      this.setState({ page: this.state.page + 1 }, () => {
        this.fetchData(this.state.url + "&" + this.pagination())
          .then((response) => response.json())
          .then((data) => {
            this.setState({ artists: [...this.state.artists, ...data.data] });
          });
      });
    }
  };
  componentDidMount() {
    this.setState({ url: `${process.env.API_URL}/api/artists?populate=*` });
    this.fetchData(
      `${process.env.API_URL}/api/artists?populate=*&` + this.pagination()
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          artists: data.data,
          page: data.meta.pagination.page,
          pageCount: data.meta.pagination.pageCount,
        });
      });
    this.showHidePaddle = document.getElementById("showHidePaddle");
  }
  render() {
    return (
      <>
        <TopPage />
        <SpotlightBanner />
        <h1>Artists</h1>
        <main className="artists">
          <aside className="filterNav">
            <div className="buttonBar">
              <button
                className="navOption selected"
                onClick={() => this.props.history.push("./viewartists")}
              >
                VIEW ARTISTS
              </button>
              <button
                className="navOption"
                onClick={() => this.props.history.push("./contribute")}
              >
                CONTRIBUTE AS AN ARTIST
              </button>
            </div>

            <div className="formHeader" onClick={this.toggleGenres}>
              <h3>VIEW GENRE</h3>
              <div className="leftPaddle">
                <a onClick={() => this.changeDate("decrement")}>
                  <svg
                    className="show"
                    id="showHidePaddle"
                    width="12"
                    height="32"
                    viewBox="0 0 20 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="leftPaddle"
                      d="M0 21L24 0.215393L24 41.7846L0 21Z"
                      fill="#011526"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {this.state.showFilter && (
              <form name="genre" className="genre">
                <div className="leftCol">
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="Rock"
                      value="Rock"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="Rock">Rock</label>
                  </div>
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="RhythmAndBlues"
                      value="RhythmAndBlues"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="RhythmAndBlues">R&B</label>
                  </div>
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="Jazz"
                      value="Jazz"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="Jazz">Jazz</label>
                  </div>
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="HipHop"
                      value="HipHop"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="HipHop">Hip Hop</label>
                  </div>
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="Blues"
                      value="Blues"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="Blues">Blues</label>
                  </div>
                </div>
                <div className="rightCol">
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="Folk"
                      value="Folk"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="Folk">Folk</label>
                  </div>
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="Reggae"
                      value="Reggae"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="Reggae">Reggae</label>
                  </div>
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="Pop"
                      value="Pop"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="Pop">Pop</label>
                  </div>
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="Country"
                      value="Country"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="Country">Country</label>
                  </div>
                  <div className="formRow">
                    <input
                      type="checkbox"
                      id="Other"
                      value="Other"
                      onChange={(e) => this.toggleFilterOption(e)}
                    />{" "}
                    <label htmlFor="Other">Other</label>
                  </div>
                </div>
              </form>
            )}
          </aside>
          <section>
            <h2 className="viewHeading">View Artists</h2>
            <div className="artistTiles" id="artistTiles">
              {this.state.artists &&
                this.state.artists.map((artist, index) => (
                  <Tile key={`artist${index}`} artist={artist.attributes} />
                ))}
              {this.state.artists && this.state.artists.length === 0 && (
                <h3>No results found.</h3>
              )}
            </div>
            {this.state.pageCount > this.state.page && (
              <div className="loadMore">
                <button onClick={this.loadMore}>LOAD MORE</button>
              </div>
            )}
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
export default ViewArtists;
