import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getHomeDataAction } from '@/store/actionCreators'
import Header from '@/components/Header'
import Middle from '@/components/Middle'
import Footer from '@/components/Footer'
import Banners from './Banners'
import Show from './Shows'

const Home = (props) => {
  const {
    loading,
    bannerslist,
    showlist,
  } = props
  const {
    getHomeDataActionDispatch
  } = props
  console.log(showlist,'qqqq')
  // console.log(bannerslist,'www')
  useEffect (() => {
    getHomeDataActionDispatch()
  },[])
  return (
    <div>
      <Banners bannerslist={bannerslist}/>
      <Middle />
      <Show showlist={showlist}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  bannerslist: state.bannerslist.bannerslist,
  showlist: state.showlist.showlist
})

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeDataActionDispatch() {
    dispatch(getHomeDataAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)