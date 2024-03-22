import React, { Component } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        article: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
    } catch (error) {
      console.error("Error updating news:", error);
    }
  }

  async componentDidMount() {
    try {
      await this.updateNews();
    } catch (error) {
      console.error("Error in componentDidMount:", error);
    }
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState((prevState) => ({
        article: prevState.article.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      }));
    } catch (error) {
      console.error("Error fetching next page:", error);
    }
  };

  render() {
    return (
      <>
        <h1 className="text-center">Top Headlines: </h1>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length < this.state.totalResults}
          loader={<><h4 className="container">Loading...</h4></>}
        >
          <div className="container">
            <div className="row">
              {this.state.article.map((element) => (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItems
                    imgUrl={element.urlToImage}
                    title={element.title ? element.title.slice(0, 41) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
