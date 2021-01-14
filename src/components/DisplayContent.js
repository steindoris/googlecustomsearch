import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Result from './Result'
import Loader from './Loader'
import Message from './Message'
import {resultList} from '../actions/searchActions'

const DisplayContent = ({title}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resultList(title))
    }, [title, dispatch])

  const listResult = useSelector(state => state.listResult)
  const { loading, error, items } = listResult
    
  return ( 
      <>
    {
        loading ? (
            <Loader />
            ) : error ? <Message variant='danger'>{error}</Message> : 
            <Row>
                {items && items.map((item, index) => (
                    <Col key={item._id} sm={14} md={8} lg={6} xl={4}>
                        <Result item={item} />
                    </Col>    
                ))}
            </Row>
    }
  </>
  )
}

export default DisplayContent
