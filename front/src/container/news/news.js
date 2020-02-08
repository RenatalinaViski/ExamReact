import React from 'react'
import Slide from '../main/slide/slide'
import { connect } from 'react-redux'
import { fetchArticle} from '../../store/actions/article'
import { Redirect } from 'react-router-dom'

class News extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchArticle()
    }

    componentNews(arr, bool) {
        let arrSlid = arr.split("$")
        let img = arrSlid[1]
        let head = arrSlid[2]
        let paragraph = arrSlid[3]
        let path = "../../img" + { img } + ".jpg"
        return (
            <>
                <Slide img={arrSlid[1]} head={arrSlid[2]} paragraph={arrSlid[3]} bool={bool} key={arrSlid[1]} />
            </>
        )
    }

    render() {
        return (
            <>                     
            <div className="row center mt-5">
                <div className="text-center center">
                <div className="card text-center  col-10">
                    {
                        this.props.articles.articles.length !== 0 ?
                            this.props.articles.articles.map(data => this.componentNews(data))
                            : false
                    }
                </div>
                </div>
                </div>
               
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles,
        loading: state.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchArticle: () => dispatch(fetchArticle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)