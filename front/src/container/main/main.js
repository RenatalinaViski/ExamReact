import React from 'react'
import Slide from './slide/slide'
import { connect } from 'react-redux'
import { fetchArticle} from '../../store/actions/article'
import Head from './head/head'
import classes from './main.css'
import Propose from './listPropose/propose'
import Article from './article/article'


class Main extends React.Component {
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
        if(localStorage.newUser){
            localStorage.removeItem("newUser")
        }
        if(localStorage.reception){
            localStorage.removeItem("reception")
        }
        return (
            <>           
            <Head key="head"/>             
            <Propose key="propose" />
            <Article key="article" />               
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)